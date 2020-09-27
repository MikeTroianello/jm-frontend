import { url } from './url';

export const get = async (route) => {
  let results = await fetch(`${url}${route}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });
  results = await results.json();
  return results;
};

export const post = async (route, data) => {
  let results = await fetch(url + route, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(data),
  });
  results = await results.json();
  return results;
};
