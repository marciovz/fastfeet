import Mail from '../../lib/Mail';

class CancelDeliveryMail {
  get key() {
    return 'CancelDeliveryMail';
  }

  async handle({ data }) {
    const { deliveryman, delivery } = data;

    await Mail.sendMail({
      to: `${deliveryman.name} <${deliveryman.email}>`,
      subject: `Cancelamento de entrega - ${delivery.id}`,
      template: 'canceledDelivery',
      context: {
        deliveryman: deliveryman.name,
        deliveryId: delivery.id,
        deliveryProduct: delivery.product,
      },
    });
  }
}

export default new CancelDeliveryMail();
