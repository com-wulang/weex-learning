<template>
  <div class="wrapper">
    <image :src="logo" class="logo" />
    <text class="greeting">The environment is ready!</text>
    <router-view/>
    <div class="navigation">
        <router-link class="il" to='/Chat'>Chat gv</router-link><router-link class="il" to='/Hello'>Hello</router-link>
    </div>
  </div>
</template>

<script>
export default {
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
    position: fixed;
    display: flex;
    bottom:0px;
    height: 100px;
    width: 200px;
    border-width: 1px;
    border-color: red;
    border-bottom-style: solid;
  }
  .il {
    display: inline;
    height: 10px;
    border-width: 1px;
    border-color: red;
    border-bottom-style: solid;
  }
</style>
