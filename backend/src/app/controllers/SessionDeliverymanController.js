import * as Yup from 'yup';
import Deliveryman from '../models/Deliveryman';
import Avatar from '../models/Avatar';

class SessionDeliverymanController {
  async store(req, res) {
    const schema = Yup.object().shape({
      id: Yup.number()
        .integer()
        .required(),
    });
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }
    const deliveryman = await Deliveryman.findByPk(req.body.id, {
      attributes: ['id', 'name', 'email'],
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
}

export default new SessionDeliverymanController();
