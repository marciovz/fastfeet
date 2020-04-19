module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      'deliverymans',
      [
        {
          name: 'Roberto Marques da Silva',
          avatar_id: 1,
          email: 'roberto@silva.com',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Carlos Alberto Nunes',
          avatar_id: 2,
          email: 'carlos@nunes.com',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Teodoro Nascimento',
          avatar_id: null,
          email: 'teodoro@nascimento.com',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Paulo Alceu de Carvalho',
          avatar_id: null,
          email: 'paulo@carvalho.com',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },
  down: () => {},
};
