<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    {{ this.picData }}
  </div>
</template>

<script>
import {getIdList, fetchPhoto, chunks } from '../helpers/helper.js';
//const { getIdList, fetchPhoto, chunks } = require('./helpers/helper');
const t0 = Date.now();
var picData  = [];
chunks(getIdList(200), fetchPhoto, 10)
.then(res=> {
    const t1 = Date.now();
    /* eslint-disable no-console */
    console.log(`Fetch time: ${t1 - t0} ms`);
    /* eslint-disable no-console */
    console.log(`Response ${res} ms`);
    //tData.push(JSON.stringify(res));
    picData.push(res);
console.log(picData[0]);
});
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    picData: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
