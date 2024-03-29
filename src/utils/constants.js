const tmdbKey = process.env.REACT_APP_TMDB_KEY
console.log(tmdbKey);

export const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + tmdbKey
    }
  };

  export const IMG_URL = "https://image.tmdb.org/t/p/w500";

  // export const GPT_API = process.env.REACT_APP_GPT_KEY