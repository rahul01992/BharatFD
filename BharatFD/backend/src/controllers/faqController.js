// const Faq = require("../models/faqModel");
// const { redisClient } = require("../config/redis");
// const { translateText } = require("../utils/googleTranslate");

// // Fetch FAQs with optional language filter
// const getFaqs = async (req, res) => {
//   try {
//     const lang = req.query.lang || "en";
//     const cacheKey = `faqs:${lang}`;

//     // Check Redis cache first
//     const cachedFaqs = await redisClient.get(cacheKey);
//     if (cachedFaqs) {
//       return res.status(200).json(JSON.parse(cachedFaqs));
//     }

//     // Fetch from DB if not in cache
//     const faqs = await Faq.find();
//     const response = faqs.map((faq) => ({
//       question: faq.translations[lang] || faq.question,
//       answer: faq.answer,
//     }));

//     // Store in Redis cache
//     await redisClient.set(cacheKey, JSON.stringify(response), { EX: 3600 });
//     res.status(200).json(response);
//   } catch (error) {
//     res.status(500).json({ error: "Server Error" });
//   }
// };

// // Create a new FAQ with translations
// const createFaq = async (req, res) => {
//   try {
//     const { question, answer } = req.body;
//     const translations = { en: question };

//     translations.hi = await translateText(question, "hi");
//     translations.bn = await translateText(question, "bn");

//     const faq = new Faq({ question, answer, translations });
//     await faq.save();

//     res.status(201).json(faq);
//   } catch (error) {
//     res.status(500).json({ error: "Error creating FAQ" });
//   }
// };

// module.exports = { getFaqs, createFaq };

const Faq = require('../models/faqModel');
const { translateText } = require('../utils/googleTranslate');

// ✅ Fetch FAQs
const getFaqs = async (req, res) => {
    try {
        const faqs = await Faq.find();
        res.status(200).json(faqs);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching FAQs' });
    }
};

// ✅ Create FAQ
const createFaq = async (req, res) => {
    try {
        const { question, answer } = req.body;
        const translations = { en: question };
        translations.hi = await translateText(question, 'hi');
        translations.bn = await translateText(question, 'bn');

        const faq = new Faq({ question, answer, translations });
        await faq.save();
        res.status(201).json(faq);
    } catch (error) {
        res.status(500).json({ error: 'Error creating FAQ' });
    }
};

// ✅ Ensure all functions are exported
module.exports = { getFaqs, createFaq };
