<template>
  <div class="my-colors-page">
  <ul class="mixtures">
    <li
      v-for="(color, index) in colors"
      :key="index">
      <flask-item
        :color="color"
        :buttons-visible="false"
        :size="15"
        :amount="100"
        :style="flaskItemStyle"
         @delete="deleteColor(index)"
      />

    </li>
  </ul>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import FlaskItem from '@/components/shared/FlaskItem'

export default {
  name: 'MyColorsPage',
  computed: {
    ...mapGetters({ colors: 'RGBColors' }),
    flaskItemStyle () {
      return 'margin: 3rem auto'
    }
  },
  methods: {
    deleteColor (index) {
      this.deleteColor(index)
    },
    ...mapMutations({ deleteColor: 'DELETE_COLOR' })
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
