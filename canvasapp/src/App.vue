<template>
    <div id="app">
        <img src="./assets/logo.png" height="100px" width="100px">
        <HelloWorld msg="Got Print Coding Challange" />
    </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
    name: 'app',
    components: {
        HelloWorld
    }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 20px;
}

span>div.canvas-container {
    float: left;
    margin: 10px;
}

:root {
    --radius: 2px;
    --baseFg: dimgray;
    --baseBg: white;
    --accentFg: #006fc2;
    --accentBg: #bae1ff;
}

select {
    font: 400 12px/1.3 sans-serif;
    -webkit-appearance: none;
    appearance: none;
    color: var(--baseFg);
    border: 1px solid var(--baseFg);
    line-height: 1;
    outline: 0;
    padding: 0.65em 2.5em 0.55em 0.75em;
    border-radius: var(--radius);
    background-color: var(--baseBg);
    background-image: linear-gradient(var(--baseFg), var(--baseFg)), linear-gradient(-135deg, transparent 50%, var(--accentBg) 50%), linear-gradient(-225deg, transparent 50%, var(--accentBg) 50%), linear-gradient(var(--accentBg) 42%, var(--accentFg) 42%);
    background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;
    background-size: 1px 100%, 20px 22px, 20px 22px, 20px 100%;
    background-position: right 20px center, right bottom, right bottom, right bottom;
}

select:hover {
    background-image: linear-gradient(var(--accentFg), var(--accentFg)), linear-gradient(-135deg, transparent 50%, var(--accentFg) 50%), linear-gradient(-225deg, transparent 50%, var(--accentFg) 50%), linear-gradient(var(--accentFg) 42%, var(--accentBg) 42%);
}

select:active {
    background-image: linear-gradient(var(--accentFg), var(--accentFg)), linear-gradient(-135deg, transparent 50%, var(--accentFg) 50%), linear-gradient(-225deg, transparent 50%, var(--accentFg) 50%), linear-gradient(var(--accentFg) 42%, var(--accentBg) 42%);
    color: var(--accentBg);
    border-color: var(--accentFg);
    background-color: var(--accentFg);
}

.mainDiv {
    float: left;
    width: 90%;
}

.leftDiv {
    float: left;
    width: 50%;
}

.rightDiv {
    width: 49%;
    float: left;
}

button {
    display: inline-block;
    padding: 8px 10px;
    font-size: 15px;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    outline: none;
    color: #fff;
    background-color: #006fc2;
    border: none;
    border-radius: 5px;
    box-shadow: 0 5px #999;
}

button:hover {
    background-color: #006fc2
}

button:active {
    background-color: #006fc2;
    box-shadow: 0 5px #bae1ff;
    transform: translateY(4px);
}
</style>
