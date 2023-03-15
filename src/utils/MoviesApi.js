import { BEATFILM_URL } from "./constants";

export const handleResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};

export const getInitialMovies = () => {
  return fetch(`${BEATFILM_URL}/beatfilm-movies`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then((res) => handleResponse(res));
};
