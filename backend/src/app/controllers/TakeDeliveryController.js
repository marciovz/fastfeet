import { Op } from 'sequelize';
import {
  setHours,
  setMinutes,
  setSeconds,
  isAfter,
  isBefore,
  startOfDay,
  endOfDay,
} from 'date-fns';

import Delivery from '../models/Delivery';
import Deliveryman from '../models/Deliveryman';

class TakeDeliveryController {
  async update(req, res) {
    /** Deliveries only between 8:00 and 18:00 */
    const timeNow = new Date();
    const startTimeDelivery = setSeconds(
      setMinutes(setHours(timeNow, 8), 0),
      0
    );
    const endTimeDelivery = setSeconds(setMinutes(setHours(timeNow, 18), 0), 0);

    if (
      isBefore(timeNow, startTimeDelivery) ||
      isAfter(timeNow, endTimeDelivery)
    ) {
      return res.status(400).json({ error: 'Delivery allowed from 8:00 to 18:00' });
    }

    /** if exist deliveryman */
    const deliveryman = await Deliveryman.findByPk(req.params.deliveryman_id);
    if (!deliveryman) {
      return res.status(401).json({ error: 'Deliveryman not found!' });
    }

    /** if exist delivery */
    let delivery = await Delivery.findOne({
      where: {
        id: req.params.delivery_id,
        deliveryman_id: deliveryman.id,
        start_date: null,
        end_date: null,
        canceled_at: null,
      },
    });
    if (!delivery) {
      return res.status(401).json({ error: 'Delivery does not match!' });
    }

    /** if more than five deliveries */
    const deliveries = await Delivery.findAll({
      where: {
        start_date: {
          [Op.between]: [startOfDay(timeNow), endOfDay(timeNow)],
        },
        canceled_at: null,
        end_date: null,
      },
    });

    if (deliveries.length >= 5) {
      return res
        .status(400)
        .json({ error: 'You have already reached the daily withdrawal limit' });
    }

    delivery = await delivery.update({ start_date: timeNow });

    return res.json(delivery);
  }
}

export default new TakeDeliveryController();
