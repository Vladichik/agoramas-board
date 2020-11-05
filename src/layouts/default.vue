<template>
  <v-app>
    <app-header />
    <Nuxt />
  </v-app>
</template>

<script>
import AppHeader from '@/components/main/Header'
import layoutDirMixin from '@/scripts/mixins/layoutDirMixin'

export default {
  components: {
    AppHeader
  },
  mixins: [layoutDirMixin],
  created() {
    this.$vuetify.rtl = this.getViewDirection()
  }
}
</script>
