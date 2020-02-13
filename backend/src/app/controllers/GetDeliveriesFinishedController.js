import { Op } from 'sequelize';

import Delivery from '../models/Delivery';
import Deliveryman from '../models/Deliveryman';

class GetDeliveriesFinishedController {
  async index(req, res) {
    const deliveryman = await Deliveryman.findByPk(req.params.id);
    if (!deliveryman) {
      return res.status(401).json({ error: 'Deliveryman not found!' });
    }

    const { page = 1, limit = 20 } = req.query;

    const deliveries = await Delivery.findAll({
      where: {
        deliveryman_id: deliveryman.id,
        canceled_at: null,
        end_date: {
          [Op.not]: null,
        },
      },
      limit,
      offset: (page - 1) * limit,
    });

    return res.json(deliveries);
  }
}

export default new GetDeliveriesFinishedController();
