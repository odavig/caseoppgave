<template>
  <div>
    <app-container>
      <h2>Newest Products</h2>
    </app-container>
    <div id="cards__outer--container">
      <app-cards
        v-for="(product, i) in products"
        :key="i"
        :name="product.name"
        :price="product.price"
      ></app-cards>
    </div>
    <app-container class="paddingM"></app-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          name: "tv",
          price: 120
        },
        {
          name: "mac",
          price: 439
        },
        {
          name: "mouse",
          price: 12
        },
        {
          name: "mouse",
          price: 12
        },
        {
          name: "mouse",
          price: 12
        },
        {
          name: "mouse",
          price: 12
        }
      ]
    };
  }
};
</script>

<style scoped>
h2 {
  padding-top: 4%;
}
#cards__outer--container {
  padding-top: 4%;
  padding-bottom: 1.5%;
  white-space: nowrap;
  width: 100%;
  height: 100%;
  overflow-x: scroll;
}
</style>
