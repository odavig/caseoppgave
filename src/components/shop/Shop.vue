<template>
  <div>
    <app-banner
      headingText="Shop"
      paragraphVisible="false"
      btnVisible="false"
      imgVisible="false"
      arrowVisible="false"
    ></app-banner>
    <div id="shopNav">
      <app-container class="paddingSm">
        <a href="">Link</a>
        <a href="">Link</a>
        <a href="">Link</a>
        <a href="">Link</a>
      </app-container>
    </div>
    <app-container
      class="paddingM"
      id="shopAction"
    >
      <h2>All Products {{ searchInput }} </h2>
      <p>{{ products }}</p>
      <input type="text" placeholder="Search Products" v-model="searchInput">
    </app-container>
    <div id="productsContainer">
      <app-cards-container
      ></app-cards-container>
    </div>
  </div>
</template>

<script>
import Main from "../Main.vue";
import Banner from "../Banner.vue";
import AppCardsContainer from "../CardsContainer.vue";

export default {
  data() {
    return {
      searchInput: '',
      products: this.$store.getters.products
    }
  },
  components: {
    appMain: Main,
    appBanner: Banner,
    appCardsContainer: AppCardsContainer
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

#productsContainer {
  margin-left: 7%
}
</style>
