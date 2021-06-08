<template>
  <div class="home">
    <section class="context">
      <span class="temp">// 製作中です。。。　色々アドバイスいただけると嬉しいです！</span>
      <br>
      <span class="temp">レイアウトも内容もまだまだです(6/8)</span>
      <br>
      <span class="temp">(まだ、レスポンシブ対応していません(ノートパソコン推奨(マスト)))</span>
      <br />
      <br />
      <span class="intro">自己紹介</span>
      <br />
      <h3>name: 中山 智輝 / Tomoki Nakayama</h3>
      <br />
      <h3>birthday: 2001/03/08</h3>
    </section>
    
    
  </div>
</template>
<script>
export default {
  
};
</script>
<style scoped>
.home {
  background: -moz-linear-gradient(top, #ffc778, #fff);
  background: -webkit-linear-gradient(top, #ffc778, #fff);
  background: linear-gradient(to bottom, #ffc778, #fff);
  height: 100vh;
  width: auto;
}
.temp {
  color:tomato;
}
.typer {
  font-size: 2rem;
}
.context {
  padding-top: 20vh;
  text-align: center;
}
.experience {
  padding-top: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.detail__text {
  color: rgb(255, 2, 2);
}
img {
  max-width: 600px;
  height: auto;
  width: 100%;
  max-height: 400px;
}

p {
  margin: 0 40px;
  font-size: 20px;
  text-align: left;
}


/* .github {
  display: block;
  float: left;
  margin: 0 5px 5px 0;
  padding: 0;
  color: rgb(255, 2, 2);
} */


</style>
