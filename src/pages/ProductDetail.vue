<template>
  <div>
    <h1>{{ $route.params.id }}</h1>
    <product-container-home
      heading="Products We Think You'll Like"
      :products="sortByPopular"
    ></product-container-home>
  </div>
</template>

<script>
import ProductContainerHome from "../components/ProductContainerHome.vue";
export default {
  components: {
    ProductContainerHome
  },
  computed: {
    sortByPopular() {
      return this.$store.getters.sortProducts("sold", 4);
    }
  },
  mounted() {
    this.$store.dispatch("setProducts");
  },
  name: "ProductDetail"
};
</script>
