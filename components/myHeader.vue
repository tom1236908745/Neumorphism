<template>
  <div id="app" class="header">
    <header class="myHeader">
      <nav class="nav-link">
        <div class="horizon">
          <div v-for="(todo, index) in todos" :key="todo.id" >
            <p v-if="index == 0"
                >
                <nuxt-link
                  to="/"
                >
                  <!-- <button @click="toggle" class="nonActive"><span :class="{ nonActive: nonActive, isActive: isActive }"> {{todo.name}} </span></button> 後で実装-->
                  <button class="pages-left"><span> {{todo.name}} </span></button>
                </nuxt-link>
            </p>
            <p v-else-if="index == 1">
                <nuxt-link
                  to="/About"
                >
                  <button class="pages"><span> {{todo.name}} </span></button>
                </nuxt-link>
            </p>
            <p v-else>
              <nuxt-link
                  to="/Contact"
                >
                  <button class="pages"><span> {{todo.name}} </span></button>
                </nuxt-link>
            </p>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>
<script>
export default {
 /*  data: {
    nonActive: true,
    isActive: false
  },　ボタンの部分後で実装 */
  computed: {
    todos (){
      return this.$store.state.todos.list
    }
  },
  methods: {
    /* toggle: function(){
      this.nonActive != this.nonActive
      this.isActive != this.isActive
    } ボタンの部分後で実装 */
  },
};
</script>
<style>
* {
  box-sizing: border-box;
}

.myHeader {
  padding: 2rem 4% 1rem;
  top: 0;
  background-color: #FFF7AA;
  display: flex;
}

.horizon {
  list-style: none;
  margin: 0;
  display: flex;
}
.nav-link {
  margin: 0 0 0 auto;
}
/* .nonActive {
  padding: 0 1rem;
  border: none;
  margin: 0 0 0 2rem;
  font-size: 30px;
  border-radius: 14px;
  color: rgb(191, 194, 223);
  background: #fff7aa;
  box-shadow: -2px -2px 5px rgba(255, 255, 170, 1), 5px 5px 5px rgba(0, 0, 0, 0.1);
}
.nonActive:active {
  border-radius: 14px;
  background: #FFF7AA;
  box-shadow:  -2px -2px 5px rgba(0, 0, 0, 0.1)inset, 5px 5px 5px rgba(0, 0, 0, 0.1)inset;
}
.nonActive span{
  color: #4D5156;
}
.isActive span {
  position: relative;
  top:0.1rem;
  left: 0.2rem;
  color: rgb(181, 184, 211);
} */
.pages {
  padding: 0 1rem;
  border: none;
  margin: 0 0 0 2rem;
  font-size: 2rem;
  border-radius: 14px;
  color: rgb(191, 194, 223);
  background: #fff7aa;
  box-shadow: -2px -2px 5px rgba(255, 255, 170, 1), 5px 5px 5px rgba(0, 0, 0, 0.1);
}
.pages-left {
  padding: 0 1rem;
  border: none;
  font-size: 2rem;
  border-radius: 14px;
  color: rgb(191, 194, 223);
  background: #fff7aa;
  box-shadow: -2px -2px 5px rgba(255, 255, 170, 1), 5px 5px 5px rgba(0, 0, 0, 0.1);
}
.pages:active {
  border-radius: 14px;
  background: #FFF7AA;
  box-shadow:  -2px -2px 5px rgba(0, 0, 0, 0.1)inset, 5px 5px 5px rgba(0, 0, 0, 0.1)inset;
}

.pages span:active{
  position: relative;
  top:0.1rem;
  left: 0.2rem;
  color: rgb(181, 184, 211);
}

.pages-left:active {
  border-radius: 14px;
  background: #FFF7AA;
  box-shadow:  -2px -2px 5px rgba(0, 0, 0, 0.1)inset, 5px 5px 5px rgba(0, 0, 0, 0.1)inset;
}
.page-left span:active {
  position: relative;
  top:0.1rem;
  left: 0.2rem;
  color: rgb(181, 184, 211);
}
@media screen and (max-width: 500px) { 
  .pages {
  padding: 1rem;
  border: none;
  margin: 0 0 0 2rem;
  font-size: 1rem;
  border-radius: 14px;
  color: rgb(191, 194, 223);
  background: #fff7aa;
  box-shadow: -2px -2px 5px rgba(255, 255, 170, 1), 5px 5px 5px rgba(0, 0, 0, 0.1);
}
.pages-left {
  padding: 1rem;
  border: none;
  font-size: 1rem;
  border-radius: 14px;
  color: rgb(191, 194, 223);
  background: #fff7aa;
  box-shadow: -2px -2px 5px rgba(255, 255, 170, 1), 5px 5px 5px rgba(0, 0, 0, 0.1);
}
.pages:active {
  border-radius: 14px;
  background: #FFF7AA;
  box-shadow:  -2px -2px 5px rgba(0, 0, 0, 0.1)inset, 5px 5px 5px rgba(0, 0, 0, 0.1)inset;
}

.pages span:active{
  position: relative;
  top:0.1rem;
  left: 0.2rem;
  color: rgb(181, 184, 211);
}

.pages-left:active {
  border-radius: 14px;
  background: #FFF7AA;
  box-shadow:  -2px -2px 5px rgba(0, 0, 0, 0.1)inset, 5px 5px 5px rgba(0, 0, 0, 0.1)inset;
}
.page-left span:active {
  position: relative;
  top:0.1rem;
  left: 0.2rem;
  color: rgb(181, 184, 211);
}
}
</style>
