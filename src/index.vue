<template>
  <div class="wrapper">
    <router-view/>
    <div class="navigation b">
      <text class="il" @click="hello">视频</text>
      <text class="il" @click="chat">电影</text>
      <text class="il" @click="music">音乐</text>
      <text class="il" @click="jump">游戏</text>
    </div>
  </div>
</template>

<script>
var navigator = weex.requireModule("navigator");
var modal = weex.requireModule("modal");
export default {
  methods: {
    hello: function() {
      this.$router.push("/Hello");
    },
    chat: function() {
      this.$router.push("/Chat");
    },
    music: function() {
      this.$router.push("/Music");
    },
    jump() {
      this.$router.push("/Douban");
    }
  },
  name: "App",
  data() {
    return {
      logo: "https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png",
      onmessage: ""
    };
  }
};
</script>

<style scoped>
.wrapper {
  justify-content: flex-start;
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
  color: #41b883;
}
.message {
  margin: 30px;
  font-size: 32px;
  color: #727272;
}
.navigation {
  position: fixed;
  flex-direction: row;
  display: flex;
  bottom: 0px;
  background-color: rgb(220, 20, 20);
}
.head {
  height: 50px;
  width: 750px;
  flex-direction: row;
  top: 0px;
  background-color: rgb(212, 60, 51);
}
.b {
  border-width: 1px;
  border-color: red;
  border-bottom-style: solid;
}
.il {
  height: 100px;
  width: 187.5px;
  font-size: 32px;
  padding-top: 30px;
  padding-left: 50px;
}
.send {
  height: 80px;
  width: 100px;
}
</style>
