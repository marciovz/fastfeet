module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      'signatures',
      [
        {
          name: 'image1.jpg',
          path: '34567890.jpg',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },
  down: () => {},
};
