<template>
  <div class="my-colors-page">
    <page-title-item>My colors</page-title-item>
    <MyColorsList />
  </div>
</template>

<script>
import MyColorsList from './MyColorsList'
import PageTitleItem from '@/components/shared/PageTitleItem'

export default {
  name: 'MyColorsPage',
  components: {
    MyColorsList,
    PageTitleItem
  }
}
</script>

<style lang="scss" scoped>

</style>
