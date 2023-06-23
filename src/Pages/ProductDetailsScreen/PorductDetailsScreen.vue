<template>
    <Navbar v-bind:count="count" />
    <div class="bread-crumb text-left ml-2 mt-2">
        <Breadcrumb v-bind:breadCrumbPath="breadCrumbPath" />
    </div>
    <main class="main">
        <div class="card-wrapper">
            <div class="card">
                <div class="product-imgs">
                    <div class="img-display">
                        <div class="img-showcase">
                            <img v-bind:src="productDetails?.image_url" alt="shoe image">
                        </div>
                    </div>
                </div>
                <!-- card right -->
                <div class="product-content">
                    <h2 class="product-title">{{ productDetails?.name }}</h2>
                    <div class="product-price">
                        <p class="last-price">Price: ₹{{ productDetails?.price }}</p>
                    </div>

                    <div class="product-detail">
                        <h2>Description </h2>
                        <p>{{ productDetails[0]?.description }}</p>
                    </div>

                    <div class="purchase-info">
                        <div class="increase-decrease-btn" v-if="count > 0">
                            <div class="value-button" id="decrease" @click="decreaseValue()" value="Decrease Value">-</div>
                            <input type="number" id="number" :value="count" min="0" />
                            <div class="value-button" id="increase" @click="incressQuanity" value="Increase Value">+</div>
                        </div>
                        <button type="button" class="btn add-cart" @click="addTocart(productDetails)" v-if="count <= 0">
                            Add to Cart
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="22" viewBox="0 0 1024 1024">
                                <path fill="currentColor"
                                    d="M922.9 701.9H327.4l29.9-60.9l496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 0 0-26.6-12.5l-632-2.1l-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 1 0 0 70.6h125.9L246 312.8l58.1 281.3l-74.8 122.1a34.96 34.96 0 0 0-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 0 0-35.4-35.2zM305.7 253l575.8 1.9l-56.4 315.8l-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6c0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6c0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>

    </main>
    <div class="footer-comp">
        <Footer />
    </div>
</template>

<script>
import Navbar from "../../components/Navbar/Navbar.vue";
import Breadcrumb from '../../components/BreadCrumb/BreadCrumb.vue';
import Footer from "../../components/Footer/Footer.vue"
import { ref, } from 'vue';
import productDetailsMixin from "../../mixins/ProductDetailsMixins";
import { useStore } from 'vuex';
import cartMixins from "../../mixins/cartMixins.js";


export default {
    name: "ProductDetailsScreen",
    components: {
        Navbar,
        Breadcrumb,
        Footer
    },
    mixins: [productDetailsMixin],
    data() {
        return {
            breadCrumbPath: {
                firstPath: "Home",
                secondPath: "Electronics",
                thirdPath: "ProductName"
            },
        }
    },
    computed: {
        getCartDetails() {
            return this.$store.getters.getQuantityValue
        },
    },
    watch: {
        // whenever question changes, this function will run
        question() {
            console.log(this.$store.getters.getQuantityValue)
        }
    },
    setup() {
        const count = ref(0);
        const show = ref(false);
        const store = useStore();
        const addTocart = (productDetails) => {
            store.state.addedCartDetails.push({ ...productDetails, quantity: 1 })
            show.value = true
            count.value++;
            store.commit("increment")

        };
        const incressQuanity = () => {
            store.commit("incrementIndividualProduct");
            count.value++;
            

        }

        const decreaseValue = () => {
            if (store.state.addedCartDetails[0].quantity ===0) {
                store.state.addedCartDetails.splice(0, 1);
                count.value--;
            } else {
                count.value--;
                store.commit("decrementIndividualProduct");
                store.state.addedCartDetails[0].quantity ===0 ? 
                cartMixins.removeItemFromCart(store,  0)
                : null;

            }




        }
        return {
            count,
            show,
            addTocart,
            decreaseValue,
            incressQuanity
        };
    },
}
</script>

<style scoped>
form {
    width: 300px;
    margin: 0 auto;
    text-align: center;
    padding-top: 50px;
}

.value-button {
    display: inline-block;
    border: 1px solid #ddd;
    margin: 0px;
    width: 40px;
    height: 20px;
    text-align: center;
    vertical-align: middle;
    /* padding: 11px 0; */
    background: #eee;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.value-button:hover {
    cursor: pointer;
}

