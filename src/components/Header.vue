<template>
  <app-container paddingSize="paddingSm">
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
        </router-link>
      </nav>
      <div id="navAction">
        <app-button 
            btnTitle="Sign Up"
            btnClass="primary"
        ></app-button>
        <app-button 
            btnTitle="Sign In"
            btnClass="secondary"
        ></app-button>
      </div>
    </header>
  </app-container>
</template>

<script>

export default {
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
</style>
