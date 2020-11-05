<template>
  <section class="ag-board-main-tabs">
    <nuxt-link v-for="link in $t('main_categories')" :key="link.routing" :to="link.routing">
      <v-btn x-large color="info">
        {{ link.name }}
      </v-btn>
    </nuxt-link>
  </section>
</template>

<script>
export default {
  name: 'MainCategories'
}
</script>

<style lang="scss">
@import "assets/styles/mixins";
@import "assets/styles/variables";

.ag-board-main-tabs {
  margin: 15px 0;
  align-items: flex-start;
  align-content: flex-start;
  @include setGrid(repeat(auto-fit, minmax(220px, 1fr)), 20px, auto, 25px, "both");

  li {
    background: white;
  }

  a {
    text-decoration: none;
    font-size: $font-regular;
  }

  .v-btn {
    width: 100%;
    font-size: $button_font_md;
  }
}

.v-application--is-rtl {
  .ag-board-main-tabs .v-btn {
    font-size: $font-regular
  }
}

</style>
