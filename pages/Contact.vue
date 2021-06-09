<template>
  <div class="contact">
    <section class="common-layout">
      <div class="card">
        <h2 class="intro">
          contact page
        </h2>
        <br />
        <button class="sns-button">
          <a href="https://twitter.com/pythonnnnnn" class="sns"
            ><font-awesome-icon :icon="['fab','twitter']" class="twitter"/>
            Twitter</a
          >
        </button>
        <button class="sns-button">
          <a href="https://www.instagram.com/_._thatnt_._" class="sns"
            ><font-awesome-icon :icon="['fab', 'instagram']" class="instagram" />
            Instagram</a
          >
        </button>
        <button class="sns-button">
          <a href="https://github.com/tom123908745" class="sns"
            ><font-awesome-icon :icon="['fab', 'github']" class="github" />
            Github</a
          >
        </button>
        <h3 class="tell-me">ご不明な点、意見等ございましたら、いずれかのリンクからご連絡ください。</h3>
      </div>
    </section>
  </div>
</template>
<script>

export default {
};
</script>
<style scoped>
.intro {
  margin-bottom: 3rem;
  text-decoration:none; 
  
}
.sns-button {
  margin: 0 1rem 1rem 0;
  border-radius: 50%;
  line-height: 100px;
  width: 100px;
  height: 100px;
  padding: 0;
  border: none;  /* 枠線を消す */
  outline: none;
  background: #fcf9f3;
  box-shadow: -2px -2px 5px rgba(255, 255, 255, 1),
              5px 5px 5px rgba(0, 0, 0, 0.1);
}
.sns-button:active{
  color: #dddad4;;
  box-shadow: -4px -4px 5px rgba(0, 0, 0, 0.1)inset,
              4px 4px 5px rgba(0, 0, 0, 0.1)inset;
}
.sns {
  font-size: 1rem;
  padding-bottom: 2rem;
  color: rgb(181, 184, 211);
  text-decoration:none; 
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
