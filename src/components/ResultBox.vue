<template>
  <div>
    <!-- text between -->
    <p v-text="'And the result...'" />
    <flask-item
      :color="mixtureEffectFill"
      :buttonsVisible="false"
      :size="15"
      :amount="100"
      :style="flaskItemStyle"
    />
    <button-item
      @click="$emit('refresh')"
      :size="4"
      :movement="-0.5"
      :fontSize="1.5"
      icon="sync"
    />
  </div>
</template>

<script>
import FlaskItem from './shared/FlaskItem'
import ButtonItem from './shared/ButtonItem'

export default {
  name: 'ResultsBox',
  props: {
    mixtures: {
      type: Array,
      required: true
    }
  },
  computed: {
    mixtureEffectFill () {
      const [redCol, greenCol, blueCol] = this.mixtures.map((item) =>
        Math.floor(item.amount * 2.5)
      )
      return `rgb(${redCol}, ${greenCol}, ${blueCol})`
    },
    flaskItemStyle () {
      return 'margin: 3rem auto'
    }
  },
  components: {
    FlaskItem,
    ButtonItem
  }
}
</script>
