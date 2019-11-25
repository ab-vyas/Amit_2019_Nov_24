const axios = require('axios');

const getIdList = n => [...new Array(n)].map((item, i) => i + 1);

const fetchPhoto = id => {
  const url = `https://jsonplaceholder.typicode.com/photos/${id}`;
  return axios.get(url)
    .then(res => res.data)
};

async function fetchAllPhoto() {
  const url = `https://jsonplaceholder.typicode.com/photos/`;
  return await axios.get(url)
    .then(res => res.data)
}

function all(items, fn) {
  const promises = items.map(item => fn(item));
  return Promise.all(promises);
}

async function series(items, fn) {
  let result = [];
  return items.reduce((acc, item) => {
    acc = acc.then(() => {
      return fn(item).then(res => result.push(res));
    });
    return acc;
  }, Promise.resolve())
    .then(() => result);
}

function splitToChunks(items, chunkSize = 50) {
  const result = [];
  for (let i = 0; i < items.length; i+= chunkSize) {
    result.push(items.slice(i, i + chunkSize));
  }
  return result;
}

async function chunks(items, fn, chunkSize = 50) {
  let result = [];
  const chunks = await splitToChunks(items, chunkSize);
  return series(chunks, chunk => {
    return all(chunk, fn)
      .then(res => result = result.concat(res))
  })
    .then(() => result);
}

export{
  getIdList,
  fetchPhoto,
  splitToChunks,
  all,
  series,
  chunks,
  fetchAllPhoto
};