import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    cart: [],
    searchShop: '',
  },
  mutations: {
    storeProducts(state, products) {
      state.products = products;
    },
    saveCart(state, product) {
      state.cart.push(product);
    },
    setCart(state, cart) {
      state.cart = cart
    },
    setSearch(state, value) {
      state.searchShop = value
    }
  },
  actions: {
    setProducts({ commit }) {
      let products = [];
      axios.get("http://localhost:1337/api/products?populate=*").then(res => {
        let json = res.data.data;
        for (let i = 0; i < json.length; i++) {
          products.push(json[i].attributes);
          products[i].id = json[i].id;
        }
        commit("storeProducts", products);
      });
    },
    addToCart({ commit, state }, product) {
      commit("saveCart", product);
      sessionStorage.setItem("cart", JSON.stringify(state.cart));
    },
    setCart({commit}) {
      const cart = sessionStorage.getItem('cart')
      if (!cart) {
        return []
      }
      commit('setCart', JSON.parse(cart))
    },
    getSearch({ commit }, value) {
      commit('setSearch', value)
    }
  },
  getters: {
    products(state) {
      return state.products;
    },
    sortProducts: state => (sortBy, limit) => {
      let sortedArray = [...state.products];
      sortedArray.sort((a, b) => b[sortBy] - a[sortBy]);
      return sortedArray.slice(0, limit);
    },
    getCategories(state) {
      let categories = [];
      for (let i = 0; i < state.products.length; i++) {
        if (!categories.includes(state.products[i].category)) {
          categories.push(state.products[i].category);
        }
      }
      return categories;
    },
    sortByCategory: state => sortBy => {
      let products = [];
      for (let i = 0; i < state.products.length; i++) {
        if (state.products[i].category == sortBy) {
          products.push(state.products[i]);
        }
      }
      return products;
    },
    getProductById: state => productId => {
      for (let i = 0; i < state.products.length; i++) {
        if (state.products[i].id === Number(productId)) {
          return state.products[i];
        }
      }
    },
    getCart(state) {
      let cart = []
      for (let i = 0; i < state.products.length; i++) {
        for (let j = 0; j < state.cart.length; j++) {
          if (state.products[i].id === state.cart[j]) {
            cart.push(state.products[i])
          }
        }
      }
      return cart
    },
    getSearchValue(state) {
      return state.searchShop
    }
  }
});
