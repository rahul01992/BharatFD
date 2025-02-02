const translate = require("google-translate-api-x");

const translateText = async (text, targetLang) => {
  try {
    const response = await translate(text, { to: targetLang });
    return response.text; // Correctly extract the translated text
  } catch (error) {
    console.error("❌ Translation Error:", error);
    return text; // Fallback to original text if translation fails
  }
};

module.exports = { translateText };
