const tick = level => level.time === 1 ?
    Promise.reject(`Time's up`) :
    Promise.resolve(Object.assign({}, level, { time: level.time - 1 }));


const countdown = (level) => {
  console.info(level.time);
  setTimeout(() => tick(level)
    .then(countdown, console.error)
  , 1000);
};


countdown({ time: 5 });
