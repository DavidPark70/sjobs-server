import express from 'express';

import { getPosts, getPost, getPostsBySearch, createPost, updatePost, updatePostDescription, updatePostQualifications, deletePost, likePost, commentPost } from '../controllers/posts.js';

const router = express.Router();
import auth from '../middleware/auth.js';

router.get('/search', getPostsBySearch);
router.get('/', getPosts);
router.get('/:id', getPost);
router.post('/', auth, createPost);
router.patch('/:id', auth, updatePost);
router.patch('/description/:id', auth, updatePostDescription);
router.patch('/qualifications/:id', auth, updatePostQualifications);
router.delete('/:id', auth, deletePost);
router.patch('/:id/likePost', auth, likePost);
router.post('/:id/commentPost', auth, commentPost);

export default router;