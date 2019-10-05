/* ============
 * Routes File
 * ============
 *
 */

export default [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "apartment" */'@/modules/apartment/pages/Apartment.vue')
  },
  {
    path: '/*',
    redirect: '/'
  }
]
