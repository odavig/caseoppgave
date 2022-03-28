<template>
  <div>
    <padding-container class="paddingM">
      <filter-options v-if="hasFilter"></filter-options>
      <h2 v-if="heading">{{ heading }}</h2>
    </padding-container>
    <padding-container class="rutenett">
      <product-card
        v-for="(product, i) in filterBySearch"
        :key="i"
        :name="product.title"
        :price="product.price"
        :img="'http://localhost:1337' + product.img.data.attributes.url"
        :id="product.id"
        :category="product.category"
        class="paddingM"
      ></product-card>
    </padding-container>
  </div>
</template>

<script>
import FilterOptions from "../components/FilterOptions.vue";

export default {
  name: "ProductContainerHome",
  props: ["heading", "products", "hasFilter"],
  components: {
    FilterOptions
  },
  computed: {
    filterBySearch() {
      let value = this.$store.getters.getSearchValue;
      if (!value || !this.hasFilter) {
        return this.products;
      } else {
        return this.products.filter(product => {
          return product.title.toLowerCase().match(value.toLowerCase()) || product.description.toLowerCase().match(value.toLowerCase());
        });
      }
    }
  }
};
</script>

<style scoped></style>
