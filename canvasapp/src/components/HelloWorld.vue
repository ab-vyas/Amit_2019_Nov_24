<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <select v-model="selected">
                                                          <template v-for="allposts in processedPosts">
                                                              <option v-for="option in allposts" v-bind:value="option.id" v-bind:key="option.id">
                                                                {{ option.title }}
                                                              </option>
</template>
            </select><br/>
<button v-on:click="add" class="btn btn-theme btn-default btn-xs pull-left" >
<i class="fa fa-times inline"></i>
1. Generate Random Canvas
</button><br/>
              
            <span id='abc'>
            <span v-for="item in canvas" v-bind:key="item" >
                <span v-html="item"></span>
            </span></span>

            <button v-on:click="updateCanvasImage" class="btn btn-theme btn-default btn-xs pull-left" >
<i class="fa fa-times inline"></i>
1. Draw Image
</button><br/>
      <!-- <canvas id="canvas" width="200" height="200" style="border:1px solid #000000;"></canvas> -->
        
    </div>
</template>

<script>
//import {getIdList, fetchPhoto, chunks,fetchAllPhoto } from '../helpers/helper.js';
import { fetchAllPhoto } from '../helpers/helper.js';
import { fabric } from 'fabric';

//const { getIdList, fetchPhoto, chunks } = require('./helpers/helper');
//const t0 = Date.now();
var picData = [];
fetchAllPhoto().then(res => picData.push(res));
var totalCanvas = 0;
/* eslint-disable no-console */
// chunks(getIdList(100), fetchPhoto, 10)
// .then(res=> {
//     //const t1 = Date.now();
//     // /* eslint-disable no-console */
//     // console.log(`Fetch time: ${t1 - t0} ms`);
//     // //tData.push(JSON.stringify(res));
//     picData.push(res);
//     /* eslint-disable no-console */
//     console.log(picData);
//      /* eslint-disable no-console */
// });

function chunk32(array, size) {
    if (array) {
        const chunked_arr = [];
        let index = 0;
        while (index < array.length) {
            chunked_arr.push(array.slice(index, size + index));
            index += size;
        }
        return chunked_arr;
    } else {
        return new Array();
    }
}
export default {
    name: 'HelloWorld',
    props: {
        msg: String,

    },
    data() {
        return {
            picData,
            selected: 1,
            canvas: []
        }
    },
    // mounted: function() {
    //     var canvas = new fabric.Canvas('canvas', {
    //         width: 200,
    //         height: 200
    //     });
    //     var rect = new fabric.Rect();
    //     canvas.add(rect);
    //     canvas.add(
    //         new fabric.Rect({
    //             width: 100,
    //             height: 100,
    //             left: 0,
    //             top: 0,
    //             fill: 'yellow'
    //         }));
    // },
    methods: {
        add() {
            this.canvas = [];
            var length = Math.floor(Math.random() * (5 - 2 + 1) ) + 2;
            totalCanvas = length;
            let i = 0;
            for (i = 1; i <= length; i++) {
                this.canvas.push('<canvas id=' + i + ' width="200" height="200" style="border:1px solid #000000;"></canvas>');
            }

            //var ctx = canvas.getContext('2d');
        },
        updateCanvasImage() {
            const image = new window.Image();
            image.src = "https://konvajs.org/assets/yoda.jpg";
            image.onload = () => {
                // set image only when it is loaded
                this.image = image;
            };
            this.drawCanvasImage(image);
        },

        drawCanvasImage(img) {
            //var canvas = this.$refs.imageCanvas;
            var t = Math.floor(Math.random() * (totalCanvas - 2 + 1) + 2).toString();
            console.log(totalCanvas + "" + t)
            var canvas = new fabric.Canvas(t, {
                width: 200,
                height: 200
            });
            canvas.width = img.width;
            canvas.height = img.height;

            var ctx = canvas.getContext('2d');
            ctx.drawImage(img,0,0);
        }
    },
    computed: {
        processedPosts() {
            let items = chunk32(this.picData[0], 10);
            //return this.$nextTick(() => {
            return items;
            //})
            //return chunk32(this.picData[0], 10);
            // let posts = this.picData;

            // // // Add image_url attribute
            // // posts.map(post => {
            // //     let imgObj = post.multimedia.find(media => media.format === "superJumbo");
            // //     post.image_url = imgObj ? imgObj.url : "http://placehold.it/300x200?text=N/A";
            // // });

            // // Put Array into Chunks
            // let i, j, chunkedArray = [],
            //     chunk = 10;
            // for (i = 0, j = 0; i < posts.length; i += chunk, j++) {
            //     chunkedArray[j] = posts.slice(i, i + chunk);
            // }
            // console.log(chunkedArray[0]);
            // return chunkedArray[0];
        }
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
