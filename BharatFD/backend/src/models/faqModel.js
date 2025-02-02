// const mongoose = require("mongoose");

// const FaqSchema = new mongoose.Schema(
//   {
//     question: { type: String, required: true },
//     answer: { type: String, required: true },
//     translations: {
//       en: { type: String, required: true },
//       hi: { type: String },
//       bn: { type: String },
//     },
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("Faq", FaqSchema);


const mongoose = require('mongoose');

const FaqSchema = new mongoose.Schema({
    question: { type: String, required: true },
    answer: { type: String, required: true }, // Will store rich text (HTML)
    translations: {
        en: { type: String, required: true },
        hi: { type: String },
        bn: { type: String }
    }
}, { timestamps: true });

module.exports = mongoose.model('Faq', FaqSchema);
