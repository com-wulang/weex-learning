<template>
  <scroller>
    <div class="group">
      <text class="count">{{getResult}}</text>
    </div>
    <div v-for="(v, i) in list" class="row" :key="i">
      <div v-for="(url, k) in v" class="item" :key="i*10+k">
        <div>
          <image style="width:250px;height:400px" :src="url.imageSrc" @click="jump(url.movieId)"/>
        </div>
      </div>
    </div>
  </scroller>
</template>

<script>
var stream = weex.requireModule("stream");
var navigator = weex.requireModule("navigator");
module.exports = {
  data: function() {
    return {
      getResult: "loading..."
    };
  },
  methods: {
    jump(movieId) {
      navigator.push({
        url: movieId,
        animated: "false"
      });
    }
  },
  created: function() {
    var me = this;
    var GET_URL = "http://api.douban.com/v2/movie/coming_soon";
    stream.fetch(
      {
        method: "GET",
        url: GET_URL,
        type: "json"
      },
      function(ret) {
        if (!ret.ok) {
          me.getResult = "request failed" + ret.status + ret.statusText;
        } else {
          console.log("get:" + ret);
          me.getResult = "";
          let subjects = ret.data.subjects;
          let douBanArray = new Array();
          for (let i = 0; i < parseInt(subjects.length / 3); i++) {
            let arrayTemp = new Array();
            for (let j = 0; j < 3; j++) {
              let imageSrc = subjects[i * 3 + j].images.small;
              let movieId = subjects[i * 3 + j].id;
              arrayTemp[j] = {
                imageSrc: imageSrc,
                movieId: "https://qywl2014.github.io/weex-js/js/test.js?id=" + movieId
              };
              console.log(arrayTemp[j]);
            }
            douBanArray[i] = arrayTemp;
          }
          me.list = douBanArray;
        }
      },
      function(response) {
        console.log("get in progress:" + response.length);
        me.response =
          "bytes received:" +
          response.length +
          "\n" +
          response.status +
          "\n" +
          response.statusText +
          "\n" +
          response.data;
      }
    );
  }
};
</script>

<style scoped>
.item {
  flex: 1;
  justify-content: center;
  align-items: center;
  border-width: 1;
}
.row {
  flex-direction: row;
  height: 400px;
}
.title {
  font-size: 45px;
  color: #41b883;
}
.count {
  color: #888888;
}
</style>

