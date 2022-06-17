const translate = require('translate-google');

async function translation(Text, Language) {
    const result = translate(Text, {to: Language})

    return result;
}

module.exports = translation;