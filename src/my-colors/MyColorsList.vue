<template>
  <div class="my-colors-page">
  <ul class="mixtures">
    <li
      v-for="(color, index) in colors"
      :key="index">
      <flask-item
        :color="mixtureEffectFill(color)"
        :buttons-visible="false"
        :size="15"
        :amount="100"
        :style="flaskItemStyle"
      />

    </li>
  </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import FlaskItem from '@/components/shared/FlaskItem'

export default {
  name: 'MyColorsPage',
  data: () => ({
    // isAnimated: true
  }),
  computed: {
    ...mapState(['colors']),
    flaskItemStyle () {
      return 'margin: 3rem auto'
    }
  },
  methods: {
    mixtureEffectFill (color) {
      return `rgb(${color.red}, ${color.green}, ${color.blue})`
    }
  },
  components: {
    FlaskItem
  }
}
</script>

<style lang="scss" scoped>
ul {
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0;
}
</style>
