'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Article extends Model {
        static associate(models) {
            Article.hasMany(models.Comment, { foreignKey: 'ArticleId', onDelete: 'CASCADE' });
        }
    }
    Article.init({
        title: DataTypes.STRING,
        content: DataTypes.TEXT
    }, {
        sequelize,
        modelName: 'Article',
    });
    return Article;
};