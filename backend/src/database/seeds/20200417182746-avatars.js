module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      'avatars',
      [
        {
          name: 'person1.jpg',
          path: '12345678.jpg',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'person2.jpg',
          path: '23456789.jpg',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },
  down: () => {},
};
