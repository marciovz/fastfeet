import Delivery from '../models/Delivery';
import Recipient from '../models/Recipient';


class GetDeliveryByDeliveryIdController {
  async show(req, res) {
    const deliverymanId = req.params.deliverymanId;
    
    const delivery = await Delivery.findByPk(req.params.deliveryId, {
      include: [
        {
          model: Recipient,
          as: 'recipient',
        },
      ],
    });

    if (!delivery) {
      return res.status(401).json({ error: 'Delivery not found!' });
    }

    if (delivery.deliveryman_id !== Number(deliverymanId)) {
      return res.status(401).json({ error: 'Deliveryman not found!' });
    }

    return res.json(delivery);
  }
}

export default new GetDeliveryByDeliveryIdController();
