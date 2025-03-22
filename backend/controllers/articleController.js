const { Article , Comment} = require('../models');
const { sequelize } = require('../models');

exports.createArticle = async (req, res) => {
    try {
        const article = await Article.create(req.body);
        res.status(201).json(article);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAllArticles = async (req, res) => {
    try {
        const articles = await Article.findAll();
        res.status(200).json(articles);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getArticleById = async (req, res) => {
    try {
        const article = await Article.findByPk(req.params.id);
        if (article) {
            res.status(200).json(article);
        } else {
            res.status(404).json({ error: 'Article not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateArticle = async (req, res) => {
    try {
        const [updated] = await Article.update(req.body, {
            where: { id: req.params.id },
        });
        if (updated) {
            const updatedArticle = await Article.findByPk(req.params.id);
            res.status(200).json(updatedArticle);
        } else {
            res.status(404).json({ error: 'Article not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.deleteArticle = async (req, res) => {
    const { id } = req.params;

    const transaction = await sequelize.transaction();

    try {
        await Comment.destroy({
            where: {
                ArticleId: id,
            },
            transaction,
        });

        await Article.destroy({
            where: {
                id,
            },
            transaction,
        });

        await transaction.commit();
        console.log('Транзакция успешно завершена.');

        res.status(200).json({ message: 'Статья и связанные комментарии успешно удалены.' });
    } catch (error) {
        console.error('Ошибка при удалении статьи:', error);

        await transaction.rollback();
        res.status(500).json({ error: error.message });
    }
};