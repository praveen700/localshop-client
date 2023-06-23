<template>
  <header class="site-header">
    <div class="site-identity">
      <h1><a href="#">Local Shop</a></h1>
      <img src="../../assets/local-shop.png" alt="loading" class="logo" />
    </div>
    <nav class="site-navigation">
      <ul class="nav">

        <li><a href="/">Home</a></li>
        <li>
          <router-link
            :to="{ path: '/electronics-product-details', query: { categoryType: 'Electronics', categoryId: 1 } }">
            Electronics
          </router-link>
        </li>
        <li>
          <router-link :to="{ path: '/fashon-product-details', query: { categoryType: 'Fashion', categoryId: 4 } }">
            Fashion
          </router-link>
        </li>
        <li>
          <router-link :to="{ path: '/travel-product-details', query: { categoryType: 'Travel', categoryId: 3 } }">
            Travel
          </router-link>
        </li>
        <li>
          <router-link :to="{ path: '/grocery-product-details', query: { categoryType: 'Grocery', categoryId: 2 } }">
            Grocery
          </router-link>
        </li>
        <li @click="navogateToCartScreen">
          <a-badge :count="countValue" status="orange">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="22" viewBox="0 0 1024 1024" class="cart-icon">
              <path fill="currentColor"
                d="M922.9 701.9H327.4l29.9-60.9l496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 0 0-26.6-12.5l-632-2.1l-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 1 0 0 70.6h125.9L246 312.8l58.1 281.3l-74.8 122.1a34.96 34.96 0 0 0-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 0 0-35.4-35.2zM305.7 253l575.8 1.9l-56.4 315.8l-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6c0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6c0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6z" />
            </svg>
          </a-badge>
        </li>
        <li v-if="loginDetails" class="user-ico" :style="{ fontWeight: 'bold' }">
          <user-outlined /> 
          <p class="user-name" >{{ loginDetails }}</p>
        </li>
        <li v-else>
          <router-link :to="{ path: '/login' }">
            <svg class="login" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M14 4L17.5 4C20.5577 4 20.5 8 20.5 12C20.5 16 20.5577 20 17.5 20H14M15 12L3 12M15 12L11 16M15 12L11 8"
                  stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              </g>
            </svg> Login
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

  
<script>
import { defineComponent, ref, onMounted } from 'vue';
import {
  UserOutlined
} from '@ant-design/icons-vue';

export default defineComponent({
  name: "NavbarComponent",
  // props: ["count"],
 components: {
  UserOutlined
 },
  methods: {
    navogateToCartScreen() {
      this.$router.push("/cart")
    }
  },
  computed:{
    countValue(){
          return  this.$store.getters.getCountValue
        }
    },

  setup() {
    let loginDetails = ref("");
    onMounted(() => {
      let details = JSON.parse(localStorage.getItem("userDetails"))
      loginDetails.value = details && details[0]?.name
    })

    return {
      loginDetails,
    }

  }
});
</script>
  
<style scoped>
.cart-icon {
  cursor: pointer;
}
ul .user-ico{
  display: flex;
  cursor: pointer;
}
ul .user-ico p {
  text-decoration: none;
    color: #000;
    font-family: helvetica, arial, sans-serif;
}
.user-ico span{
  margin-right: 10px;
    margin-top: 4px;
}
a {
  text-decoration: none;
  color: #000;
  font-size: 18px;
  font-family: "JioType", helvetica, arial, sans-serif;
}

a:hover {
  color: rgb(179, 179, 179);
}

.site-header {
  border-bottom: 1px solid #ccc;
  padding: 0.5em 1em;
  display: flex;
  justify-content: space-between;
}

.site-identity h1 {
  font-size: 1.5em;
  margin: 0.6em 0;
  display: inline-block;
}

.site-identity .logo {
  width: 60px;
  margin-left: 8px;
  border-radius: 34px;
  object-fit: contain;
}

.site-navigation ul,
.site-navigation li {
  margin: 0;
  padding: 0;
}

.site-navigation li {
  /* display: inline-block; */
  margin: 1.4em 1em 1em 1em;
}

.login {
  width: 28px;
}
</style>
  