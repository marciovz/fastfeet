import DeliveryProblem from '../models/DeliveryProblem';
import Delivery from '../models/Delivery';
import Deliveryman from '../models/Deliveryman';

class DeliveryProblemController {
  async index(req, res) {
    const { page = 1, limit = 20 } = req.query;

    const deliveriesProblem = await DeliveryProblem.findAll({
      limit,
      offset: (page - 1) * limit,
      attributes: ['id', 'description', 'createdAt', 'updatedAt'],
      include: [
        {
          model: Delivery,
          include: [
            {
              model: Deliveryman,
              attributes: ['id', 'name', 'email'],
            },
          ],
        },
      ],
    });

    return res.json(deliveriesProblem);
  }
}

export default new DeliveryProblemController();
