<template>
  <padding-container paddingSize="paddingSm">
    <header class="rutenett">
      <div id="logoContainer">
        <router-link to="/">
          <img id="logoImg" src="../assets/media/Logo.png" alt="Brand logo" />
        </router-link>
      </div>
      <nav>
        <router-link to="/">
          Home
        </router-link>
        <router-link to="/shop">Shop</router-link>
        <router-link to="/contact">Contact</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/cart">
          <img id="cartImg" src="../assets/media/cart.png" alt="Brand logo" />
          <p v-if="getCart.length > 0"> {{ getCart.length }} </p>
        </router-link>
      </nav>
      <div id="navAction">
        <app-button 
            btnClass="primary small"
        >
        Sign Up
        </app-button>
        <app-button 
            btnClass="secondary-border small"
        >
        Sign In
        </app-button>
      </div>
    </header>
  </padding-container>
</template>

<script>

export default {
  name: 'Header',
  computed: {
    getCart() {
      return this.$store.getters.getCart
    }
  },
  mounted() {
    this.$store.dispatch('setCart')
  }
};
</script>

<style scoped>
nav {
  grid-column: 2/7;
}

nav a {
  color: black;
  margin-right: 5%;
  text-decoration: none;
}

#navAction {
  text-align: right;
  grid-column: 10/13;
}

#logoImg {
  width: 30%;
  margin-top: 3%;
}

img {
  margin-top: 1%;
  vertical-align: bottom;
}

#navAction button {
    margin-left: 5%;
}

p {
  display: inline;
}
</style>
