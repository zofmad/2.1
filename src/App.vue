<template>
  <div id="app">
    <div class="container">
      <!-- header -->
      <app-header />
      <app-menu />
      <router-view v-slot="{ Component }">
        <slide-fade-animation-item class="animate__faster">
          <component :is="Component" />
        </slide-fade-animation-item>
      </router-view>
    </div>
  </div>
</template>

<script>
import './styles/global.scss'
import 'animate.css/animate.min.css'
import SlideFadeAnimationItem from '@/components/shared/SlideFadeAnimationItem'
import AppHeader from './components/AppHeader'
import AppMenu from './components/AppMenu'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppMenu,
    SlideFadeAnimationItem
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
