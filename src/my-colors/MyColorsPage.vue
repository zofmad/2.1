<template>
  <div class="my-colors-page">
    <page-title-item>My colors</page-title-item>
    <MyColorsList />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import MyColorsList from './MyColorsList'
import PageTitleItem from '@/components/shared/PageTitleItem'

export default {
  name: 'MyColorsPage',
  components: {
    MyColorsList,
    PageTitleItem
  },
  data: () => ({
    // isAnimated: true
  }),
  computed: mapState(['colors'])
}
</script>

<style lang="scss" scoped>

</style>
