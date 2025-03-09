const express = require('express');
const router = express.Router();
const articleController = require('../controllers/articleController');
const commentController = require('../controllers/commentController');

router.post('/articles', articleController.createArticle);
router.get('/articles', articleController.getAllArticles);
router.get('/articles/:id', articleController.getArticleById);
router.patch('/articles/:id', articleController.updateArticle);
router.delete('/articles/:id', articleController.deleteArticle);


router.post('/articles/:articleId/comments', commentController.createComment);
router.get('/articles/:articleId/comments', commentController.getCommentsByArticleId);
router.patch('/articles/:articleId/comments/:commentId', commentController.updateComment);
router.delete('/articles/:articleId/comments/:commentId', commentController.deleteComment);

router.get('/analytic/comments', commentController.getCommentsByPeriod);

module.exports = router;