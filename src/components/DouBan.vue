<template>
  <div>
    <video class="video" src="http://www.w3school.com.cn/i/song.ogg" controls
      @start="onstart" @pause="onpause" @finish="onfinish" @fail="onfail" :play-status="videoStatus"></video>
    <text class="info">state: {{state}}</text>
    <text class="info" @click="videoPlay">{{play}}</text>
    <text></text>
  </div>
</template>

<style scoped>
  .video {
    width: 630px;
    height: 350px;
    margin-top: 60px;
    margin-left: 60px;
    visibility:hidden;
  }
  .info {
    margin-top: 40px;
    font-size: 40px;
    text-align: center;
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