<template>
  <div>
    <button v-on:click="scrollTop" class="scrollTop">
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
.scrollTop {
  position: fixed;
  bottom: 0px;
  right: 0px;
  margin: 5rem;
  animation-name: upDown;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-duration: 1.5s;
  color: #fff;
  background-color: #eb9900ca;
  -webkit-box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  line-height: 100px;
  width: 100px;
  height: 100px;
  padding: 0;
  border: none;  /* 枠線を消す */
  outline: none;
}
.scrollTop:hover{
  color: #fff;
  background: #f5b400a2;
}
@keyframes upDown {
  0% {
    transform: translate(0, 0);
  }

  100% {
    transform: translate(0, 1rem);
  }
}
.text {
  font-size: 1.5rem;
  color: rgba(250, 240, 206, 0.822);
}
</style>