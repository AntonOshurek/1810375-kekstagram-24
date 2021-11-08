const getData = () => fetch('https://24.javascript.pages.academy/kekstagram/data')
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(`${response.status} ${response.statusText}`);
  });

const sendData = (body) => fetch(
  'https://24.javascript.pages.academy/kekstagram',
  {
    method: 'POST',
    body,
  },
).then((response) => {
  if(response.ok) {
    return response;
  }
  throw new Error(`${response.status} ${response.statusText}`);
});

export {getData, sendData};
