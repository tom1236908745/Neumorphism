<template>
  <div>
      <ul>
          <li v-for="todo in todos" :key="todo">
              <input type="checkbox" @change="toggle(todo)">
              <span :class="{ done: todo.done }">{{ todo.done }}</span>
          </li>
      </ul>
      <input placeholder="タスクを追加" style="margin: 20px;" @keyup.enter="addTodo">
      
        <!-- 以下ダイアログ -->
        <!-- <div style="margin: 30px;">
            <el-button @click="visible = true">ダイアログを開く</el-button>
            <el-dialog :visible.sync="visible" title="確認"><p>確認しました。</p></el-dialog>
        </div>   -->
        
        
    </div>
    
</template>

<script>
import { mapMutations } from 'vuex'
export default {

    data: function() {
        return { visible: false }
    },
    computed: {
        todos (){
            return this.$store.state.todos.list
        }
    },
    methods: {
        addTodo(e){
            this.$store.commit('todos/add', e.target.value)
        },
        ...mapMutations ({
            toggle: 'todos/toggle'
        })
    }
}
</script>

<style>
.aaa {
    color: blue;
}    
</style>