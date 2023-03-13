const express = require('express');
const router = express.Router();
const ad = require('../controllers/ads.controller');

router.get('/ad', ad.getAll);
router.get('/ad/:id', ad.getById);
router.post('/ad', ad.addNew);
router.put('/ad/:id', ad.editById);
router.delete('/ad/:id', ad.removeById);

module.exports = router;