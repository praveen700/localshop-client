<template>
    <Navbar v-bind:count="count !== 0" />
    <main class="main">
        <div class="shopping col-12" v-if="getCartCountDetails > 0">
            <div class="shopping-bag col-5">
                <div class="address-card" v-if="timelineStepsCounter ===1">
                    <AddressCard />
                </div>
                <div class="order-type" v-if="timelineStepsCounter === 0">
                    <h4>My Cart</h4>
                </div>
                <div class="order-type mt-4" v-else>
                    <h4>Order Review</h4>
                </div>
                <div v-for="(bags, index) in getCartDetails" :key="index">
                    <ShoppingBag v-bind:componentsProps="bags" @decreaseValue="decreaseQuantity" v-bind:index="index"
                        @addTocart="incressQuanity" />
                </div>
            </div>
            <div class="timeline col-4">
                <ShoppingTimeline @makeOrder="cartMixins?.placeOrder" />
            </div>
        </div>
        <div v-else>
            <EmptyCartBox />
        </div>
    </main>
</template>

<script>
import Navbar from "../../components/Navbar/Navbar.vue";
import ShoppingBag from "../../components/ShoppingBag/ShoppingBag.vue";
import ShoppingTimeline from "../../components/ShoppingBag/ShoppingTimeLine.vue";
import { ref, } from 'vue';
import { useStore } from 'vuex';
import EmptyCartBox from "../../components/Empty/Empty.vue";
import cartMixins from "../../mixins/cartMixins.js";
import AddressCard from "./AddressCard/AddressCard.vue";

export default {
    name: "CartScreen",
    components: {
        Navbar,
        ShoppingBag,
        ShoppingTimeline,
        EmptyCartBox,
        AddressCard

    },
    mixins: [cartMixins],
    computed: {
        getCartDetails() {
            return this.$store.getters.getValue
        },
        getCartCountDetails() {
            return this.$store.getters.getCountValue
        },
        timelineStepsCounter() {
            return this.$store.getters.timelineCounterSteps
        }
    },

    setup() {
        const count = ref(0);
        const show = ref(false);
        const store = useStore();
        const incressQuanity = (id, index) => {
            count.value++;
            show.value = true
            store.commit("cartIncrement", index);
        };
        const removetheItemFromCart = (arr, id) => {
            const index = arr.findIndex(item => item.product_id === id);
            if (index !== -1) {
                arr[index].quantity--;
            }
            return arr;
        }
        const decreaseQuantity = (index) => {
            if (store.state.addedCartDetails[index].quantity < 1) {
                store.state.addedCartDetails.splice(index, 1);
                store.commit("decrement")
            } else {
                store.commit("cartDecrement", index);
                store.state.addedCartDetails[index].quantity === 0 ?
                    cartMixins.removeItemFromCart(store, index)
                    : null;

            }

        }
        return {
            count,
            show,
            incressQuanity,
            decreaseQuantity,
            removetheItemFromCart,
        };
    },

}
</script>

<style scoped>
.main {
    display: flex;
    justify-content: center;
    min-width: 1030px;
    min-height: 400px;
    margin-top: 24px;
    margin-bottom: 10%;

}

h4 {
    text-align: left;
    font-weight: bold;
}

.shopping {
    display: contents;
}

.timeline {
    margin-top: 16px;
}

/* .shopping-bag{
    margin: 0 auto;
    margin-left: 10px;
    margin-right: 10px;
} */
</style>