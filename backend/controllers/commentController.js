const { Comment, Article } = require('../models');
const { Op } = require('sequelize');

exports.createComment = async (req, res) => {
    try {
        const comment = await Comment.create({ ...req.body, ArticleId: req.params.articleId });
        res.status(201).json(comment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getCommentsByArticleId = async (req, res) => {
    try {
        const comments = await Comment.findAll({ where: { ArticleId: req.params.articleId } });
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateComment = async (req, res) => {
    try {
        const [updated] = await Comment.update(req.body, {
            where: { id: req.params.commentId, ArticleId: req.params.articleId },
        });
        if (updated) {
            const updatedComment = await Comment.findByPk(req.params.commentId);
            res.status(200).json(updatedComment);
        } else {
            res.status(404).json({ error: 'Comment not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteComment = async (req, res) => {
    try {
        const deleted = await Comment.destroy({
            where: { id: req.params.commentId, ArticleId: req.params.articleId },
        });
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ error: 'Comment not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.getCommentsByPeriod = async (req, res) => {
    try {
        const { dateFrom, dateTo } = req.query;
        console.log('Fetching comments from:', dateFrom, 'to:', dateTo);

        if (!dateFrom || !dateTo) {
            return res.status(400).json({ error: 'dateFrom and dateTo are required' });
        }

        const comments = await Comment.findAll({
            where: {
                createdAt: {
                    [Op.between]: [new Date(dateFrom), new Date(dateTo)],
                },
            },
            include: [{ model: Article, attributes: ['title'] }],
        });

        const groupedComments = comments.reduce((acc, comment) => {
            const articleId = comment.ArticleId;
            if (!acc[articleId]) {
                acc[articleId] = {
                    articleTitle: comment.Article.title,
                    comments: [],
                };
            }
            acc[articleId].comments.push({
                id: comment.id,
                text: comment.text,
                createdAt: comment.createdAt,
                updatedAt: comment.updatedAt,
            });
            return acc;
        }, {});

        res.status(200).json(groupedComments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

};