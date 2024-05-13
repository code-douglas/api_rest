/** @type {import('sequelize-cli').Migration} */
const bcryptjs = require('bcryptjs');

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('users',
      [
        {
          nome: 'Pauline',
          email: 'Garnett.Cormier91@hotmail.com',
          password_hash: await bcryptjs.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Gregoria',
          email: 'Donavon84@hotmail.com',
          password_hash: await bcryptjs.hash('654321', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Abel',
          email: 'Augustine_Erdman@hotmail.com',
          password_hash: await bcryptjs.hash('212121', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Karli',
          email: 'Lionel_Cummerata@yahoo.com',
          password_hash: await bcryptjs.hash('222222', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Kiana',
          email: 'Dannie.Torphy26@hotmail.com',
          password_hash: await bcryptjs.hash('232323', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ], {});
  },

  async down() {},
};
