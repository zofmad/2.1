<template>
  <div class="page">
    <page-title-item>Color</page-title-item>
    <h2>You've picked a great color!</h2>

    <flask-item
      :color="mixtureEffectFill"
      :buttons-visible="false"
      :size="15"
      :amount="100"
      :style="flaskItemStyle"
    />
    <i class="pi pi-share-alt"></i>

    <InputText v-model="inputLink" class="share-input" type="text" />

  </div>
</template>

<script>
// import './styles/global.scss'
import PageTitleItem from '@/components/shared/PageTitleItem'

import InputText from 'primevue/inputtext'
import FlaskItem from '@/components/shared/FlaskItem'

export default {
  name: 'ColorPage',
  components: {
    InputText,
    PageTitleItem,
    FlaskItem
  },
  computed: {
    console: () => console,
    window: () => window,
    mixtureEffectFill () {
      return `rgb(${this.$route.params.red}, ${this.$route.params.green}, ${this.$route.params.blue})`
    },
    inputLink () {
      return 'http://localhost:8080' + this.$route.fullPath
    },
    flaskItemStyle () {
      return 'margin: 3rem auto'
    }
  },
  created: function () {
    if (!this.$route.params.red || !this.$route.params.green || !this.$route.params.blue) {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
.share-input {
  margin-left: 15px;
  width: 320px;
}
</style>
