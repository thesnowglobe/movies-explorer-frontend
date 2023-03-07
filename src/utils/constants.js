export const BASE_URL = "https://aly0-movies-explorer.nomoredomainsclub.ru";

export const BEATFILM_URL = "https://api.nomoreparties.co";

export const REGEX_URL = new RegExp("/^(https?://)?([\w-]{1,32}.[\w-]{1,32})[^\s@]*/");

export const SHORT_MOVIE = 40;

export const CARD_LIMIT = 120;

export const DEVICE_WIDTH_1280 = 1280;
export const DEVICE_WIDTH_1101 = 1101;
export const DEVICE_WIDTH_625 = 625;
export const DEVICE_WIDTH_320 = 320;

export const SEARCH_RENDER_DEFAULT = 12;
export const SEARCH_RENDER_768 = 8;
export const SEARCH_RENDER_320 = 5;

export const LOAD_RENDER_DEFAULT = 3;
export const LOAD_RENDER_MIN = 2;

export const getMovieDuration = (duration, movie) => {
  if (duration === 60) {
      return `1 ч`;
  }

  if (duration === 120) {
      return `2 ч`;
  }

  if (duration > 120) {
      return `2 ч ${movie.duration - 120} м`;
  }

  if (duration > 60 && duration < 120) {
      return `1 ч ${movie.duration - 60} м`;
  }

  if (duration < 60) {
      return `${movie.duration} м`;
  }
};