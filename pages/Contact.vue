<template>
  <div class="contact">
    <div class="page__text">
      <h2 class="intro">
        contact page
      </h2>
      <br />
    
      <a href="https://twitter.com/pythonnnnnn" class="sns"
        ><font-awesome-icon :icon="['fab','twitter']" class="twitter"/>
        Twitter</a
      >
      <br />
      
      <a href="https://www.instagram.com/_._thatnt_._" class="sns"
        ><font-awesome-icon :icon="['fab', 'instagram']" class="instagram" />
        Instagram</a
      >
      <br />
      
      <a href="https://github.com/tom123908745" class="sns"
        ><font-awesome-icon :icon="['fab', 'github']" class="github" />
        Github</a
      >
      <h3 class="tell-me">ご不明な点、意見等ございましたら、いずれかのリンクからご連絡ください。</h3>
    </div>
  </div>
</template>
<script>

export default {
};
</script>
<style scoped>
.contact {
  background: -moz-linear-gradient(top, #ffc778, #fff);
  background: -webkit-linear-gradient(top, #ffc778, #fff);
  background: linear-gradient(to bottom, #ffc778, #fff);
  height: 100vh;
}
.page__text {
  padding: 20vh;
  text-align: center;
}

.sns {
  font-size: 1rem;
  padding-bottom: 2rem;
  color: #f89306;
  
}
.twitter {
  color: rgb(97, 97, 255);

}
.instagram {
  color: #f85d04;
}
.github {
  color: aqua;
}
.tell-me {
  padding: 4rem 0;
}
</style>