form #decrease {
    margin-right: -4px;
    border-radius: 8px 0 0 8px;
}

form #increase {
    margin-left: -4px;
    border-radius: 0 8px 8px 0;
}

form #input-wrap {
    margin: 0px;
    padding: 0px;
}

input#number {
    text-align: center;
    border: none;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    margin: 0px;
    width: 40px;
    height: 40px;
}

input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

.main {
    display: flex;
    justify-content: center;
    min-width: 1030px;
    min-height: 400px;
    margin-top: 24px;
    margin-bottom: 10%;
}

.add-cart {
    margin-top: 18px;
}

.card-wrapper {
    max-width: 1100px;
    margin: 0 auto;
}

img {
    width: 100%;
    display: block;
}

.img-display {
    overflow: hidden;
    height: 100%;
    width: 80%;
}

.img-showcase {
    display: flex;
    width: 100%;
    transition: all 0.5s ease;
}

.img-showcase img {
    min-width: 100%;
}

.img-select {
    display: flex;
}

.img-item {
    margin: 0.3rem;
}

.img-item:nth-child(1),
.img-item:nth-child(2),
.img-item:nth-child(3) {
    margin-right: 0;
}

.img-item:hover {
    opacity: 0.8;
}

.product-content {
    padding: 2rem 1rem;
    width: 50%;
}

.product-title {
    font-size: 2.1rem;
    text-transform: capitalize;
    font-weight: 700;
    position: relative;
    color: #12263a;
    margin: 1rem 0;
    text-align: left;
}

.product-title::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 4px;
    width: 80px;
    /* background: #12263a; */
}

.product-link {
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 400;
    font-size: 0.9rem;
    display: inline-block;
    margin-bottom: 0.5rem;
    background: #256eff;
    color: #fff;
    padding: 0 0.3rem;
    transition: all 0.5s ease;
}

.product-link:hover {
    opacity: 0.9;
}

.product-rating {
    color: #ffc107;
}

.product-rating span {
    font-weight: 600;
    color: #252525;
}

.product-price {
    margin: 1rem 0;
    font-size: 1rem;
    font-weight: 700;
}

.product-price span {
    font-weight: 400;
}

.last-price span {
    color: #f64749;
    text-decoration: line-through;
}

.last-price {
    text-align: left;
}

.new-price span {
    color: #256eff;
}

.product-detail h2 {
    text-transform: capitalize;
    color: #12263a;
    padding-bottom: 0.6rem;
    text-align: left;
    font-size: 20px;
}

.product-detail p {
    font-size: 0.9rem;
    padding: 0.3rem;
    opacity: 0.8;
    text-align: left;
}

.product-detail ul {
    margin: 1rem 0;
    font-size: 0.9rem;
}



.product-detail ul li span {
    font-weight: 400;
}

.purchase-info {
    margin: 1.5rem 0;
    text-align: left;
    display: flex;
}

.increase-decrease-btn {
    margin-top: 20px;

}

.add-cart {
    margin-left: 20px;
}

.purchase-info input,
.purchase-info .btn {
    border: 1.5px solid #ddd;
    border-radius: 25px;
    text-align: center;
    padding: 0.45rem 0.8rem;
    outline: 0;
    margin-right: 0.2rem;
    margin-bottom: 1rem;
}

.purchase-info input {
    width: 60px;
}

.purchase-info .btn {
    cursor: pointer;
    color: #fff;
}

.purchase-info .btn:first-of-type {
    background: #256eff;
}

.purchase-info .btn:last-of-type {
    background: linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%);
    ;
    ;
}

.purchase-info .btn:hover {
    opacity: 0.9;
}

.social-links {
    display: flex;
    align-items: center;
}

.social-links a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    color: #000;
    border: 1px solid #000;
    margin: 0 0.2rem;
    border-radius: 50%;
    text-decoration: none;
    font-size: 0.8rem;
    transition: all 0.5s ease;
}

.social-links a:hover {
    background: #000;
    border-color: transparent;
    color: #fff;
}

@media screen and (min-width: 992px) {
    .card {
        display: flex;
        justify-content: space-between;
        flex-direction: row;

    }

    .card-wrapper {
        height: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .product-imgs {
        display: flex;
        width: 50%;
        /* flex-direction: column; */
        justify-content: center;
    }

    .product-content {
        padding-top: 0;
    }

}
</style>