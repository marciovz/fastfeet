import DeliveryProblem from '../models/DeliveryProblem';
import Delivery from '../models/Delivery';
import Deliveryman from '../models/Deliveryman';

class GetDeliveryProblemPendentController {
  async index(req, res) {
    const { page = 1, limit = 20 } = req.query;

    const deliveriesProblemPendent = await DeliveryProblem.findAll({
      limit,
      offset: (page - 1) * limit,
      attributes: ['id', 'description', 'createdAt', 'updatedAt'],
      include: [
        {
          model: Delivery,
          as: 'delivery',
          where: {
            canceled_at: null,
            end_date: null,
          },
          include: [
            {
              model: Deliveryman,
              as: 'deliveryman',
              attributes: ['id', 'name', 'email'],
            },
          ],
        },
      ],
    });

    return res.json(deliveriesProblemPendent);
  }
}

export default new GetDeliveryProblemPendentController();
