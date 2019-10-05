/* ============
 * Mutations for the Apartment module
 * ============
 *
 */

import { SET_APARTMENT_STATE } from './mutation-types'

/* eslint-disable no-param-reassign */
export default {
  [SET_APARTMENT_STATE] (state, payload) {
    state.list = payload
  }
}
