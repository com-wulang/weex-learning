<template>
    <div class="wrapper">
        <image :src="logo" class="logo b" @click="get"/>
        <text class="message">{{json}}</text>
    </div>
</template>
<script>
var stream = weex.requireModule('stream');
export default {
    data () {
    return {
      logo: 'https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png',
      json:''
    }
  },
  methods:{
    get:function(){
        self.json="123";
        stream.fetch({
            method: 'GET',
            url: 'https://api.douban.com/v2/book/1220562',
            type:'json'
        }, function(ret) {
            if(!ret.ok){
            self.json = "request failed";
            }else{
            console.log('get:'+ret);
            self.json = JSON.stringify(ret.data);
            }
        },function(response){
            console.log('get in progress:'+response.length);
        });
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
  .b {
    border-width: 1px;
    border-color: red;
    border-bottom-style: solid;
  }
</style>

