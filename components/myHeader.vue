<template>
  <div id="app" class="header">
    <header class="myHeader">
      <nav class="nav-link">
        <ul class="horizon">
          <div v-for="(todo, index) in todos" :key="todo.id" >
            <li v-if="index == 0"
                >
                <nuxt-link
                  to="/"
                >
                  <button type="checkbox" class="pages"><span> {{todo.name}} </span></button>
                </nuxt-link>
            </li>
            <li v-else-if="index == 1">
                <nuxt-link
                  to="/About"
                >
                  <button type="checkbox" class="pages"><span> {{todo.name}} </span></button>
                </nuxt-link>
            </li>
            <li v-else>
              <nuxt-link
                  to="/Contact"
                >
                  <button type="checkbox" class="pages"><span> {{todo.name}} </span></button>
                </nuxt-link>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  </div>
</template>
<script>
// import { mapMutations } from 'vuex'
export default {
  
  computed: {
    todos (){
      return this.$store.state.todos.list
    },
    /* classColor: function () {
      return {
        before: this.todo.done,
        after: !this.todo.done,
      };
    }, */
  },
  methods: {
    
    /* ...mapMutations ({
      toggle: 'todos/toggle',
    }), */
  }
};
</script>
<style>
* {
  box-sizing: border-box;
}

.myHeader {
  padding: 30px 4% 20px;
  top: 0;
  background-color: #fbd241;
  display: flex;
  align-items: center;
}

.pages {
  color: rgb(243, 243, 186);
  padding-right: 1rem;
  
}
.horizon {
  list-style: none;
  margin: 0;
  display: flex;
}
nav {
  margin: 0 0 0 auto;
}
.pages {
  
  border: none;
  margin: 0 0 0 2rem;
  font-size: 30px;
  border-radius: 14px;
  background: #fbd241;
  box-shadow: 5px 5px 10px #d5b337, -5px -5px 10px #fff24b;
}
.pages:hover {
 
  border-radius: 14px;
  background: linear-gradient(145deg, #e2bd3b, #ffe146);
  box-shadow:  20px 20px 60px #d5b337, -20px -20px 60px #fff24b;
}
.pages span:hover {
  position: relative;
  top:0.1rem;
  left: 0.2rem;
  color: #d5b337
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
