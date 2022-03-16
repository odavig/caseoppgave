<template>
  <div>
    <app-container>
      <h2>{{ heading }}</h2>
    </app-container>
    <div :class="bannerClass">
      <app-cards
        v-for="(product, i) in products"
        :key="i"
        :name="product.title"
        :price="product.price"
        :img="product.img.data.attributes.url"
        :imgHeight="product.img.data.attributes.height"
      ></app-cards>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["heading", 'bannerClass'],
  data() {
    return {
      products: []
    };
  },
  created() {
    axios
      .get("http://localhost:1337/api/products?populate=*")
      .then(res => {
        let json = res.data.data
        for (let i = 0; i < json.length; i++) {
          this.products.push(json[i].attributes)
        }
      })
      .catch(error => console.log(error));
  }
};
</script>

<style scoped>
h2 {
  padding-top: 4%;
}
.slide {
  padding-top: 4%;
  padding-bottom: 1.5%;
  white-space: nowrap;
  width: 100%;
  height: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
}

.grid {
  padding-top: 4%;
  padding-bottom: 1.5%;
  width: 100%;
  height: 100%;
}
</style>
