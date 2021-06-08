<template>
  <div class="about">
    <ul class="side-content">
      <li href="#" v-scroll-to="'#studyAbroad'" class="toEpisode">留学のエピソードへ</li>
      <li href="#" v-scroll-to="'#skill'" class="toEpisode">スキルのエピソードへ</li>
      <li href="#" v-scroll-to="'#club'" class="toEpisode">サークルのエピソードへ</li>
    </ul>
    <div class="page__text">
      <span class="intro">Pageの紹介</span>
      <br>
      <h1 class="title">~Technologies~</h1>
      <h2>Nuxt.js</h2>
      <br>
      <br>
      <h1 class="title">~Pages~</h1>
      <div class="links">
        <nuxt-link to="/" class="link">Home Page</nuxt-link>
        <br/>
        <nuxt-link to="/About" class="link">About Page(this page)</nuxt-link>
        <br/>
        <nuxt-link to="/Contact" class="link">Contact Page</nuxt-link>
      </div>
      
      <div class="experience">
        <h1 class="heading">Experience</h1>
        <div class="experience-contents">
          <div class="experience-items">
            <img src="~/assets/img/about/abroad.png" alt="studyAbroad">
            <p>Study abroad</p>
          </div>
          <div class="experience-items">
            <img src="~/assets/img/about/abroad.png" alt="studyAbroad">
            <p>Skills</p>
          </div>
          <div class="experience-items">
            <img src="~/assets/img/about/abroad.png" alt="studyAbroad">
            <p>Club</p>
          </div>
        </div>
      </div>
      <p style="border-bottom: 1px solid orange;"></p>

      <div class="context-wrapper">
        <div class="context-content">
          <h1 class="title">~Episode~</h1>
          <h1 class="heading" id="studyAbroad">Study Abroad</h1>
          
          <div class="context-item">
            <br>
            <img src="~/assets/img/about/skills.jpg" alt="contextStudyAbroad">
            <p class="context-text">2018年3ケ月間オーストラリアに現地の学校に通いながら留学した経験があります。様々な人種の方々と触れ合い、現地での学校生活、イベントなどを通して異国の地で過ごした経験は自信へと繋がり、人生経験としてとても良い思い出になりました。今でも現地で知り合った方達とSNSで繋がっていて、他国でサッカー、DJ、美容系、様々な方面で活躍している姿を見ているととても良いモチベーションに繋がります。</p>
          </div>
          <h1 class="heading" id="skill">Skills</h1>
          <div class="context-item">
            <br>
            <img src="~/assets/img/about/skills.jpg" alt="contextStudyAbroad">
            <p class="context-text">大学に入るまで、ほとんどプログラミングをしたことがなく、少しHTMLとCSS、JSを触ったくらいでした。大学に入り、色々な方と関わっていき、自分の身近な先輩や同級生が講義の傍、Web関係の事していて、その姿に憧れ次第にWebに興味を持ち始めました。<br><br><br>その後、<br><br> 2020年8月<br>株式会社デザイニウムで長期インターン開始<br><br>2021年1月<br>Floating Weedで長期インターン開始</p>
          </div>
          
          <el-button @click="visible = true">使える言語</el-button>

          <el-dialog
            title="使える言語"
            :visible.sync="visible"
            width="30%"
            center>
            <div>
              <p class="dialog-title">使える言語(期間/使用用途)</p>
              <ul class="dialog-text">
                <li>Js(Vue)(半年/Web系会社のインターン,開発)</li>
                <li>html, css(1年/Web系会社インターン,開発)</li>
                <li>C言語(1年/講義)</li>
                <li>Java(1年/講義)</li>
                <li>Python</li>
              </ul>
            </div>
            <span slot="footer" class="dialog-footer">
              <el-button @click="visible = false">Cancel</el-button>
              <el-button @click="visible = false" class="dialog-button">Confirm</el-button>
            </span>
          </el-dialog>
          <h1 class="heading" id="club">Club</h1>
          <div class="context-item">
            <img src="~/assets/img/about/skills.jpg" alt="contextStudyAbroad">
            <p class="context-text">サークル活動では小規模ながら、アウトドアサークルというサークルの部長をしています。元々、部員の数が少なく自分が部長になった時は活動メンバーが5人いるかいないかの程度でした。せっかく、部長になったから何かサークルを成長させたいと思い、新たにSNS(Instagram)のアカウントの開設やその他SNSを活用し、新メンバー勧誘のために他大学の生徒の勧誘や積極的に部員に声をかけるなどをし前年度の3倍以上の部員を勧誘することができました。</p>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>
<script>

export default {
  data: function() {
    return { 
      visible: false,
    }
  },
};
</script>
<style scoped>
.about {
  background: -moz-linear-gradient(top, #ffc778, #fff);
  background: -webkit-linear-gradient(top, #ffc778, #fff);
  background: linear-gradient(to bottom, #ffc778, #fff);
  height: 100vh;
}
.toEpisode {
  color:rgb(248, 121, 3);
  padding: 1rem 0;
  font-size: 0.5rem;
  background: #f3fbff;
  border: 2px rgb(235, 233, 135) dashed;
  list-style-type: none;
}
.side-content{
  
  padding-top: 1rem;
  width: 10%;
  height:50%;
  position: fixed;
  flex-direction: column;
}
.title {
  padding: 4rem 0;
  font-size: 2rem;
  color: rgba(251, 96, 7, 0.705);
}
.page__text {
  padding: 20vh;
  text-align: center;
}
.links {
  padding-bottom: 3rem;
  border-bottom: 1px solid orange;
}
.heading {
  padding: 3rem 0;
}
.context-text {
  margin: 3rem;
}
.dialog-title {
  text-align: center;
  font-size: 1rem;
  padding-bottom: 4rem;
}
.dialog-text {
  padding: 1rem;
  text-align: left;
  border: 2px rgb(235, 212, 135) dashed;
}
.dialog-button {
  color:#ffc778
}
.experience {
  margin: 3rem 0;
  padding-bottom: 3rem;
  background-color: #ffc77859;
  
}
.experience-items {
  width: 33.3%;
  padding: 0 1rem;
}
.experience-items img {
  width: 100%;
}
.experience-contents {
  display: flex;
}
.context-wrapper {
  padding: 3rem 0;
  border-bottom: 1px solid orange;
}
.context-item {
  display: flex;
  padding-bottom: 5rem;
}
.context-item img{
  width: 640px;
  height: 426px;
  padding-right: 1rem;
}
.context-item p {
  text-align: left;
}
</style>