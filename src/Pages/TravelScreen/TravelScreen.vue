<template>
    <Navbar v-bind:count="count" />
    <div class="bread-crumb text-left ml-2 mt-2">
        <Breadcrumb v-bind:breadCrumbPath="breadCrumbPath" />
    </div>
    <main class="main">
        <div class="left-block col-4">
            <CategoryComponent 
            @radioChange="radioChange" 
            @priceRangeSlider="priceRangeSlider" />
        </div>
        <section class="col-8 right-product">
            <div class="right" v-for="ele in productDetails" :key="ele.product_id">
                <CardType2 v-bind:componentsProps="ele" @navigateClick="goToOtherPage" />
            </div>
        </section>
    </main>
    <div class="footer-comp">
        <Footer />
    </div>
</template>

<script>
import { ref,  } from 'vue';
import Navbar from "../../components/Navbar/Navbar.vue";
import CategoryComponent from "../../components/Category/Category.vue"
import CardType2 from "../../components/CardType2/CardType2.vue"
import electronicsMixin from "@/mixins/productScreenMixins";
import  Breadcrumb  from '../../components/BreadCrumb/BreadCrumb.vue';
import Footer from "../../components/Footer/Footer.vue"
export default {
    name: "TravelScreen",
    components: {
    Navbar,
    CategoryComponent,
    CardType2,
    Breadcrumb,
    Footer
},
data(){
    return {
        type: "Travel",
        breadCrumbPath: {
            firstPath: "Home",
            secondPath: "Travel"
            
        },
    }
},
    setup() {
        const count = ref(0);
       
        return {
            count,
        };
    },
    mixins: [electronicsMixin],
  
}
</script>

<style scoped>
.left-block {
    flex-basis: 20%;
    max-width: 25%;
}

.main {
    display: flex;
    justify-content: center;
    min-width: 1030px;
    min-height: 400px;
    margin-top: 24px;
    margin-bottom: 10%;
}

.right-product {
    display: flex;
    flex-wrap: wrap;
}
</style>

