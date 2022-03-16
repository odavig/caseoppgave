import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        products: []
    },
    mutations: {
        storeProducts(state, products) {
            state.products = products
        }
    },
    actions: {
        setProducts({commit}) {
            let products = []
            axios.get('http://localhost:1337/api/products?populate=*')
                .then(res => {
                    let json = res.data.data
                    for (let i = 0; i < json.length; i++) {
                        products.push(json[i].attributes)
                    }
                    commit('storeProducts', products)
                })
        }
    },
    getters: {
        products(state) {
            return state.products
        }
    }
})