<template>
    <footer>
        <section class="footer-above">
    　　    <nav class="footer-link">
                <ul class="horizon">
                <div v-for="(todo, index) in todos" :key="todo.id" >
                    <li v-if="index == 0"
                        >
                        <nuxt-link class="footer-link"
                        to="/"
                        >
                        <button class="footer-pages"><span> {{todo.name}}</span></button>
                        </nuxt-link>
                    </li>
                    <li v-else-if="index == 1">
                        <nuxt-link class="footer-link"
                        to="/About"
                        >
                        <button class="footer-pages"><span> {{todo.name}}</span></button>
                        </nuxt-link>
                    </li>
                    <li v-else>
                    <nuxt-link class="footer-link"
                        to="/Contact"
                        >
                        <button class="footer-pages"><span> {{todo.name}} </span></button>                        </nuxt-link>
                    </li>
                </div>
                </ul>
            </nav>
        </section>
        <p class="footer-under">© Nakayama.</p>
    </footer>
</template>

<script>
export default {
    computed: {
    todos (){
      return this.$store.state.todos.list
    },
  },
}
</script>

<style>
footer{
    width: 100%;
    height: 100px;
    padding: 2rem 4% 1rem;
    background-color: #FFF7AA;
    
}
.footer-above {
    display: flex;
}
.footer-link {
    margin: 0 auto 0;
}
.footer-pages {
    margin-right: 1rem;
    padding: 0 1rem;
    border: none;
    font-size: 1rem;
    border-radius: 1rem;
    color: #d4c17c;
    background: #FFF7AA;
    box-shadow: -0.1rem -0.1rem 0.2rem rgba(255, 255, 170, 1), 0.1rem 0.1rem 0.2rem rgba(0, 0, 0, 0.1);
}
.footer-pages:active {
    
    color: #d4c17c;
    background: #FFF7AA;
    box-shadow:  -0.5px -0.5px 0.5px rgba(0, 0, 0, 0.1)inset, 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.1)inset;
}
.footer-link {
   text-decoration:none; 
   color: #4D5156;
}
.footer-under{
    margin-top: 1rem;
    text-align: center;
}
</style>