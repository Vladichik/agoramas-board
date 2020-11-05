<template>
  <header>
    <v-app-bar-nav-icon color="#2196f3" @click.stop="setVuexOpenDrawer(!open_drawer)" />
    <app-logo />
    <language-switch />
  </header>
</template>

<script>
import LanguageSwitch from '@/components/widgets/LanguageSwitch'
import AppLogo from '@/components/main/AppLogo'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Header',
  components: {
    LanguageSwitch,
    AppLogo
  },
  computed: {
    ...mapState(['open_drawer'])
  },
  methods: {
    ...mapMutations(['setVuexOpenDrawer'])
  }
}
</script>

<style lang="scss">
@import "assets/styles/mixins";

header {
  background: white;
  height: 64px;
  align-items: center;
  padding: 0 15px;
  @include shadowGenerator(0 4px 5px 0 rgba(0, 0, 0, .24));
  @include setGrid(auto auto 1fr, 10px, null, null, "columns");
}
</style>
