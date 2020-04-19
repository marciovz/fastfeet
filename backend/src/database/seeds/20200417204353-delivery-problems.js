module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      'delivery_problems',
      [
        {
          delivery_id: 1,
          description: 'Destinatário não estava em casa no dia 28 as 14 horas',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          delivery_id: 2,
          description: 'Destinatário não encontrado no dia 15/03',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          delivery_id: 2,
          description: 'Mudou-se, Casa está parar alugar!',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          delivery_id: 6,
          description: 'Local inacessível por causa da chuva forte no dia 17/03! Será entregue em dois dias.',
          created_at: new Date(),
          updated_at: new Date(),
        },

      ],
      {}
    );
  },
  down: () => {},
};
