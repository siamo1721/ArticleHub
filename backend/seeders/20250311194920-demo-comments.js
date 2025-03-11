'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Comments', [
            {
                text: 'Это комментарий к первой статье.',
                ArticleId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                text: 'Это еще один комментарий к первой статье.',
                ArticleId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                text: 'Это комментарий ко второй статье.',
                ArticleId: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Comments', null, {});
    }
};