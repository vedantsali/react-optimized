
let headers = {};
export function Action(type, value) {
  return { type, value };
}

/**
 * @function fetchData is for fetching the data from the server
 * @param {url} url to get the url from the server
 */
export const fetchData = (url, options = { method: 'GET' }) => new Promise((resolve, reject) => {
  const savedToken = sessionStorage.getItem('jwt-token')
  if (savedToken) {
    headers = { 'x-access-token': savedToken };
  } else {
    headers = { 'Content-Type': 'application/json' };
  }
  return fetch(url, { ...options, headers }).then((res) => resolve(res)).catch((err) => reject(err));
});

export const logout = () => () => {
  sessionStorage.removeItem('jwt-token');
};

export const getAuth = () => {
  const token = sessionStorage.getItem('jwt-token')
  return !!token;
};
