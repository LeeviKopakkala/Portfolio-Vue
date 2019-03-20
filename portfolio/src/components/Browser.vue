<template>
            <div id="browser-device">
                <div id="browser-nav">
                    <div class="browser-button el-dark" ></div>
                    <div class="browser-button"></div>
                    <div class="browser-button"></div>
                </div>
                <div id="browser-content">
                    <pre class="prettyprint">
<code class="language-js">// General
[
    {
        "_name": "Leevi Kopakkala",
        "title": "Software Developer" // Passionate learner, designer and dreamer.
    }
]

// Contact information
function contact(){
    let github = <a rel="noopener" target="_blank" href="https://github.com/LeeviKopakkala">"https://github.com/LeeviKopakkala"</a>; 
    let linkedin = <a rel="noopener" target="_blank" href="https://linkedin.com/in/leevi-kopakkala">"https://linkedin.com/in/leevi-kopakkala"</a>; // Psst, you can click these links
}
</code>
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
    border-radius: 10px;
    display: inline-block;
    height: auto;
    position: relative;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.288), 0 2px 4px rgba(0, 0, 0, 0.308);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    width:90%;
    margin: 0 auto;
    margin-top: -5%;
    margin-bottom: 5%;
    #browser-nav {
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        top:0;
        width:100%;
        padding-left:2%;
        text-align:left;
        position:relative;
        background:#fff;
        height:10%;
        .browser-button {
            display:inline-block;
            left:0;
            height:10px;
            width:10px;
            vertical-align: middle !important;
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