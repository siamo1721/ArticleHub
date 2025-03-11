'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Articles', [
            {
                title: 'Первая статья',
                content: 'Это содержание первой статьи.',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: 'Вторая статья',
                content: 'Это содержание второй статьи.',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: 'Третья статья',
                content: 'Это содержание третьей статьи.',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Articles', null, {});
    }
};