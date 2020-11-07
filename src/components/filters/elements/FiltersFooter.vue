<template>
  <v-footer
    absolute
    class="ag-filters-block-footer"
  >
    <v-btn depressed color="blue-grey" class="white--text">
      {{ $t('clear_ft') }}
    </v-btn>
    <v-btn depressed color="info">
      {{ $t('apply') }}
    </v-btn>

  </v-footer>
</template>

<script>
export default {
  name: 'FiltersFooter',
  props: ['filters']
}
</script>

<style lang="scss">
@import "assets/styles/mixins";

.ag-filters-block-footer {
  justify-content: flex-end;
  @include setGridAuto(auto, 15px, "columns");
}
</style>
