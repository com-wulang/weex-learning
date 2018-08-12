<template>
  <div class="wrapper">
    <text class="info">敬请期待</text>
  </div>
</template>

<style scoped>
  .wrapper {
    widows: 750px;
    height: 1500px;
    justify-content:center;
  }
  .info {
    font-size: 100px;
    font-family: cursive;
    color: rgba(223, 25, 25, 0.959)
  }
</style>

<script>
  export default {
    data () {
      return {
        state: '----',
        play:'播放',
        videoStatus:'pause',
        src:'http://flv2.bn.netease.com/videolib3/1611/01/XGqSL5981/SD/XGqSL5981-mobile.mp4'
      }
    },
    methods:{
      onstart (event) {
        this.state = 'onstart'
      },
      onpause (event) {
        this.state = 'onpause'
      },
      onfinish (event) {
        this.state = 'onfinish'
      },
      onfail (event) {
        this.state = 'onfinish'
      },
      videoPlay () {
        if(this.play=='播放'){
          this.play='暂停';
          this.videoStatus='play';
        }else{
          this.play='播放';
          this.videoStatus='pause';
        }
      }
    }
  }
</script>