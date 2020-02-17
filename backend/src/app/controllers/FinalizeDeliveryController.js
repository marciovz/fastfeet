import * as Yup from 'yup';

import Delivery from '../models/Delivery';
import Deliveryman from '../models/Deliveryman';
import Signature from '../models/Signature';

class FinalizeDeliveryController {
  async update(req, res) {
    const schema = Yup.object().shape({
      signature_id: Yup.number()
        .integer()
        .positive(),
      end_date: Yup.date().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fail!' });
    }

    try {
      /** if exist deliveryman */
      const deliveryman = await Deliveryman.findByPk(req.params.id);
      if (!deliveryman) {
        return res.status(401).json({ error: 'Deliveryman not found!' });
      }

      /** if exist delivery */
      let delivery = await Delivery.findOne({
        where: {
          id: req.params.delivery_id,
          deliveryman_id: deliveryman.id,
          end_date: null,
          canceled_at: null,
        },
      });
      if (!delivery) {
        return res.status(401).json({ error: 'Delivery does not match!' });
      }

      const { signature_id, end_date } = req.body;

      /** if exist signature */
      if (signature_id) {
        const signature = await Signature.findByPk(signature_id);
        if (!signature) {
          return res.status(401).json({ error: 'Signature not found!' });
        }
      }

      delivery = await delivery.update({ signature_id, end_date });

      return res.json(delivery);
    } catch (err) {
      return res
        .status(500)
        .json({ error: 'Internal error, changes could not be made' });
    }
  }
}

export default new FinalizeDeliveryController();
