<template>
  <div class="ag-filters-block">
    <v-expansion-panels focusable>
      <v-expansion-panel>
        <v-expansion-panel-header>{{ $t('filters') }}</v-expansion-panel-header>
        <v-expansion-panel-content class="ag-filters-content">
          <pets-filter />
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
import PetsFilter from '~/components/filters/PetsFilter'

export default {
  name: 'FiltersHub',
  components: {
    PetsFilter
  }
}
</script>

<style lang="scss">
@import "assets/styles/mixins";

.ag-filters-block {
  padding: 15px 120px 0 120px;

  .v-expansion-panel-content__wrap {
    padding: 15px 0 0 0;
    background: yellow;
  }
}
</style>
