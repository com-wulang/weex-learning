<template>
  <div class="wrapper">
    <text class="message chatFrame b">{{onmessage}}</text>
    <input class="input b" type="text"/>
    <text class="send b">发送</text>
    <text class="message b" @click="connect">连接</text>
  </div>
</template>
<script>

var websocket = weex.requireModule('webSocket');
var count = 0;
export default {
  methods:{
    connect:function() {
        websocket.WebSocket('ws://127.0.0.1:8080/webSocket','');
        var self = this;
        self.onopeninfo = 'connecting...'
        websocket.onopen = function(e)
        {
          self.onopeninfo = 'websocket open';
        }
        websocket.onmessage = function(e)
        {
          count = count + 1;
          self.onmessage = self.onmessage+'\n'+e.data+count;
        }
        websocket.onerror = function(e)
        {
          self.onerrorinfo = e.data;
        }
        websocket.onclose = function(e)
        {
          self.onopeninfo = '';
          self.onerrorinfo = e.code;
        }
      }
  },
  data () {
    return {
      logo: 'https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png',
      onmessage:''
    }
  }
}
</script>
<style scoped>
  .message {
    margin: 30px;
    font-size: 32px;
    color: #7272721e;
  }
  .chatFrame {
    height: 750px;
    width:750px;
  }
  .input {
    height: 80px;
    width:600px;
  }
  .b {
    border-width: 1px;
    border-color: red;
    border-bottom-style: solid;
  }
</style>