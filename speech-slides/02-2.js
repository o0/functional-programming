// Для того, чтобы функции было удобно композировать, интерфейс функций
// должен быть таким, чтобы каждая из них принимала на вход только один
// параметр.

// Функции у которых больше одного параметра можно преобразовать в функции
// от одного параметра с помощью каррирования

const normalizeSymbol = (it, symbol, replacement) => it.replace(symbol, replacement);

const normalizeHashtag = normalize.bind(null, /^#/, ``);
const normalizeLetters = normalize.bind(null, /ё/g, `е`);

const normalize = compose(
  normalizeHashtag,
  normalizeLetters,
);
