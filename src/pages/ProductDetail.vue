<template>
  <div>
    <div class="rutenett">
      <div class="productImgContainer">
        <img
          :src="
            'http://localhost:1337' + getProductById.img.data.attributes.url
          "
          alt=""
        />
      </div>
      <div class="productTextContainer">
        <app-button class="primary medium">
          {{ getProductById.category.toUpperCase() }}
        </app-button>
        <h2>{{ getProductById.title }}</h2>
        <h1>${{ getProductById.price }}</h1>
        <p>{{ getProductById.description }}</p>
        <div>
          <app-button class="primary medium" @click="addToCart"
            >Buy Now</app-button
          >
          <app-button class="secondary img">
            <img src="../assets/media/heart-outline.png" alt="" />
          </app-button>
        </div>
      </div>
    </div>
    <product-container :products="sortByPopular" heading="Products We Think You'll Like">
    </product-container>
  </div>
</template>

<script>
export default {
  computed: {
    sortByPopular() {
      return this.$store.getters.sortProducts("sold", 4);
    },
    getProductById() {
      return this.$store.getters.getProductById(this.$route.params.id);
    }
  },
  methods: {
    addToCart() {
      this.$store.dispatch("addToCart", this.id);
    }
  },
  mounted() {
    this.$store.dispatch("setProducts");
  },
  name: "ProductDetail"
};
</script>

<style scoped>
.productImgContainer {
  grid-column: 1/6;
  text-align: center;
  max-height: 500px;
}

div img {
  height: 90%;
  margin-top: 5%;
}

.productTextContainer {
  padding: 10%;
  background-color: #f1f1f1;
  grid-column: 7/13;
}

.productTextContainer h2,
.productTextContainer h1,
.productTextContainer p {
  margin-top: 6%;
}

.productTextContainer p {
  margin-bottom: 7%;
}

button {
  margin-right: 3%;
}

button img {
  vertical-align: -30%;
  margin-top: 0px;
}
</style>
