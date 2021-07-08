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
        },
        DeleteCart(id){
            this.cart.splice(this.cart.id)
            this.quan -=1
            if (this.quan<0) {
                this.quan=0
            }
        }
    }
})