import {defineStore} from "pinia";

export const productTypes = [
    {
        name: "Кардиган",
        value: 'cardigan'
    },
    {
        name: "Костюм",
        value: 'costume'
    },
    {
        name: "Рубашка",
        value: 'rubaska'
    },
]

export const useProducts = defineStore('products', {
    state() {
        return {
            products: [
                {
                    type: productTypes[0].value,
                    name: 'Кардиган',
                    imageUrl: '/images/1.jpg',
                    price: '2 990'
                },
                {
                    type: productTypes[0].value,
                    name: 'Кардиган',
                    imageUrl: '/images/2.png',
                    price: '3 499'
                },
                {
                    type: productTypes[0].value,
                    name: 'Кардиган',
                    imageUrl: '/images/3.png',
                    price: '2 790'
                },
                {
                    type: productTypes[1].value,
                    name: 'Костюм вязаный',
                    imageUrl: '/images/4.png',
                    price: '3 990'
                },
                {
                    type: productTypes[1].value,
                    name: 'Костюм брючный',
                    imageUrl: '/images/5.png',
                    price: '6 490'
                },
                {
                    type: productTypes[1].value,
                    name: 'Костюм тройка',
                    imageUrl: '/images/6.png',
                    price: '7 990'
                },
                {
                    type: productTypes[2].value,
                    name: 'Рубашка',
                    imageUrl: '/images/7.png',
                    price: '2 099'
                },
                {
                    type: productTypes[2].value,
                    name: 'Рубашка',
                    imageUrl: '/images/8.png',
                    price: '1 990'
                },
                {
                    type: productTypes[2].value,
                    name: 'Рубашка',
                    imageUrl: '/images/9.png',
                    price: '2 590'
                },
                {
                    type: productTypes[1].value,
                    name: 'Костюм льняной',
                    imageUrl: '/images/10.png',
                    price: '4 990'
                },
                {
                    type: productTypes[1].value,
                    name: 'Костюм льняной',
                    imageUrl: '/images/11.png',
                    price: '6 490'
                },
                {
                    type: productTypes[1].value,
                    name: 'Костюм брючный',
                    imageUrl: '/images/12.png',
                    price: '5 490'
                },
            ]
        }
    },
    getters: {
        products: (state) => {
            return state.products.map(
                (el, index) => {
                    // @ts-ignore
                    el.id = index;
                    return el;
                }) || [];
        }
    }
})