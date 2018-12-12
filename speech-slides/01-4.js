const trim = it => it.trim();
const removeExcessSpaces = it => it.replace(/\s{1,}/, ` `);
const lowercase = it => it.toLowerCase();

const normalizeLetters = it => it.replace(/ё/ig, `е`);
const normalizeHashtags = it => it.replace(/^#/g, ``);

`#Привет #сказочноебали #явсказке #youth #girl #beautiful #instachick #summer #привет`
  .split(` `)
  .map(compose(
    trim,
    lowercase,
    normalizeLetters,
  ))
  .unique();
