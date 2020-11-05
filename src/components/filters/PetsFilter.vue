<template>
  <section class="ag-filters-grid">
    <v-select
      v-model="filters_obj.deal_type"
      :items="deal_type_opts"
      :label="$t('deal_type')"
      item-value="key"
      outlined
      dense
    />
    <v-select
      v-model="filters_obj.animal_type"
      :items="animal_types"
      :label="$t('animal_type')"
      item-value="key"
      outlined
      dense
    />
    <v-select
      v-model="filters_obj.breed"
      :items="this[`breeds_${filters_obj.animal_type}`]"
      :label="$t('breed')"
      item-value="key"
      outlined
      dense
    />
  </section>
</template>

<script>
export default {
  name: 'PetsFilters',
  data() {
    return {
      deal_type_opts: [
        {key: null, text: ''},
        {key: 'sale', text: this.$t('deal_type_opts.sale')},
        {key: 'buying', text: this.$t('deal_type_opts.buying')},
        {key: 'passing', text: this.$t('deal_type_opts.passing')},
        {key: 'found', text: this.$t('deal_type_opts.found')},
        {key: 'delayed', text: this.$t('deal_type_opts.delayed')},
        {key: 'adoption', text: this.$t('deal_type_opts.adoption')},
        {key: 'mating', text: this.$t('deal_type_opts.mating')}
      ],
      animal_types: [
        {key: null, text: ''},
        {key: 'cats', text: this.$t('animal_types.cats')},
        {key: 'dogs', text: this.$t('animal_types.dogs')},
        {key: 'birds', text: this.$t('animal_types.birds')},
        {key: 'fishes', text: this.$t('animal_types.fishes')},
        {key: 'other', text: this.$t('animal_types.other')}
      ],
      breeds_cats: [
        {key: 'siam', text: this.$t('breeds_cat.siam')},
        {key: 'himalaya', text: this.$t('breeds_cat.himalaya')},
        {key: 'ragdoll', text: this.$t('breeds_cat.ragdoll')},
        {key: 'mainecoon', text: this.$t('breeds_cat.mainecoon')},
        {key: 'scottish', text: this.$t('breeds_cat.scottish')},
        {key: 'persian', text: this.$t('breeds_cat.persian')},
        {key: 'british', text: this.$t('breeds_cat.british')},
        {key: 'sphinx', text: this.$t('breeds_cat.sphinx')},
        {key: 'burma', text: this.$t('breeds_cat.burma')},
        {key: 'angora', text: this.$t('breeds_cat.angora')},
        {key: 'siberian', text: this.$t('breeds_cat.siberian')}
      ],
      filters_obj: {
        deal_type: '',
        animal_type: '',
        breed: ''
      }
    }
  },
  methods: {
    check() {
      console.log(this.filters_obj)
    }
  }
}
</script>

<style scoped>

</style>
