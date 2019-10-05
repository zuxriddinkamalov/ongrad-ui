<template>
  <div>
    Hello world
  </div>
</template>

<script>
export default {
  name: 'Apartment',
  mounted () {
    this.$store.dispatch('apartment/getApartments')
  }
}
</script>

<style scoped>

</style>
