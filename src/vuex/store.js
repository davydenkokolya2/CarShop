
import axios from 'axios';
import { createStore } from 'vuex'

export default createStore({
    state: {
        products: []
    },
    mutations: {
        SET_PRODUCTS_TO_STATE: (state, products) => (
            state.products = products
        )
    },
    actions: {
        GET_PRODUCTS_FROM_API({ commit }) {
            return axios('http://localhost:3000/products', {
                methods: "GET"
            })
            .then((products) => {
                
                commit('SET_PRODUCTS_TO_STATE', products.data)
                return products;
            })
            .catch((error) => {
                console.log(error)
                return error;
            }) 
        }
    },
    getters: {
        PRODUCTS(state) {
            return state.products;
        }
    },
    
})

