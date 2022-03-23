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
        :img="'http://localhost:1337' + product.img.data.attributes.url"
        :imgHeight="product.img.data.attributes.height"
        :id="product.id"
        :category="product.category"
        class="paddingM"
      ></product-card>
    </padding-container>
  </div>
</template>

<script>
export default {
  name: "ProductContainerHome",
  props: ["heading", "products"]
};
</script>

<style scoped></style>
