<template>
  <div>
    <banner-top
      headingText="Shop"
      paragraphVisible="false"
      btnVisible="false"
      imgVisible="false"
      arrowVisible="false"
    ></banner-top>
    <div id="shopNav">
      <padding-container class="paddingSm">
        <p>{{ getProducts }}</p>
        <a href="" v-for="(category, i) in productCategory" :key="i">
          {{ category.charAt(0).toUpperCase() + category.slice(1) }}
        </a>
      </padding-container>
    </div>
    <shop-product-container
      heading="All Products"
    ></shop-product-container>
  </div>
</template>
<script>
import ShopProductContainer from "../components/ShopProductContainer.vue";
import BannerTop from "../components/BannerTop.vue";

export default {
  name: "Shop",
  computed: {
    getProducts() {
      let products = this.$store.getters.products;
      for (let i = 0; i < products.length; i++) {
        if (!this.productCategory.includes(products[i].category)) {
          this.productCategory.push(products[i].category);
        }
      }
    }
  },
  data() {
    return {
      searchInput: "",
      productCategory: []
    };
  },
  components: {
    ShopProductContainer,
    BannerTop
  }
};
</script>

<style>
#shopAction {
  display: flex;
  justify-content: space-between;
}

#shopAction input {
  border-radius: 5px;
  padding: 0.3%;
  border: 3px solid #008066;
}

#shopNav {
  background-color: #f1f1f1;
  width: 100%;
}

#shopNav div {
  text-align: center;
}

#shopNav a {
  color: black;
  text-decoration: none;
  margin-left: 2%;
  margin-right: 2%;
}
</style>
