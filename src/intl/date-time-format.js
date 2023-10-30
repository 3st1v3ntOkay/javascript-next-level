const hhmmss = setInterval(() => {
  const date = new Date();

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  console.log(`${hours}:${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`);
}, 1000);

clearInterval(hhmmss);

const date = new Date();

// const dateFormat = new Intl.DateTimeFormat(navigator.language).format(date);

const optionsFormat = {
  weekday: "long",
  month: "long",
  day: "numeric",
  year: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
};

const dateFormat = new Intl.DateTimeFormat("nu", optionsFormat).formatToParts(
  date
);

console.log(dateFormat);
