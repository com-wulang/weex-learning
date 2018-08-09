<template>
  <scroller>
    <div class="group">
      <text class="count">{{getResult}}</text>
      <a href="http://10.0.17.182:8080/HelloWorld.vue">
        <text>Jump</text>
      </a>
    </div>
    <div v-for="(v, i) in list" class="row" :key="i">
      <div v-for="(url, k) in v" class="item" :key="i*10+k">
        <div>
          <image style="width:250px;height:400px" :src="url"/>
        </div>
      </div>
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
      var GET_URL = 'http://api.douban.com/v2/movie/coming_soon';

      stream.fetch({
        method: 'GET',
        url: GET_URL,
        type:'json'
      }, function(ret) {
        if(!ret.ok){
          me.getResult = "request failed"+ret.status+ret.statusText;
        }else{
          console.log('get:'+ret);
          me.getResult = "";
          let subjects = ret.data.subjects;
          let douBanArray=new Array();
          for(let i=0;i<parseInt(subjects.length/3);i++){
            let arrayTemp=new Array();
            for(let j=0;j<3;j++){
              arrayTemp[j]=subjects[i*3+j].images.small;
              console.log(arrayTemp[j]);
            }
            douBanArray[i]=arrayTemp;
          }
          me.list=douBanArray;
        }
      },function(response){
        console.log('get in progress:'+response.length);
        me.response = "bytes received:"+response.length+"\n"+response.status+"\n"+response.statusText+"\n"+response.data;
      });

    }
  };
</script>

<style scoped>
  .item{
    flex:1;
    justify-content: center;
    align-items:center;
    border-width:1;
  }
  .row{
    flex-direction: row;
    height:400px;
  }
  .group {

  }
  .title {
    font-size: 45px;
    color: #41B883;
  }
  .count {
    color: #888888;
  }
</style>

