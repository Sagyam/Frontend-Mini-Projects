app.component("product-display", {
  props: {},
  template:
    /*html*/
    `<div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <img v-bind:src="image">
      </div>
      <div class="product-info">
        <h1 class='title'>{{ title }}</h1>

        <p v-if="inStock" class="subtitle">In Stock</p>
        <p v-else class="subtitle">Out of Stock</p>

        <p>Shipping: <strong>{{ shipping }}</strong></p>

        <article class="tile is-child box">
        <p class="title">Product Details</p>
        <p class="subtitle">
          <ul>
            <li v-for="detail in details">{{ detail }}</li>

          </ul>
        </p>
        </article>
        <p>Color Options </p>
        <div 
          v-for="(variant, index) in variants" 
          :key="variant.id" 
          @mouseover="updateVariant(index)" 
          class="color-circle" 
          :style="{ backgroundColor: variant.color }">
        </div>
        <button 
          class="button is-success hover-color" 
          :class="{ disabledButton:!inStock}" 
          :disabled="!inStock" 
          v-on:click="addToCart">
          <i class="fas fa-cart-plus"></i>
          &nbsp; Add to Cart
        </button>
        <button 
        class="button is-warning hover-color" 
        :class="{ disabledButton:cartEmpty }" 
        :disabled=" cartEmpty" 
        v-on:click="removeFromCart">
        <i class="fas fa-minus-square"></i>
         &nbsp; Remove Item
      </button>
      </div>
    </div>
    <review-list v-if="reviews.length" :reviews="reviews"></review-list>
    <review-form @review-submitted="addReview"></review-form>
  </div>`,
  data() {
    return {
      product: "Socks",
      brand: "Vue Mastery",
      selectedVariant: 0,
      variants: [
        {
          id: 2234,
          color: "green",
          image: "./assets/images/socks_green.jpg",
          quantity: 50,
          details: ["50% Cotton", "30% Wool", "20% polyester"],
          premium: true,
        },
        {
          id: 2235,
          color: "blue",
          image: "./assets/images/socks_blue.jpg",
          quantity: 0,
          details: ["50% Cotton", "30% Wool", "20% polyester"],
          premium: false,
        },
      ],
      details: ["50% Cotton", "30% Wool", "20% polyester"],
      reviews: [
        {
          name: "Sagyam",
          review: "Nice pair of socks",
          rating: 5,
          recommend: "Yes",
        },
      ],
    };
  },
  methods: {
    addToCart() {
      this.$emit("add-to-cart", this.variants[this.selectedVariant].id);
    },
    removeFromCart() {
      this.$emit("remove-from-cart");
    },
    updateVariant(index) {
      this.selectedVariant = index;
    },
    addReview(review) {
      this.reviews.push(review);
    },
    getDetails() {
      return this.variants[this.selectedVariant].details;
    },
  },
  computed: {
    title() {
      return this.brand + " " + this.product;
    },
    image() {
      return this.variants[this.selectedVariant].image;
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity;
    },
    cartEmpty() {
      if (this.$parent.cart.length === 0) {
        return true;
      } else {
        return false;
      }
    },
    shipping() {
      if (this.variants[this.selectedVariant].premium) {
        return "Free";
      }
      return "2.99";
    },
  },
});
