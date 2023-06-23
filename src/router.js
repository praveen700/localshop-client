import LandingScreen from "./Pages/LandingScreen/LandindScreen.vue";
import ElectronicsScreen from "./Pages/ElectronicsScreen/ElectronicsScreen.vue"
import FashonScreen from "./Pages/FashonScreen/FashonScreen.vue";
import TravelScreen from "./Pages/TravelScreen/TravelScreen.vue";
import GroceryScreen from "./Pages/Grocery/grocery.vue";
import ProductDetailsScreen from "./Pages/ProductDetailsScreen/PorductDetailsScreen.vue";
import CartScreen from "./Pages/Cart/CartScreen.vue";
import CustomerDetails from "./Pages/CustomerDetailsScreen/CustomerDetails.vue";
import LoginScreen from "./Pages/LoginScreen/LoginScreen.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        name:'LandingScreen',
        component: LandingScreen,
        path: '/'
    },
    {
        name:'ElectronicsScreen',
        component: ElectronicsScreen,
        path: '/electronics-product-details'
    },
    {
        name:'FashonScreen',
        component: FashonScreen,
        path: '/fashon-product-details'
    },
    {
        name:'TravelScreen',
        component: TravelScreen,
        path: '/travel-product-details'
    },
    {
        name:'GroceryScreen',
        component: GroceryScreen,
        path: '/grocery-product-details'
    },
    {
        name:'ProductDetailsScreen',
        component: ProductDetailsScreen,
        path: '/product-details'
    },
    {
        name:'CartScreen',
        component: CartScreen,
        path: '/cart'
    },
    {
        name:'CustomerDetails',
        component: CustomerDetails,
        path: '/customer-details'
    }, 
    {
        name: "LoginScreen",
        component: LoginScreen,
        path: "/login"
    }
    
    
]


const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;

