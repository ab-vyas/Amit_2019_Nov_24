/* eslint-disable no-console */
/* eslint-disable-next-line no-unused-vars*/
const { getIdList, fetchPhoto, chunks } = require('./helpers/helper');

const t0 = Date.now();

chunks(getIdList(2000), fetchPhoto, 50).then(res => {
    const t1 = Date.now();
    console.log(`Fetch time: ${t1 - t0} ms`);
    console.log(`Response ${res} ms`);
});
