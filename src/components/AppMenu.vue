<template>
<Menubar :model="items" class="app-menu"/>
</template>

<script>
import Menubar from 'primevue/menubar'

export default {
  data () {
    return {
      items: [
        {
          label: 'Home',
          icon: 'pi pi-fw pi-home'
        },
        {
          label: 'Mixin',
          icon: 'pi pi-fw pi-filter'
        },
        {
          label: 'About',
          icon: 'pi pi-fw pi-info'
        }
      ]
    }
  },
  components: {
    Menubar
  }
}
</script>

<style lang="scss" scoped>
button {
    margin: 0.5rem;
}
.app-menu {
   border-radius: 1rem;
  box-shadow: 0 20px 40px 0 rgba(107,154,212,.3);
  overflow: hidden;
}
</style>
