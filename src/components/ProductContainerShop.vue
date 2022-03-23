<template>
  <div>
    <padding-container class="paddingM" id="filterNav">
      <div>
        Her er det filter
      </div>
      <div>
        <input type="text" placeholder="Search" v-model="searchInput" />
      </div>
    </padding-container>
    <padding-container class="rutenett" id="container">
      <product-card
        v-for="(product, i) in filteredProducts"
        :key="i"
        :name="product.title"
        :price="product.price"
        :img="'http://localhost:1337' + product.img.data.attributes.url"
        :imgHeight="product.img.data.attributes.height"
        class="paddingM"
        :id="product.id"
        :category="product.category"
      ></product-card>
    </padding-container>
  </div>
</template>

<script>
export default {
  name: "ProductContainerShop",
  props: ["heading", "products"],
  computed: {
    filteredProducts() {
      return this.products.filter((product) => {
        return product.title.toLowerCase().match(this.searchInput.toLowerCase()) || product.description.toLowerCase().match(this.searchInput.toLowerCase())
      })
    }
  },
  data() {
    return {
      searchInput: ""
    };
  },
};
</script>

<style scoped>
input {
  padding: 2%;
  border-radius: 10px;
  border: 2px solid #7c7c7c;
}

#filterNav {
  display: flex;
  justify-content: space-between;
}
</style>
