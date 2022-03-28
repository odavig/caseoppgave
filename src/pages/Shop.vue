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
        <router-link to="/shop">
          All Products
        </router-link>
        <router-link
          :to="'/shop/' + category"
          v-for="(category, i) in categories"
          :key="i"
        >
          {{ category.charAt(0).toUpperCase() + category.slice(1) }}
        </router-link>
      </padding-container>
    </div>
    <product-container 
      :products="products"
      hasFilter="true">
    </product-container>
  </div>
</template>


<script>
export default {
  data() {
    return {
      chosenCategory: ""
    };
  },
  name: "Shop",
  watch: {
    $route() {
      if (!this.$route.params.category) {
        this.chosenCategory = "";
      } else {
        this.chosenCategory = this.$route.params.category;
      }
    }
  },
  computed: {
    products() {
      if (this.chosenCategory) {
        return this.$store.getters.sortByCategory(this.chosenCategory);
      } else {
        return this.$store.getters.products;
      }
    },
    categories() {
      return this.$store.getters.getCategories;
    },
  },
  mounted() {
    this.$store.dispatch("setProducts");
  },
  updated() {
    if (!this.$route.params.category) {
      this.chosenCategory = "";
    } else {
      this.chosenCategory = this.$route.params.category;
    }
  },
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
  border: none;
  cursor: pointer;
}
</style>
