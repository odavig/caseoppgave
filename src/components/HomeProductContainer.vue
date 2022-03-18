<template>
  <div>
    <padding-container class="paddingM">
      <h2>{{ heading }}</h2>
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
  name: "HomeProductContainer",
  props: ["heading", "products"],
  computed: {},
  data() {
    return {
    };
  }
};
</script>

<style scoped>
div {
  margin-left: auto;
  margin-right: auto;
}
</style>
