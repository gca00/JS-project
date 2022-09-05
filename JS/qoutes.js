const qoutes = [
  { qoute: "삶이 있는 한 희망은 있다", author: "키케로" },
  { qoute: "산다는것 그것은 치열한 전투이다.", author: "로망로랑" },
  { qoute: "신은 용기있는자를 결코 버리지 않는다", author: "켄러" },
  { qoute: "삶이 있는 한 희망은 있다", author: "키케로" },
  { qoute: "삶이 있는 한 희망은 있다", author: "키케로" },
  { qoute: "삶이 있는 한 희망은 있다", author: "키케로" },
  { qoute: "삶이 있는 한 희망은 있다", author: "키케로" },
  { qoute: "삶이 있는 한 희망은 있다", author: "키케로" },
  { qoute: "삶이 있는 한 희망은 있다", author: "키케로" },
  { qoute: "삶이 있는 한 희망은 있다", author: "키케로" },
];

const qoute = document.querySelector("#qoute span:first-child");
const author = document.querySelector("#qoute span:last-child");

const todaysQoute = qoutes[Math.floor(Math.random() * qoutes.length)];

qoute.innerText = todaysQoute.qoute;
author.innerText = todaysQoute.author;
