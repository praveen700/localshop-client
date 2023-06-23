<template>
  <div class="card" @click="$emit('navigateProductDetsails', componentsProps, $event)">
    <div class="imgBox">
      <img v-bind:src="componentsProps.image_url" alt="mouse corsair" class="mouse">
    </div>
    <div class="contentBox" >
      <h3>{{ componentsProps.name.substring(0, 10) }} INR:{{ componentsProps?.price }}</h3>
      <!-- <h2 class="price">{{ componentsProps?.price }} €</h2> -->
        <!-- eslint-disable-next-line vue/max-attributes-per-line -->
      <a class="buy" @click="$emit('addTocart', componentsProps, $event, count++)" v-if="travel === 'yes'">Book Now</a>
      <a class="buy" @click="$emit('addTocart', componentsProps, $event, count++)" v-else>Add To Cart +</a>
    </div>
    <!-- <div class="increase-decrease-btn" v-if="count > 0">
      <div class="value-button" id="decrease" 
      value="Decrease Value">-</div>
      <input type="number" id="number" :value="count" min="0" />
      <div class="value-button" id="increase" @click="addTocart" value="Increase Value">+</div>

    </div> -->
  </div>
</template>

<script>
// import { ref, } from 'vue';

export default {
  name: "ProductCard",
  props: ["componentsProps", "travel", "count", "index"],
  emits: ['addTocart', 'navigateProductDetsails', ],
 


}
</script>

<style scoped>
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
    -moz-user-select: none;
    user-select: none;
}
input#number{
    text-align: center;
    border: none;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    margin: 0px;
    width: 40px;
    height: 40px;
}
.card {
  position: relative;
  width: 320px;
  height: 480px;
  background: #fff;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
}
.increase-decrease-btn{
  margin-top: 20px;
}
.card::before {
  content: "";
  position: absolute;
  top: -50%;
  width: 100%;
  height: 100%;
  background: #fff;
  /* transform: skewY(345deg); */
  /* transition: 0.5s; */
}

.card:hover::before {
  /* top: -70%; */
  /* transform: skewY(390deg); */
}

.card::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  font-weight: 600;
  font-size: 6em;
  color: rgba(0, 0, 0, 0.1);
}

.card .imgBox {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  z-index: 1;
}

.imgBox img {
  object-fit: contain;
  mix-blend-mode: color-burn;
}

/*
.card .imgBox img {
    max-width: 100%;
    
    transition: .5s;
}

.card:hover .imgBox img {
    max-width: 50%;
      
}
*/
.card .contentBox {
  position: relative;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 2;
}

.card .contentBox h3 {
  font-size: 18px;
  color: #000;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.card .contentBox .price {
  font-size: 24px;
  color: white;
  font-weight: 700;
  letter-spacing: 1px;
}

.card .contentBox .buy {
  /* position: relative; */
  top: 100px;
  /* opacity: 0; */
  padding: 10px 30px;
  margin-top: 15px;
  color: #000000;
  text-decoration: none;
  background: linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%);
  border-radius: 30px;
  text-transform: uppercase;
  letter-spacing: 1px;
  /* transition: 0.5s; */
}

/* .card:hover .contentBox .buy {
  top: 0;
  opacity: 1;
} */

.mouse {
  height: 300px;
  width: auto;
}
</style>