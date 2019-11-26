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

export{
  getIdList,
  fetchPhoto,
  fetchAllPhoto
};