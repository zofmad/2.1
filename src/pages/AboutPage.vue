<template>
  <div class="page">
    <h1>About</h1>
    <p>This app was made in vue.js</p>
    <img class="animate__animated" :class="{'animate__jackInTheBox' : isAnimated}" src="@/assets/vueLogo.png" @click="addJackInTheBoxAnimation" @animationend="isAnimated = false">
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
  data: () => ({
    isAnimated: true
  }),
  methods: {
    addJackInTheBoxAnimation () {
      this.isAnimated = true
    }

  }
}
</script>

<style lang="scss" scoped>
img {
  cursor:pointer;
  margin: 20px 0 0;
}
</style>
