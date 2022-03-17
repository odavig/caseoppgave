<template>
  <div>
    <padding-container class="paddingM">
      her kommer filter og søk osv
    </padding-container>
    <padding-container class="rutenett">
      <product-card
        v-for="(product, i) in products"
        :key="i"
        :name="product.title"
        :price="product.price"
        :img="product.img.data.attributes.url"
        :imgHeight="product.img.data.attributes.height"
        class="paddingM"
      ></product-card>
    </padding-container>
  </div>
</template>

<script>
export default {
  name: "ShopProductContainer",
  props: ["heading"],
  computed: {
    getProducts() {
      this.products = this.$store.getters.products;
    }
  },
  data() {
    return {
      products: []
    };
  },
  mounted() {
    this.getProducts;
  },
  created() {
    this.$store.dispatch("setProducts");
  }
};
</script>

<style scoped>
div {
  margin-left: auto;
  margin-right: auto;
}

</style>
