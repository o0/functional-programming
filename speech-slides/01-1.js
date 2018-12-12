const trim = it => it.trim();
const removeExcessSpaces = it => it.replace(/\s{1,}/, ` `);
const lowercase = it => it.toLowerCase();
const normalizeLetters = it => it.replace(/ё/g, `е`);
