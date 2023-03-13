const express = require('express');
const router = express.Router();
const ad = require('../controllers/ads.controller');
const authMiddleware = require('../utils/authMiddleware');
const imageUpload = require('../utils/imageUpload');

router.get('/ads', ad.getAll);
router.get('/ads/:id', ad.getById);
router.post('/ads', authMiddleware, imageUpload.single('photo'), ad.createNew);
router.put('/ads/:id', authMiddleware, imageUpload.single('photo'), ad.editById);
router.delete('/ads/:id', authMiddleware, ad.removeById);
router.get('/ads/search/:searchPhrase', ad.searchPhrase);

module.exports = router;