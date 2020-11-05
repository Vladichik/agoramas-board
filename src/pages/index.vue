<template>
  <section class="ag-main-content">
    <nav-drawer />
    <main class="ag-content">
      <search-box-main />
      <main-categories />
    </main>
  </section>
</template>
<script>
import {mapState} from 'vuex'
import NavDrawer from '@/components/main/NavDrawer'
import SearchBoxMain from '~/components/main/SearchBoxMain'
import MainCategories from '~/components/main/MainCategories'

export default {
  components: {
    NavDrawer,
    SearchBoxMain,
    MainCategories
  },
  computed: {
    ...mapState(['open_drawer'])
  }
}
</script>
<style lang='scss'>
@import 'assets/styles/mixins';

.ag-main-content {
  @include setGrid(auto 1fr, 10px, null, null, 'columns')
}
</style>
