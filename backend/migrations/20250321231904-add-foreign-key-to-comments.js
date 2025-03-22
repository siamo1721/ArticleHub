'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint('Comments', {
      fields: ['ArticleId'],
      type: 'foreign key',
      name: 'fk_article',
      references: {
        table: 'Articles',
        field: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Comments', 'fk_article');
  },
};