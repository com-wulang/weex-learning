<template>
  <div class="wrapper">
    <image :src="logo" class="logo" />
    <text class="greeting">The environment is ready!</text>
    <router-view/>
    <div class="navigation">
      <text class="il" to="/Hello" @click="hello">Hello</text>
      <text class="il" to="/Chat" @click="chat">Chat</text>
      <text class="il" to="/Hello" @click="hello">Hello</text>
      <text class="il" to="/Chat" @click="chat">Chat</text>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    hello(){
      this.$router.push('/Hello')
    },
    chat(){
      this.$router.push('/Chat')
    }
  },
  name: 'App',
  data () {
    return {
      logo: 'https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png'
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
    width: 424px;
    height: 200px;
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
    border-width: 1px;
    border-color: red;
    border-bottom-style: solid;
    
  }
  .il {
    display: inline;
    height: 100px;
    width:187.5px;
    border-width: 1px;
    border-color: red;
    border-bottom-style: solid;
    font-size:32px;
    padding-top:30px;
    padding-left:50px;
  }
</style>
