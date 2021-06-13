<template>
  <div class="scroll-top">
    <button v-on:click="scrollTop" class="scroll-button">
      <span class="text">Top</span>
    </button>
  </div>
</template>

<script>
export default {
    methods: {
    scrollTop: function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
        block: "start",
      });
    },
  },
}
</script>

<style>
.scroll-top {
  text-align: right;
  margin: 0 5rem 5rem 0;
  
}
.scroll-button {
  
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
.scroll-button:active{
  color: #dddad4;;
  box-shadow: -4px -4px 5px rgba(0, 0, 0, 0.1)inset,
              4px 4px 5px rgba(0, 0, 0, 0.1)inset;
}
.text {
  font-size: 1.5rem;
  color: rgb(191, 194, 223);
}
</style>