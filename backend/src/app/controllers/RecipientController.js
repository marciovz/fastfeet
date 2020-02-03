import { Op } from 'sequelize';
import * as Yup from 'yup';
import Recipient from '../models/Recipient';

class RecipientController {
  async index(req, res) {
    const { page = 1, limit = 20, findFor = null } = req.query;

    const objQuery = findFor
      ? {
          where: {
            [Op.or]: [
              {
                name: {
                  [Op.iLike]: `%${findFor}%`,
                },
              },
              {
                street: {
                  [Op.iLike]: `%${findFor}%`,
                },
              },
              {
                number: {
                  [Op.iLike]: `%${findFor}%`,
                },
              },
              {
                complement: {
                  [Op.iLike]: `%${findFor}%`,
                },
              },
              {
                city: {
                  [Op.iLike]: `%${findFor}%`,
                },
              },
              {
                state: {
                  [Op.iLike]: `%${findFor}%`,
                },
              },
              {
                zip_code: {
                  [Op.iLike]: `%${findFor}%`,
                },
              },
            ],
          },
          limit,
          offset: (page - 1) * limit,
        }
      : {
          limit,
          offset: (page - 1) * limit,
        };

    const recipients = await Recipient.findAll(objQuery);

    return res.json(recipients);
  }

  async show(req, res) {
    const recipient = await Recipient.findByPk(req.params.id);

    if (!recipient) {
      return res.status(401).json({ error: 'Recipient not found' });
    }

    return res.json(recipient);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      street: Yup.string().required(),
      number: Yup.string().required(),
      complement: Yup.string(),
      city: Yup.string().required(),
      state: Yup.string().required(),
      zip_code: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fail' });
    }

    const recipient = await Recipient.create(req.body);
    return res.json(recipient);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      street: Yup.string(),
      number: Yup.string(),
      complement: Yup.string(),
      city: Yup.string(),
      state: Yup.string(),
      zip_code: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fail' });
    }

    const recipient = await Recipient.findByPk(req.params.id);

    if (!recipient) {
      return res.status(401).json({ error: 'Recipient not found' });
    }

    const response = await recipient.update(req.body);

    return res.json(response);
  }

  async delete(req, res) {
    const recipient = await Recipient.findByPk(req.params.id);

    if (!recipient) {
      return res.status(401).json({ error: 'Recipient not found' });
    }

    await recipient.destroy();

    return res.send();
  }
}

export default new RecipientController();
