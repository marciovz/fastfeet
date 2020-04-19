module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      'avatars',
      [
        {
          id: 1,
          name: 'person1.jpg',
          path: '12345678.jpg',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
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
