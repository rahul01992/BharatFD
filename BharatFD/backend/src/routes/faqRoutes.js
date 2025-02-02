const express = require('express');
const { getFaqs, createFaq } = require('../controllers/faqController');

const router = express.Router();

router.get('/faqs', getFaqs);
router.post('/faqs', createFaq);

module.exports = router;