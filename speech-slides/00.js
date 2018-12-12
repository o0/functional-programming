// Функциональное программирование помогает писать код в декларативном стиле
// Декларативный стиль описывает зависимость результата от входных данных,
// без сайдэффектов, которые сложно найти и без хранения состояния, которое
// которое неочевидно

const Comment = props => <article className="comment">
  <h3>{props.title}</h3>
  <div className="comment-text">{props.text}</div>
  <div className="comment-details">
    <img src={props.author.pic} />, {props.author.name}, {props.date}
  </div>
</article>


const getRandomInt = (min, max) => min + Math.floor(Math.random() * max) - min;

const getEvenArray = size => new Array(size)
  .fill(0)
  .compose(
    getRandomInt,
    mul2,
  )

