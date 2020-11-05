<template>
  <v-navigation-drawer
    :right="isRight"
    :mini-variant="isOpen"
    permanent
  >
    <v-list
      nav
      dense
    >
      <v-list-item link>
        <v-list-item-icon>
          <v-icon>mdi-folder</v-icon>
        </v-list-item-icon>
        <v-list-item-title>My Files</v-list-item-title>
      </v-list-item>
      <v-list-item link>
        <v-list-item-icon>
          <v-icon>mdi-account-multiple</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Shared with me</v-list-item-title>
      </v-list-item>
      <v-list-item link>
        <v-list-item-icon>
          <v-icon>mdi-star</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Starred</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapState } from 'vuex'
import layoutDirMixin from '@/scripts/mixins/layoutDirMixin'

export default {
  name: 'NavDrawer',
  mixins: [layoutDirMixin],
  data() {
    return {
      isOpen: false
    }
  },
  computed: {
    ...mapState(['open_drawer'])
  },
  watch: {
    'open_drawer'(val) {
      this.isOpen = val
      console.log(val)
    }
  }
}
</script>

<style scoped>

</style>
