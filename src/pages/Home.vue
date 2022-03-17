<template>
  <div>
    <banner-top
      headingText="Buy The Best Products From All Over The World"
      paragraphVisible="true"
      btnVisible="true"
      imgVisible="true"
      arrowVisible="true"
    ></banner-top>
    <home-product-container heading="Newest in Store" sortBy="publishedAt"></home-product-container>
    <banner-5050></banner-5050>
    <home-product-container
      heading="Overskrift"
      sortBy="price"
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
  mounted() {
    this.$store.dispatch("setProducts");
  }
};
</script>
