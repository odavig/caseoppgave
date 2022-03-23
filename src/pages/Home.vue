<template>
  <div>
    <banner-top
      headingText="Buy The Best Products From All Over The World"
      paragraphVisible="true"
      btnVisible="true"
      imgVisible="true"
      arrowVisible="true"
    ></banner-top>
    <product-container-home
      heading="Most Popular"
      :products="sortByPopular"
    ></product-container-home>
    <banner-5050></banner-5050>
    <product-container-home
      heading="Newest in Store"
      :products="sortByPublished"
    ></product-container-home>
  </div>
</template>

<script>
import ProductContainerHome from "../components/ProductContainerHome.vue";
import Banner5050 from "../components/Banner5050.vue";

export default {
  name: "Home",
  components: {
    Banner5050,
    ProductContainerHome
  },
  computed: {
    sortByPopular() {
      return this.$store.getters.sortProducts("sold", 8);
    },
    sortByPublished() {
      return this.$store.getters.sortProducts("publishedAt", 8);
    }
  },
  mounted() {
    this.$store.dispatch("setProducts");
  }
};
</script>
