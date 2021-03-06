import { Op } from 'sequelize';
import * as Yup from 'yup';
import Deliveryman from '../models/Deliveryman';
import Avatar from '../models/Avatar';

class DeliverymanController {
  async index(req, res) {
    const { page = 1, limit = 20, q = null } = req.query;

    const optionsWhere = q
      ? {
          name: {
            [Op.iLike]: `%${q}%`,
          },
        }
      : {};

    const deliverymans = await Deliveryman.findAll({
      where: optionsWhere,
      limit,
      offset: (page - 1) * limit,
      attributes: ['id', 'name', 'email', 'created_at', 'updated_at'],
      include: [
        {
          model: Avatar,
          attributes: ['id', 'name', 'path', 'url'],
        },
      ],
    });

    return res.json(deliverymans);
  }

  async show(req, res) {
    const deliveryman = await Deliveryman.findByPk(req.params.id, {
      attributes: ['id', 'name', 'email', 'created_at', 'updated_at'],
      include: [
        {
          model: Avatar,
          attributes: ['id', 'name', 'path', 'url'],
        },
      ],
    });

    if (!deliveryman) {
      return res.status(401).json({ error: 'Deliveryman not found' });
    }

    return res.json(deliveryman);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      avatar_id: Yup.number().integer(),
    });
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const deliverymanExists = await Deliveryman.findOne({
      where: { email: req.body.email },
    });

    if (deliverymanExists) {
      return res.status(400).json({ error: 'Deliveryman already exists' });
    }

    const deliveryman = await Deliveryman.create(req.body);

    return res.json(deliveryman);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      avatar_id: Yup.number().integer(),
    });
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    let deliveryman = await Deliveryman.findByPk(req.params.id);

    if (!deliveryman) {
      return res.status(401).json({ error: 'Deliveryman not found' });
    }

    const { email } = req.body;

    if (email && email !== deliveryman.email) {
      const emailExists = await Deliveryman.findOne({ where: { email } });

      if (emailExists) {
        return res.status(400).json({ error: 'E-mail alread exists' });
      }
    }

    deliveryman = await deliveryman.update(req.body);

    return res.json(deliveryman);
  }

  async delete(req, res) {
    const deliveryman = await Deliveryman.findByPk(req.params.id);

    if (!deliveryman) {
      return res.status(401).json({ error: 'Deliveryman not found' });
    }

    await deliveryman.destroy();

    return res.send();
  }
}

export default new DeliverymanController();
