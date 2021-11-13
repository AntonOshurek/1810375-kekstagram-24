const GET_DATA_SOURCE = 'https://24.javascript.pages.academy/kekstagram/data';
const POST_DATA_SOURCE = 'https://24.javascript.pages.academy/kekstagram';

const getData = () => fetch(GET_DATA_SOURCE)
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(`${response.status} ${response.statusText}`);
  });

const sendData = (body) => fetch(
  POST_DATA_SOURCE,
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
