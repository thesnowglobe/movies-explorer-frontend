import generateId from "./generateId";

const portfolio = [
  {
    id: generateId(),
    name: "Статичный сайт",
    link: "https://github.com/aly0m/how-to-learn",
  },
  {
    id: generateId(),
    name: "Адаптивный сайт",
    link: "https://github.com/aly0m/russian-travel",
  },
  {
    id: generateId(),
    name: "Одностраничное приложение",
    link: "https://github.com/aly0m/react-mesto-api-full",
  },
];

export default portfolio;