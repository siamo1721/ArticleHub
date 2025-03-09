const { Comment } = require('../models');

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
        const comments = await Comment.findAll({
            where: {
                createdAt: {
                    [Op.between]: [new Date(dateFrom), new Date(dateTo)],
                },
            },
            include: [{ model: Article, attributes: ['title'] }],
        });
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};