<template>
  <div>
    <banner-top
      headingText="Buy The Best Products From All Over The World"
      paragraphVisible="true"
      btnVisible="true"
      imgVisible="true"
      arrowVisible="true"
    ></banner-top>
    <home-product-container
      heading="Newest in Store"
      :products="sortByPublished"
    ></home-product-container>
    <banner-5050></banner-5050>
    <home-product-container
      heading="Overskrift"
      :products="sortByPrice"
    ></home-product-container>
  </div>
</template>

<script>
import BannerTop from "../components/BannerTop.vue";
import HomeProductContainer from "../components/HomeProductContainer.vue";
import Banner5050 from "../components/Banner5050.vue";

export default {
  name: "Home",
  components: {
    Banner5050,
    BannerTop,
    HomeProductContainer
  },
  computed: {
    sortByPrice() {
      return this.$store.getters.sortProducts("price");
    },
    sortByPublished() {
      return this.$store.getters.sortProducts("publishedAt");
    }
  },
  mounted() {
    this.$store.dispatch("setProducts");
  }
};
</script>
