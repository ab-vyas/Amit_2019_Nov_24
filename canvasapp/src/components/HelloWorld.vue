<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <br/>
        <button v-on:click="add" class="btn btn-theme btn-default btn-xs pull-left">
                                                <i class="fa fa-times inline"></i>
                                                1. Generate Random Canvas
                                        </button>
        <br/>
        <br/>
        <div class="mainDiv">
            <div class="leftDiv">
                <select id="drpImages" v-model="selected">
                                                    <template v-for="allposts in processedPosts">
                                                        <option v-for="option in allposts" v-bind:value="option.id" v-bind:key="option.id">
                                                            {{ option.title }}
                                                            <input v-bind:id="'_'+option.id" type="hidden" v-bind:value="option.thumbnailUrl"/>
                                                        </option>
</template>
                </select>
            </div>
            <div class="rightDiv">
                <button v-on:click="updateCanvasImage" class="btn btn-theme btn-default btn-xs pull-left" >
                    <i class="fa fa-times inline"></i>
                        1. Draw Image
                </button>
            </div>
        </div>
        <span id='abc'>
        </span>
        <br/>        
    </div>
</template>

<script>
import { fetchAllPhoto } from '../helpers/helper.js';
import { fabric } from 'fabric';
import $ from 'jquery'
var picData = [];
var totalCanvas = 0;

fetchAllPhoto().then(res => picData.push(res));
/* eslint-disable no-console */
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
            selected: 1
        }
    },
    methods: {
        add() {
            var cTag = document.getElementById("abc");
            cTag.innerHTML = '';
            var length = Math.floor(Math.random() * (5 - 2 + 1)) + 2;
            totalCanvas = length;
            let i = 0;
            for (i = 1; i <= length; i++) {
                this.generateCanvas(i);
            }
        },
        cancel(e) {
            if (e.preventDefault) { e.preventDefault(); }
            return false;
        },
        updateCanvasImage() {
            // const image = new fabric.Image();
            // image.src="https://via.placeholder.com/150/1ee8a4";
            // image.onload = () => {
            //     this.image = image;
            // };

            var t = Math.floor(Math.random() * (totalCanvas - 2) + 2).toString();
            console.log(totalCanvas + "" + t)
            for (var i = 1; i <= totalCanvas; i++) {
                this.removeCanvas(i);
            }

            console.log(this.aryCanvas)
            var pugImg = new Image();
            var el = document.getElementById(t).fabric;

            el.remove(el.getObjects());
            el.clear();
            el.renderAll();

            pugImg.src = $('#_' + this.selected).val();
            pugImg.onload = function() {
                var pug = new fabric.Image(pugImg, {
                    //angle: 45,
                    width: 150,
                    height: 150,
                    left: 10,
                    top: 10
                });
                el.add(pug);
                el.centerObject(pug);
            };
            el.on('mouse:down', function() {
                if (this.getActiveObject()) {
                    activeObject = $.extend({}, this.getActiveObject());
                    initialCanvas = this.lowerCanvasEl.id;
                }
            });
            $(document).on('mouseup', function(evt) {
                if (evt.target.localName === 'canvas') {
                    var canvasId = $(evt.target).siblings().attr('id');
                    var dropCanvas = document.getElementById(canvasId).fabric;
                    if (dropCanvas !== initialCanvas) {
                        for (var i = 1; i <= totalCanvas; i++) {
                            var el = document.getElementById(i).fabric;

                            el.remove(el.getObjects());
                            el.clear();
                            el.renderAll();
                        }
                        dropCanvas.add(activeObject);
                        dropCanvas.renderAll();
                        dropCanvas.centerObject(activeObject);
                    }
                }
            });
            var initialCanvas = '';
            var activeObject = {};
        },
        insertAfter(referenceNode, newNode) {
            referenceNode.insertBefore(newNode, referenceNode.nextSibling);
        },
        generateCanvas(id) {
            console.log(id);
            var canvas = document.createElement('canvas');
            canvas.id = id;
            canvas.width = 200;
            canvas.height = 200;
            canvas.style.zIndex = 8;
            canvas.style.border = "1px solid";
            var cTag = document.getElementById("abc");
            cTag.appendChild(canvas);

            var gradCanvas = new fabric.Canvas(canvas, { width: 200, height: 200 });
            document.getElementById(id).fabric = gradCanvas;
            var ctx = gradCanvas.getContext('2d');
            console.log(ctx);
        },
        removeCanvas(id) {
            var x = document.getElementById(id).fabric;
            var ctx = x.getContext('2d');
            ctx.clearRect(0, 0, x.width, x.height);
        }
    },
    computed: {
        processedPosts() {
            let items = chunk32(this.picData[0], 10);
            return items;
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
