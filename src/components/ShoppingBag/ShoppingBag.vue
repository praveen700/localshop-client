<template>
  <div class="courses-container" v-if="componentsProps.quantity !==0">
    <div class="course">
      <div class="title">
        <h6>{{ componentsProps.productName }}</h6>
        <img v-bind:src="componentsProps.image_url" />
      </div>
      <div class="details">
        <p>{{ componentsProps.name }}</p>
        <b><span id="row_itmdiscprice_590360946" class="j-text price j-text-body-s-bold ng-star-inserted">₹{{
          componentsProps.price * componentsProps.quantity }}<!----></span></b>
      </div>

      <div class="course-info">
        <div class="progress-container">
          <div class="progress-"></div>
          <p class="progress-text">
            ₹{{ componentsProps.price * componentsProps.quantity }}
          </p>
          <div class="increase-decrease-btn" >
            <div class="value-button" id="decrease" @click="$emit('decreaseValue', index)" value="Decrease Value">-</div>
            <input type="number" id="number" :value="componentsProps.quantity" min="0" />
            <div class="value-button" id="increase" @click="$emit('addTocart',componentsProps.product_id, index, componentsProps.quantity)" value="Increase Value">+</div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: "ShoppingBag",
  props: ["componentsProps", "index", ],
  emits: ['decreaseValue', "addTocart" ],
  
  computed: {
    countValue() {
      return this.$store.getters.getCartCount
    }
  },

}
</script>

<style scoped>

.increment {
  display: flex;
}
.increase-decrease-btn{
  display: flex;
  margin-right: 15px;
}

h6 {
  opacity: 0.6;
  margin: 0;
  letter-spacing: 1px;
  text-transform: uppercase;

}

.course {
  background-color: #fff;
  border-radius: 24px;
  display: flex;
  max-width: 100%;
  /* margin: 20px; */
  overflow: hidden;
  /* width: 688px; */
  border: 1px solid #e0e0e0;
  height: 200px;
  /* margin-top: 30px; */
}

.course h6 {
  opacity: 0.6;
  margin: 0;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 600;
  margin-left: 20px;
}

.course h2 {
  letter-spacing: 1px;
  margin: 10px 0;
}

.title {
  margin-top: 20px;
  margin-left: 10px;
}

.details {
  position: relative;
  width: 100%;
  margin-top: 50px;
  text-align: left;
}


.progress-text {
  font-size: 16px;
  margin-top: 10px;
  font-weight: 800;
  margin-right: 15px;
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
  -moz-user-select: none;
  user-select: none;
}

input#number {
  text-align: center;
  border: none;
  /* border-top: 1px solid #ddd; */
  /* border-bottom: 1px solid #ddd; */
  margin: 0px;
  width: 40px;
  height: 26px;
}

.btn {
  /* background-color: #2A265F; */
  border: 0;
  border-radius: 50px;
  /* box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2); */
  color: #fff;
  font-size: 16px;
  padding: 12px 25px;
  position: absolute;
  bottom: 202px;
  right: 190px;
  letter-spacing: 1px;
}

img {
  height: 100px;
}

@media screen and (max-width: 480px) {

  .social-panel-container.visible {
    transform: translateX(0px);
  }

  .floating-btn {
    right: 10px;
  }
}
</style>

<!-- aspect-ratio: 1;
    -o-object-fit: cover;
    object-fit: cover;
   
    object-position: center;
    width: 100%;
    height: 100%; -->