<template>
  <div>
    <padding-container class="paddingM rutenett">
      <div id="myCart">
        <h1>My Cart</h1>
        <hr />
        <p v-if="getCart.length === 0">No Items in Cart :-(</p>
        <div v-for="cartItem in getCart" :key="cartItem.id" class="rutenett productCard">
          <img
            :src="'http://localhost:1337' + cartItem.img.data.attributes.url"
            alt=""
          />
          <div class="cartProductText">
            <h3>
              {{ cartItem.title }}
              <br>
              <b> ${{ cartItem.price }} </b>
            </h3>
          </div>
        </div>
      </div>
      <div id="cartSummary">
        <h1>Summary</h1>
        <hr />
      </div>
    </padding-container>
  </div>
</template>

<script>
export default {
  name: "Cart",
  computed: {
    getCart() {
      return this.$store.getters.getCart;
    }
  },
  mounted() {
    this.$store.dispatch("setProducts");
  }
};
</script>

<style scoped>
#myCart,
#cartSummary {
  background-color: #f1f1f1;
  padding: 50px;
}

h1 {
  font-weight: 400;
  line-height: 1;
}

h3 {
  font-weight: 300;
}

hr {
  margin-bottom: 20px;
  margin-top: 20px;
}

#myCart {
  grid-column: 1/8;
}

.productCard {
  margin-top: 7%;
}

#myCart img {
  grid-column: 1/4;
  width: 100%;
  background-color: white;
  padding: 10%;
}

.cartProductText {
  grid-column: 5/9;
}

#cartSummary {
  grid-column: 9/13;
}
</style>
