<template>
  <div class="about">
    <div class="page__text">
      <span>Pageの紹介</span>
      <br />
      <nuxt-link to="/">Home Page</nuxt-link>
      <nuxt-link to="/About">About Page(this page)</nuxt-link>
      <nuxt-link to="/Contact">Contact Page</nuxt-link>
      <!-- <div class="page">
        <div v-for="(intro, index) in intros" :key="intro.id">
          <router-link
            :to="{
              name: intro.name,
            }"
          >
            <span v-if="index == 0"
              >/ ==
              {{ intros[index].name }} このページは自己紹介のページです。</span
            >

            <span v-else-if="index == 1"
              >/ ==
              {{ intros[index].name }}
              このページはページ紹介のページです。</span
            >
            <span v-else
              >/ ==
              {{ intros[index].name }}
              このページは連絡手段の紹介ページです。</span
            >
          </router-link>
        </div>
        <router-view :key="$route.path" />
      </div> -->
    </div>
  </div>
</template>
<script>

export default {

};
</script>
<style scoped>
.about {
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
.typer {
  font-size: 2rem;
}
.page__text {
  padding: 20vh;
  text-align: center;
}
.page {
  padding-top: 10vh;
}
</style>