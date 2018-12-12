const getRandomInt = (min, max) => min + Math.floor(Math.random() * max - min);


const getRandomPositive = getRandomInt.bind(null, 0);


const swap = (list, i, j) => (
  [list[i], list[j]] = [list[j], list[i]],
  list
);


const shuffle = (list) => {
  for (let i = list.length - 1; i > 0; i--) {
    list = swap(list, getRandomPositive(i), i);
  }

  return list;
}
