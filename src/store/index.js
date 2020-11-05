/**
 *
 * Written by vlad on 02/11/2020
 */
/**
 *
 * Written by vlad on 2019-07-12
 */

export const state = () => ({
  open_drawer: false
})

export const mutations = {
  setVuexOpenDrawer (state, val) {
    state.open_drawer = val
  }
}
