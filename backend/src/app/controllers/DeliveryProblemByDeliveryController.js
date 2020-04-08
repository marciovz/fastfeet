import * as Yup from 'yup';

import DeliveryProblem from '../models/DeliveryProblem';
import Delivery from '../models/Delivery';
import Deliveryman from '../models/Deliveryman';

import CancelDeliveryMail from '../jobs/CancelDeliveryMail';
import Queue from '../../lib/Queue';

class DeliveryProblemController {
  async index(req, res) {
    const { page = 1, limit = 20 } = req.query;

    const deliveriesProblem = await DeliveryProblem.findAll({
      where: {
        delivery_id: req.params.deliveryId,
      },
      limit,
      offset: (page - 1) * limit,
      attributes: ['id', 'description', 'createdAt', 'updatedAt'],
      include: [
        {
          model: Delivery,
          as: 'delivery',
          include: [
            {
              model: Deliveryman,
              as: 'deliveryman',
              attributes: ['id', 'name', 'email'],
              where: {id: req.params.deliverymanId}
            },
          ],
        },
      ],
    });

    return res.json(deliveriesProblem);
  }

   async store(req, res) {
    const schema = Yup.object().shape({
      description: Yup.string().required(),
    });
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fail!' });
    }

    const delivery = await Delivery.findOne({
      where: {
        id: req.params.deliveryId,
        deliveryman_id: req.params.deliverymanId,
        end_date: null,
        canceled_at: null,
      },
    });
    if (!delivery) {
      return res.status(401).json({ error: 'Delivery not match!' });
    }

    const { description } = req.body;
    const deliveryProblem = await DeliveryProblem.create({
      delivery_id: delivery.id,
      description,
    });

    return res.json(deliveryProblem);
  }

  
}

export default new DeliveryProblemController();
