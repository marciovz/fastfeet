import Mail from '../../lib/Mail';

class CreateDeliveryMail {
  get key() {
    return 'CreateDeliveryMail';
  }

  async handle({ data }) {
    const { deliveryman, delivery } = data;

    await Mail.sendMail({
      to: `${deliveryman.name} <${deliveryman.email}>`,
      subject: `Nova entrega cadastrada - ${delivery.id}`,
      template: 'createdDelivery',
      context: {
        deliveryman: deliveryman.name,
        deliveryId: delivery.id,
        deliveryProduct: delivery.product,
      },
    });
  }
}

export default new CreateDeliveryMail();
