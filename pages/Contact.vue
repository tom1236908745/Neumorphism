<template>
  <div class="contact">
    <div class="page__text">
      <h2 class="page">
        contact page
      </h2>
      <br />
      <a href="https://twitter.com/pythonnnnnn"
        ><font-awesome-icon :icon="['fab','twitter']" class="twitter"/>
        Twitter</a
      >

      <br />
      <a href="https://www.instagram.com/_._thatnt_._"
        ><font-awesome-icon :icon="['fab', 'instagram']" class="instagram" />
        Instagram</a
      >
      <br />
      <a href="https://github.com/tom123908745"
        ><font-awesome-icon :icon="['fab', 'github']" class="github" />
        Github</a
      >
    </div>
  </div>
</template>
<script>

export default {
};
</script>
<style scoped>
.contact {
  /*  TODO: 背景画像
  background-size: cover;
  background-image: url("../assets/images/body/background/Home/wood2.jpg");
  background-color: rgba(251, 227, 189, 0.15);
  background-blend-mode: lighten;
  background-size: auto 100%; */
  background: -moz-linear-gradient(top, #ffc778, #fff);
  background: -webkit-linear-gradient(top, #ffc778, #fff);
  background: linear-gradient(to bottom, #ffc778, #fff);
  height: 100vh;
}
.page__text {
  padding: 20vh;
  text-align: center;
}
.page {
  padding-top: 10vh;
}
.twitter {
  color: rgb(97, 97, 255);
}
.instagram {
  color: #f89304;
}
.github {
  color: aqua;
}
</style>
