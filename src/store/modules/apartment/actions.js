/* ============
 * Actions for the Apartment module
 * ============
 *
*/

import * as API from '@/constants/api'
import axios, { getPayloadFromSuccess, getPayloadFromError } from '@/plugins/axios'
import { SET_APARTMENT_STATE } from './mutation-types'

export default {
  getApartments ({ commit }, params) {
    return axios.get(API.GET_APARTMENT_LIST, { params })
      .then(response => commit(SET_APARTMENT_STATE, getPayloadFromSuccess(response)))
      .catch(getPayloadFromError)
  }
}
