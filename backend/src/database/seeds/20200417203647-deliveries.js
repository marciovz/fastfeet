module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      'deliveries',
      [
        {
          id: 1,
          recipient_id: 1,
          deliveryman_id: 1,
          signature_id: 1,
          product: 'Tenis de corrida',
          canceled_at: null,
          start_date: new Date(),
          end_date: new Date(),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          recipient_id: 2,
          deliveryman_id: 1,
          signature_id: null,
          product: 'Camisa polo',
          canceled_at: null,
          start_date: null,
          end_date: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 3,
          recipient_id: 3,
          deliveryman_id: 1,
          signature_id: null,
          product: 'Jaqueta de Couro',
          canceled_at: null,
          start_date: new Date(),
          end_date: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 4,
          recipient_id: 4,
          deliveryman_id: 1,
          signature_id: null,
          product: 'Sandália de dedo',
          canceled_at: null,
          start_date: null,
          end_date: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 5,
          recipient_id: 5,
          deliveryman_id: 2,
          signature_id: null,
          product: 'Skate',
          canceled_at: null,
          start_date: new Date(),
          end_date: null,
          created_at: new Date(),
          updated_at: new Date(),
        }, 
        {
          id: 6,
          recipient_id: 6,
          deliveryman_id: 2,
          signature_id: null,
          product: 'Patinete',
          canceled_at: null,
          start_date: null,
          end_date: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 7,
          recipient_id: 7,
          deliveryman_id: 3,
          signature_id: null,
          product: 'Panela de pressão',
          canceled_at: null,
          start_date: null,
          end_date: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 8,
          recipient_id: 8,
          deliveryman_id: 3,
          signature_id: null,
          product: 'Jogo de pratos',
          canceled_at: null,
          start_date: null,
          end_date: null,
          created_at: new Date(),
          updated_at: new Date(),
        }, 
        {
          id: 9,
          recipient_id: 1,
          deliveryman_id: 1,
          signature_id: null,
          product: 'Bermuda jeans',
          canceled_at: null,
          start_date: null,
          end_date: null,
          created_at: new Date(),
          updated_at: new Date(),
        },                          
      ],
      {}
    );
  },
  down: () => {},
};
