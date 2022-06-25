<template>
  <!-- mixtures -->
  <ul class="mixtures">
    <flask-item
    v-for="(mixture, index) in mixtures"
      :key="index"
      :variant="mixture.variant"
      :amount="mixture.amount"
      :delete-button-visible="false"
      @increment="increment(index)"
      @decrement="decrement(index)"
    />
  </ul>
</template>

<script>
import FlaskItem from './shared/FlaskItem'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Mixtures',
  components: { FlaskItem },
  computed: { ...mapState(['mixtures']) },
  methods: {
    ...mapMutations({ increment: 'INCREMENT_COLOR' }),
    ...mapMutations({ decrement: 'DECREMENT_COLOR' })
  }
}
</script>

<style scoped lang="scss">
.mixtures {
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0;
}
</style>
