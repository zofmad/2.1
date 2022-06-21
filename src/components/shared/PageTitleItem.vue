<template>
  <h1 class="page-title">
    <slot />
  </h1>
</template>

<script>
export default {
  name: 'PageTitleItem'
}
</script>

<style lang="scss">
.page-title {
  color: $dark-blue;
  margin: 2rem;
  font-size: 2rem;
}
</style>
