import {defineStore} from "pinia";

export const useCart = defineStore("cart", {
    state: () => {
        return {
            items: []
        }
    },
    getters: {
        products( state) {
            return state.items;
        },
        cartTotal(state) {
            return state.items.reduce((acum, item) => {
                return acum + (Number(item.price.replace(' ', '',)) * Number(item.q));
            }, 0);
        },
        cartTotalProducts(state) {
            return state.items.reduce((acum, item) => {
                return acum + (Number(item.q));
            }, 0);
        }
    },
    actions: {

        addToCart(options) {
            const product = this.items.find(item => item.id === options.id);
            if (product) {
                product.q++;
            } else {
                this.items.push({...options, q: 1});
            }
        },
        incrementProduct(productId) {
            const product = this.items.find(item => item.id === productId);
            if (!product) {
                return;
            }

            product.q++;
        },
        decrementProduct(productId) {
            let productIndex = -1;
            const product = this.items.find((item, index) => {
                const isProduct = item.id === productId

                if (isProduct) {
                    productIndex = index
                }
                return isProduct;

            });

            if (!product) {
                return;
            }
            if (product.q > 1) {
                product.q--;
            }else {
                console.log(productIndex)
                console.log('remove produt')
                this.items.splice(productIndex, 1);

            }
        }
    }
})