<template>
  <header>
    <h1
      class="heading"
      v-text="'RGB Color Mixture'" />
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style scoped lang="scss">
.heading {
  font-size: 3rem;
  background-color: $blue;
  background-image: linear-gradient(19deg, $blue 0%, $violet 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
