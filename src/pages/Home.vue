<template>
  <div>
    <banner-top
      headingText="Buy The Best Products From All Over The World"
      paragraphVisible="true"
      btnVisible="true"
      imgVisible="true"
      arrowVisible="true"
    ></banner-top>
    <product-container
      :products="sortByPopular"
      heading="Most Popular"

    >
    </product-container>
    <banner-5050>
    </banner-5050>
    <product-container
      :products="sortByPublished"
      heading="New in Store"
    >
    </product-container>
  </div>
</template>

<script>
import Banner5050 from "../components/Banner5050.vue";

export default {
  name: "Home",
  components: {
    Banner5050,
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
