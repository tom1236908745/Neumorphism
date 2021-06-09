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
                  <button class="pages"><span> {{todo.name}} </span></button>
                </nuxt-link>
            </li>
            <li v-else-if="index == 1">
                <nuxt-link
                  to="/About"
                >
                  <button class="pages"><span> {{todo.name}} </span></button>
                </nuxt-link>
            </li>
            <li v-else>
              <nuxt-link
                  to="/Contact"
                >
                  <button class="pages"><span> {{todo.name}} </span></button>
                </nuxt-link>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  </div>
</template>
<script>
export default {
  computed: {
    todos (){
      return this.$store.state.todos.list
    },
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
.pages {
  color: #d5b337;
  padding: 0 1rem;
  border: none;
  margin: 0 0 0 2rem;
  font-size: 30px;
  border-radius: 14px;
  background: #fff7aa;
  box-shadow: -2px -2px 5px rgba(255, 255, 170, 1), 5px 5px 5px rgba(0, 0, 0, 0.1);
}
.pages:active {
  border-radius: 14px;
  background: #FFF7AA;
  box-shadow:  -5px -5px 5px rgba(0, 0, 0, 0.1)inset, 5px 5px 5px rgba(0, 0, 0, 0.1)inset;
}
.pages span:active {
  position: relative;
  top:0.1rem;
  left: 0.2rem;
  color: #d4c17c
}

</style>
