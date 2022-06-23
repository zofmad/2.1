<template>
<Menubar :model="items" class="app-menu"/>
</template>

<script>
import Menubar from 'primevue/menubar'

export default {
  components: {
    Menubar
  },
  data () {
    return {
      items: [
        {
          label: 'Home',
          icon: 'pi pi-fw pi-home',
          to: '/'
        },
        {
          label: 'Mixin',
          icon: 'pi pi-fw pi-filter',
          to: '/mixin'
        },
        {
          label: 'About',
          icon: 'pi pi-fw pi-info',
          to: 'about'
        },
        {
          label: 'My colors',
          icon: 'pi pi-fw pi-palette',
          to: '/my-colors'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
button {
    margin: 0.5rem;
}
.app-menu {
  border-radius: 1rem;
  box-shadow: $flask-box-shadow;
  overflow: hidden;
}
</style>
