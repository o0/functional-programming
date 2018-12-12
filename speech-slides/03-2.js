const getRandomInt = (min, max) => min + Math.floor(Math.random() * max - min);


const getRandomPositive = getRandomInt.bind(null, 0);


const swap = (list, i, j) => (
  [list[i], list[j]] = [list[j], list[i]],
  list
);

const shuffle = (list, i = list.length) => i === 0
  ? list
  : shuffle(
    swap(
        list,
        i,
        getRandomPositive(i - 1)
    )
  , i - 1);
