import generateId from "./generateId";

const portfolio = [
  {
    id: generateId(),
    name: "Static site",
    link: "https://github.com/thesnowglobe/how-to-learn",
  },
  {
    id: generateId(),
    name: "Adaptive site",
    link: "https://github.com/thesnowglobe/travel-in-norway",
  },
  {
    id: generateId(),
    name: "Single-page application",
    link: "https://github.com/thesnowglobe/react-mesto-api-full",
  }
];

export default portfolio;