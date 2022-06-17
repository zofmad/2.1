<template>
  <div id="app">
    <div class="container">
      <!-- header -->
      <app-header />
      <app-menu />
      <router-view/>
    </div>
  </div>
</template>

<script>
import './styles/global.scss'
import AppHeader from './components/AppHeader'
import AppMenu from './components/AppMenu'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppMenu
  }
}
</script>

<style lang="scss" scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  padding: 2rem;
}
</style>
