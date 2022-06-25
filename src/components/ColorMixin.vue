<template>
  <div>

    <!-- mixtures list -->
    <mixtures-list />

    <!-- result box -->
    <results-box />

  </div>
</template>

<script>
import MixturesList from './MixturesList'
import ResultsBox from './ResultsBox'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'ColorMixin',
  components: {
    MixturesList,
    ResultsBox
  },
  computed: {
    ...mapState(['mixtures'])
  },
  methods: {
    ...mapMutations({ increment: 'INCREMENT_COLOR' }),
    ...mapMutations({ decrement: 'DECREMENT_COLOR' }),
    ...mapMutations({ refresh: 'REFRESH_MIXTURE' })
  }
}
</script>
