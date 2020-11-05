<template>
  <v-select
    :items="deal_type_opts"
    :label="$t('deal_type')"
    outlined
  ></v-select>
</template>

<script>
export default {
  name: 'PetsFilters',
  data() {
    return {
      deal_type_opts: [
        {key: 'sale', text: this.$t('deal_type_opts.sale')},
        {key: 'buying', text: this.$t('deal_type_opts.buying')}
      ]
    }
  }
}
</script>

<style scoped>

</style>
