<template>
    <Navbar v-bind:count="count" />
    <Banner v-bind:landingPageDetails="landingPageDetails" />
    <div class="home-items">
        <h1 class="electronics">Electronics</h1>
        <div class="electronic-layout">
            <div v-for="(electronics, index) in landingPageDetails['Electronics']" :key="index" class="electronics-item">
                <ProductCard v-bind:componentsProps="electronics" @addTocart="addTocart"
                    @navigateProductDetsails="goToOtherPage" travel="no" v-bind:count="quantity" v-bind:index="index" />
            </div>
        </div>
        <h1 class="fashion-h1">Fashion</h1>
        <div class="fashion">
            <div v-for="(fashion, index) in landingPageDetails['Fashion']" :key="index" class="fashion-item">
                <ProductCard v-bind:componentsProps="fashion" @addTocart="addTocart"
                    @navigateProductDetsails="goToFashonPage" travel="no" v-bind:count="quantity" v-bind:index="index" />
            </div>
        </div>
        <div class="travel">
            <h1 class="travel-h1">Travel</h1>
            <div class="travel-layout">
                <div v-for="(travel, index) in landingPageDetails['Travel']" :key="index" class="travel-item">
                    <ProductCard v-bind:componentsProps="travel" @addTocart="addTocart"
                        @navigateProductDetsails="goToTravelPage" travel="yes" v-bind:count="quantity" v-bind:index="index" />
                </div>
            </div>
        </div>
        <div class="grocery">
            <h1 class="grocery-h1">Grocery</h1>
            <div class="grocery-layout">
                <div v-for="(gorcery, index) in landingPageDetails['Grocery']" :key="index" class="travel-item">
                    <ProductCard v-bind:componentsProps="gorcery" @addTocart="addTocart"
                        @navigateProductDetsails="goToGroceryPage" travel="no" v-bind:count="quantity" v-bind:index="index" />
                </div>
            </div>
        </div>
    </div>
    <div>
        <CustomerDetails v-bind:visible="loginShow" @handleOk="handleOk" @handleCancel="handleCancel" />
    </div>
    <div class="footer-comp">
        <Footer />
    </div>
</template>

<script>
import { ref } from 'vue';
import Navbar from "../components/Navbar/Navbar.vue";
import Banner from "../components/Banner/Banner.vue"
import landingpagemixins from "@/mixins/landingpagemixins";
import Footer from "./Footer/Footer.vue";
import ProductCard from "./ProductCard/ProductCard.vue";
import CustomerDetails from "../components/CustomerDetails/CustomerDetails.vue";
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default {
    name: 'HomeComponent',

    provide() {
        return {
            myText: "thats"
        }
    },
    components: {
        Navbar,
        Banner,
        Footer,
        ProductCard,
        CustomerDetails
    },
    mixins: [landingpagemixins],
    setup() {
        const router = useRouter();
        let addedCartProduct = [];
        const quantity = ref(1);
        let show = ref(false);
        let loginShow = ref(false);
        const store = useStore();

       

        const addTocart = (props, event, count) => {
            event.stopPropagation();
            let getUserDetails = localStorage.getItem("userDetails");
            if (getUserDetails?.length) {
                store.state.addedCartDetails.push({...props, quantity:count})
                store.commit("increment")
                show.value = true
            } else {
                loginShow.value = false
                router.push("/login")

            }

        };

        const handleOk = (formState) => {
            loginShow.value = false;
            return formState

        }

        const handleCancel = () => {
            loginShow.value = false;
        }

        return {
            show,
            addTocart,
            addedCartProduct,
            loginShow,
            handleOk,
            handleCancel,
            quantity,
        };
    },
    methods: {
        goToOtherPage(props, event) {
            event.preventDefault()
            this.$router.push({ path: '/electronics-product-details', query: { categoryType: props?.productName, categoryId: props?.category_id } });
        },
        goToFashonPage(props, event) {
            event.preventDefault()
            this.$router.push({ path: '/fashon-product-details', query: { categoryType: props?.productName, categoryId: props?.category_id } });
        },
        goToTravelPage(props, event) {
            event.preventDefault()
            this.$router.push({ path: '/travel-product-details', query: { categoryType: props?.productName, categoryId: props?.category_id } });
        },
        goToGroceryPage(props, event) {
            event.preventDefault()
            this.$router.push({ path: '/grocery-product-details', query: { categoryType: props?.productName, categoryId: props?.category_id } });
        }

    },

}
</script>

<style scoped>
.home-items {
    margin: 50px;
}

.electronics {
    font-family: helvetica, arial, sans-serif;
    font-weight: 900 !important;
    font-size: 16px !important;
    letter-spacing: -0.48px !important;
    line-height: 1 !important;
    text-align: left;
    margin: 30px;
}


.electronics-item,
.fashion-item,
.fashion-h1,
.travel-item,
.travel-h1 {
    margin-left: 20px;
}

.fashion-h1,
.travel-h1,
.grocery-h1 {
    text-align: left;
    font-weight: 600;
    font-size: 18px;
    margin-top: 20px;

}

.fashion {
    margin-top: 30px;
}

.electronic-layout,
.fashion,
.travel-layout,
.grocery-layout {
    display: flex;

}

.home-items {
    margin-bottom: 10%;
}
</style>