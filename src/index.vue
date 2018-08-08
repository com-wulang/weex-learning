<template>
  <div class="wrapper">
    <image :src="logo" class="logo b" />
    <router-view/>
    <div class="navigation b">
      <text class="il b" @click="hello">Hello</text>
      <text class="il b" @click="chat">Chat</text>
      <text class="il b" @click="douBan">DouBan</text>
      <text class="il b" @click="chat">Chat</text>
    </div>
  </div>
</template>

<script>

var websocket = weex.requireModule('webSocket');
var count = 0;
export default {
  methods:{
    hello:function(){
      this.$router.push('/Hello')
    },
    chat:function(){
      this.$router.push('/Chat')
    },
    douBan:function(){
      this.$router.push('/Douban')
    }
  },
  name: 'App',
  data () {
    return {
      logo: 'https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png',
      onmessage:''
    }
  }
}
</script>

<style scoped>
  .wrapper {
    justify-content: center;
    align-items: center;
  }
  .logo {
    width: 85px;
    height: 40px;
  }
  .greeting {
    text-align: center;
    margin-top: 70px;
    font-size: 50px;
    color: #41B883;
  }
  .message {
    margin: 30px;
    font-size: 32px;
    color: #727272;
  }
  .navigation {
    position:fixed;
    flex-direction:row;
    display: flex;
    bottom:0px;
  }
  .b {
    border-width: 1px;
    border-color: red;
    border-bottom-style: solid;
  }
  .il {
    height: 100px;
    width:187.5px;
    font-size:32px;
    padding-top:30px;
    padding-left:50px;
  }
  .send {
    height: 80px;
    width:100px;
  }
</style>
