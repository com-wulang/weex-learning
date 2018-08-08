<template>
  <scroller>
    <div class="group">
      <text class="title">method = GET</text>
      <text class="count">{{getResult}}</text>
    </div>
  </scroller>
</template>

<script>
  var stream = weex.requireModule('stream');
  module.exports = {
    data: function () {
      return {
        getResult: 'loading...',
      }
    },
    created: function() {
      var me = this;
      var GET_URL = 'http://httpbin.org/get';

      stream.fetch({
        method: 'GET',
        url: GET_URL,
        type:'json'
      }, function(ret) {
        if(!ret.ok){
          me.getResult = "request failed";
        }else{
          console.log('get:'+ret);
          me.getResult = ret.data.origin;
        }
      },function(response){
        console.log('get in progress:'+response.length);
        me.getResult = "bytes received:"+response.length;
      });

    }
  };
</script>

<style scoped>
  .group {
    margin-left:32px;
    margin-right:32px;
    margin-bottom:32px;
  }
  .title {
    font-size: 45px;
    color: #41B883;
  }
  .count {
    margin-top:6px;
    font-size: 28px;
    color: #888888;
  }
</style>

