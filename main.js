const app = Vue.createApp({
    data() {
        return {
            cart: [],
            quan:0,
            premium: true

        }
    },
    methods:{
        updateCart(id){
            this.cart.push(id)
        },
        updateQuan(){
            this.quan +=1
        }
    }
})