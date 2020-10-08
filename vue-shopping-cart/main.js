const app = Vue.createApp({
  data() {
    return {
      cart: [],
    };
  },
  methods: {
    updateCart(id) {
      this.cart.push(id);
    },
    removeFromCart() {
      if (this.cart.length > 0) {
        this.cart.pop();
      }
    },
    
  },
});
