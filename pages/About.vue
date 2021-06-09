<template>
  <div class="about">
    <!-- // 一応
    <ul class="side-content">
      <li href="#" v-scroll-to="'#studyAbroad'">留学のエピソードへ</li>
      <li href="#" v-scroll-to="'#skill'">スキルのエピソードへ</li>
      <li href="#" v-scroll-to="'#club'">サークルのエピソードへ</li>
    </ul> -->
    <div class="common-layout">
      <div class="card">
        <h1 class="intro">Pageの紹介</h1>
        <br>
        <p class="title">~Technologies~</p>
        <h2>Nuxt.js</h2>
        <br>
        <br>
        <p class="title">~Pages~</p>
        <div class="links">
          <nuxt-link to="/" class="link">Home Page</nuxt-link>
          <br/>
          <nuxt-link to="/About" class="link">About Page(this page)</nuxt-link>
          <br/>
          <nuxt-link to="/Contact" class="link">Contact Page</nuxt-link>
        </div>
      </div>
      <p style="border-bottom: 1px solid orange;"></p>
      <div class="card">
        <p class="experience-title">Experience</p>
        <div class="experience-contents">
          <div class="experience-items">
            <a href="#" v-scroll-to="'#studyAbroad'"><img src="~/assets/img/about/abroad.png" alt="studyAbroad"></a>
            
            <p>Study abroad</p>
          </div>
          <div class="experience-items">
            <a href="#" v-scroll-to="'#skill'"><img src="~/assets/img/about/abroad.png" alt="studyAbroad"></a>
            
            <p>Skills</p>
          </div>
          <div class="experience-items">
            <a href="#" v-scroll-to="'#club'"><img src="~/assets/img/about/abroad.png" alt="studyAbroad"></a>
            <p>Club</p>
          </div>
        </div>
      </div>
      <p style="border-bottom: 1px solid orange;"></p>

      <section class="context-wrapper">
        <div class="context-content">
          <div class="card">
            <p class="title">~Episode~</p>
            <p class="heading" id="studyAbroad">Study Abroad</p>
            
            <div class="context-item">
              <br>
              <img src="~/assets/img/about/skills.jpg" alt="contextStudyAbroad">
              <p class="context-text">2018年3ケ月間オーストラリアに現地の学校に通いながら留学した経験があります。様々な人種の方々と触れ合い、現地での学校生活、イベントなどを通して異国の地で過ごした経験は自信へと繋がり、人生経験としてとても良い思い出になりました。今でも現地で知り合った方達とSNSで繋がっていて、他国でサッカー、DJ、美容系、様々な方面で活躍している姿を見ているととても良いモチベーションに繋がります。</p>
            </div>
            <h2 class="titleGM">留学先のアデレード↓</h2>
            <GmapMap
              :center="{ lat:-34.9284, lng:138.6007 }"
              :zoom="4"
              :options="mapOptions"
              map-type-id="terrain"
              style="width: 500px; height: 300px;"
            >
              <GmapMarker
          
                :position="marker.position"
                :clickable="true"
                :draggable="true"
                @click="center=marker.position"
              />
            </GmapMap>
          </div>
          <div class="card">
            <p class="heading" id="skill">Skills</p>
            <div class="context-item">
              <br>
              <img src="~/assets/img/about/skills.jpg" alt="contextStudyAbroad">
              <p class="context-text">大学に入るまで、ほとんどプログラミングをしたことがなく、少しHTMLとCSS、JSを触ったくらいでした。大学に入り、色々な方と関わっていき、自分の身近な先輩や同級生が講義の傍、Web関係の事していて、その姿に憧れ次第にWebに興味を持ち始めました。<br><br><br>その後、<br><br> 2020年8月<br>株式会社デザイニウムで長期インターン開始<br><br>2021年1月<br>Floating Weedで長期インターン開始</p>
            </div>
            <p>↓↓↓</p>
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
          </div>
          <div class="card">
            <p class="heading" id="club">Club</p>
            <div class="context-item">
              <img src="~/assets/img/about/skills.jpg" alt="contextStudyAbroad">
              <p class="context-text">サークル活動では小規模ながら、アウトドアサークルというサークルの部長をしています。元々、部員の数が少なく自分が部長になった時は活動メンバーが5人いるかいないかの程度でした。せっかく、部長になったから何かサークルを成長させたいと思い、新たにSNS(Instagram)のアカウントの開設やその他SNSを活用し、新メンバー勧誘のために他大学の生徒の勧誘や積極的に部員に声をかけるなどをし前年度の3倍以上の部員を勧誘することができました。</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return { 
      visible: false,

      //google map用
      marker: {position: { lat:-34.9284, lng:138.6007 }},
      mapOptions: {

        streetViewControl: false,
      },
    }
  },
};
</script>
<style scoped>

.side-content{
  padding-top: 3rem;
  width: 15%;
  height:50%;
  flex-direction: column;
}
.side-content li {
  
  padding: 1rem 0;
  font-size: 0.8rem;
  list-style-type: none;
}
.title {
  padding: 4rem 0;
  font-size: 2rem;
  color: rgba(251, 96, 7, 0.705);
}
.links {
  padding-bottom: 3rem;
}
.heading {
  padding: 3rem 0;
}

.dialog-title {
  text-align: center;
  font-size: 1rem;
  padding-bottom: 4rem;
}
.dialog-text {
  padding: 1rem;
  text-align: left;
  border: 2px #e6e4dd dashed;
}
.dialog-button {
  color:#ffc778
}
.experience {
  border-radius: 10px;
  margin: 3rem 0;
  padding: 3rem;
  background-color: #ffc77859;
  box-shadow: -2px -2px 5px rgb(253, 221, 200),
              5px 5px 5px rgba(0, 0, 0, 0.1);
}
.experience-title {
  margin-bottom: 2rem;
  font-size: 2rem;
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
.titleGM {
  padding-bottom: 2rem;
}
.context-wrapper {
  padding: 3rem 0;
  border-bottom: 1px solid orange;
}
.context-text {
  margin: 3rem;
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