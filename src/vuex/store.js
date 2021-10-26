
import axios from 'axios';
import { createStore } from 'vuex'

export default createStore({
    state: {
        products: [],
        cart: []
    },
    mutations: {
        SET_PRODUCTS_TO_STATE: (state, products) => {
            state.products = products
        },
        SET_CART: (state, product) => {
            if (state.cart.length) {
                let isProductExist = false;
                state.cart.map(function (item) {
                    if (item.article === product.article) {
                        isProductExist = true;
                        item.quantity++
                    }
                })
                if (!isProductExist) {
                    state.cart.push(product)
                }
            } else {
                state.cart.push(product)
            }
        },
        REMOVE_FROM_CART: (state, index) => {
            state.cart.splice(index, 1)

        }
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
        },
        ADD_TO_CART({ commit }, product) {
            commit('SET_CART', product)
        },
        DELETE_FROM_CART({ commit }, index) {
            commit('REMOVE_FROM_CART', index)

        }
    },
    getters: {
        PRODUCTS(state) {
            return state.products;
        },
        CART(state) {
            return state.cart;
        }
    },

})

