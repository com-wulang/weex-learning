<template>
  <div>
    <div class="navi">
      <text class="forwardBack" @click="back">&#xe600;</text>
      <text class="forwardBack" @click="forward">&#xe601;</text>
    </div>
    <web ref="webview" style="width: 750px; height: 1300px" src="https://www.baidu.com" @pagestart="onPageStart" @pagefinish="onPageFinish" @error="onError" @receivedtitle="onReceivedTitle"></web>
  </div>
</template>
<script>
export default {
  data() {
    return {
      douBanUrl: "https://movie.douban.com",
      pagestart: '',
      pagefinish: '',
      title: '',
      error: '',
      canGoBack: false,
      canGoForward: false,
    };
  },
  beforeCreate() {
    const domModule = weex.requireModule("dom");
    domModule.addRule("fontFace", {
      fontFamily: "iconfont1",
      src: "url('http://at.alicdn.com/t/font_788305_2x6dtimqfre.ttf')"
    });
  },
  methods: {
      back (event) {
        var webview = weex.requireModule('webview');
        webview.goBack(this.$refs.webview);
      },
      forward (event) {
        var webview = weex.requireModule('webview');
        webview.goForward(this.$refs.webview);
      },
      reload: function() {
        var webview = weex.requireModule('webview');
        webview.reload(this.$refs.webview);
      },
      onPageStart: function(e) {
        this.pagestart = e.url;
      },
      onPageFinish: function(e) {
        this.pagefinish = e.url;
        this.canGoBack = e.canGoBack;
        this.canGoForward = e.canGoForward;
        if (e.title) {
          this.title = e.title;
        }
      },
      onError: function(e) {
        this.error = url;
      },
      onReceivedTitle: function(e) {
        this.title = e.title;
      }
    }
};
</script>
<style scoped>
.b {
    border-width: 1px;
    border-color: red;
    border-bottom-style: solid;
  }
.forwardBack {
  font-family: iconfont1;
  font-size: 50px;
  margin-left: 70px;
  margin-top: 25px;
  justify-content:center;
}
.message {
  margin: 30px;
  font-size: 32px;
  color: #727272;
}
.navi {
  height: 100;
  flex-direction: row;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color:rgb(190, 182, 182);
  width: 750px;
}
</style>
