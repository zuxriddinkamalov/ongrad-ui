/* ============
 * Mixins for global helper
 * ============
 *
 */
import { fromPairs, filter, toPairs } from 'ramda'

export default {
  methods: {
    omitEmpty: function (obj) {
      return fromPairs(
        filter(pair => {
          if (pair[1]) return pair
        }, toPairs(obj))
      )
    }
  }
}
