import * as Yup from 'yup';
import { Op } from 'sequelize';

import Delivery from '../models/Delivery';
import Recipient from '../models/Recipient';
import Deliveryman from '../models/Deliveryman';
import Signature from '../models/Signature';
import Avatar from '../models/Avatar';

import CreateDeliveryMail from '../jobs/CreateDeliveryMail';
import Queue from '../../lib/Queue';

class DeliveryController {
  async index(req, res) {
    const { page = 1, limit = 20, q = null } = req.query;

    const optionsWhere = q
      ? {
          product: {
            [Op.iLike]: `%${q}%`,
          },
        }
      : {};

    const deliveries = await Delivery.findAll({
      where: optionsWhere,
      limit,
      offset: (page - 1) * limit,
      attributes: [
        'id',
        'product',
        'canceled_at',
        'start_date',
        'end_date',
        'createdAt',
        'updatedAt',
      ],
      include: [
        {
          model: Signature,
          as: 'signature',
        },
        {
          model: Recipient,
          as: 'recipient',
        },
        {
          model: Deliveryman,
          as: 'deliveryman',
          attributes: ['id', 'name', 'email', 'createdAt', 'updatedAt'],
          include: [
            {
              model: Avatar,
            },
          ],
        },
      ],
    });

    return res.json(deliveries);
  }

  async show(req, res) {
    const delivery = await Delivery.findByPk(req.params.id, {
      attributes: [
        'id',
        'product',
        'canceled_at',
        'start_date',
        'end_date',
        'createdAt',
        'updatedAt',
      ],
      include: [
        {
          model: Signature,
          as: 'signature',
        },
        {
          model: Recipient,
          as: 'recipient',
        },
        {
          model: Deliveryman,
          as: 'deliveryman',
          attributes: ['id', 'name', 'email', 'createdAt', 'updatedAt'],
          include: [
            {
              model: Avatar,
            },
          ],
        },
      ],
    });

    if (!delivery) {
      return res.status(401).json({ error: 'Delivery not found!' });
    }

    return res.json(delivery);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      recipient_id: Yup.number()
        .integer()
        .positive()
        .required(),
      deliveryman_id: Yup.number()
        .integer()
        .positive()
        .required(),
      signature_id: Yup.number()
        .integer()
        .positive(),
      product: Yup.string().required(),
      canceled: Yup.date(),
      start_date: Yup.date(),
      end_date: Yup.date(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fail!' });
    }

    const recipient = await Recipient.findByPk(req.body.recipient_id);
    if (!recipient) {
      return res.status(400).json({ error: 'Recipient not found!' });
    }

    const deliveryman = await Deliveryman.findByPk(req.body.deliveryman_id);
    if (!deliveryman) {
      return res.status(400).json({ error: 'Deliveryman not found!' });
    }

    const delivery = await Delivery.create(req.body);

    await Queue.add(CreateDeliveryMail.key, {
      deliveryman,
      delivery,
    });

    return res.json(delivery);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      recipient_id: Yup.number()
        .integer()
        .positive(),
      deliveryman_id: Yup.number()
        .integer()
        .positive(),
      signature_id: Yup.number()
        .integer()
        .positive(),
      product: Yup.string(),
      canceled: Yup.date(),
      start_date: Yup.date(),
      end_date: Yup.date(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fail!' });
    }

    let delivery = await Delivery.findByPk(req.params.id);

    if (!delivery) {
      return res.status(401).json({ error: 'Delivery not found!' });
    }

    const { recipient_id, deliveryman_id } = req.body;

    if (recipient_id && recipient_id !== delivery.recipient_id) {
      const existRecipient = await Recipient.findByPk(recipient_id);
      if (!existRecipient) {
        return res.status(401).json({ error: 'New recipient not found!' });
      }
    }

    if (deliveryman_id && deliveryman_id !== delivery.deliveryman_id) {
      const existDeliveryman = await Deliveryman.findByPk(deliveryman_id);
      if (!existDeliveryman) {
        return res.status(401).json({ error: 'New deliveryman not found!' });
      }
    }

    delivery = await delivery.update(req.body);

    return res.json(delivery);
  }

  async delete(req, res) {
    const delivery = await Delivery.findByPk(req.params.id);

    if (!delivery) {
      return res.status(401).json({ error: 'Delivery not found!' });
    }

    await delivery.destroy();

    return res.send();
  }
}

export default new DeliveryController();
