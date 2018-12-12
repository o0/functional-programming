const tick = level => level.time === 1 ?
    Either.Left(`Time's up`) :
    Either.Right(Object.assign({}, level, { time: level.time - 1 }));


const countdown = (level) => {
  console.info(level.time);
  setTimeout(() => tick(level)
    .then(countdown)
    .catch(console.error)
  , 1000);
};


countdown({ time: 30 });
