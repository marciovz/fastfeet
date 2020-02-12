import Delivery from '../models/Delivery';
import Deliveryman from '../models/Deliveryman';

class GetDeliveriesPendingController {
  async index(req, res) {
    const deliveryman = await Deliveryman.findByPk(req.params.id);
    if (!deliveryman) {
      return res.status(401).json({ error: 'Deliveryman not found!' });
    }

    const deliveries = await Delivery.findAll({
      where: {
        deliveryman_id: deliveryman.id,
        canceled_at: null,
        end_date: null,
      },
    });

    return res.json(deliveries);
  }
}

export default new GetDeliveriesPendingController();
