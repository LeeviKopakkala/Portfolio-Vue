<template>
            <div id="browser-device">
                <div id="browser-nav">
                    <div id="browser-button" class="el-dark" ></div>
                    <div id="browser-button"></div>
                    <div id="browser-button"></div>
                </div>
                <div id="browser-content">
                    <pre class="prettyprint">
<code class="language-js">// Welcome
[
    {
        "_name": "Leevi Kopakkala",
        "title": "Software Developer" // Passionate learner, designer and dreamer.
    }
]</code>
                    </pre>
                </div>
            </div>
</template>

<script>
export default {
  name: 'Browser',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

@import '../../src/assets/css/prettyprint.css';

#browser-device {
    background: $primary;
    border-radius: 2px;
    display: inline-block;
    height: auto;
    position: relative;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    width:90%;
    margin: 0 auto;
    #browser-nav {
        top:0;
        width:100%;
        padding-left:2%;
        text-align:left;
        vertical-align: middle;
        position:relative;
        display: inline-block;
        background:#fff;
        height:10%;
        #browser-button {
            display:inline-block;
            left:0;
            height:10px;
            width:10px;
            vertical-align: middle;
            margin-left: 3px;
            margin-right: 3px;
            background-color:aqua;
            border-radius: 25px;
        }
    }
    #browser-content {
        position:relative;
        text-align:left;
        color:white !important;
        padding:10%;
        z-index: 100;
    }
}

#browser-device:hover {
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}

.el-dark {
    background-color: $secondary !important;
}

.prettyprint {
    border: 0 !important;
}

@keyframes zoomin {
  from {width:80%;}
  to {width:90%;}
}

</style>