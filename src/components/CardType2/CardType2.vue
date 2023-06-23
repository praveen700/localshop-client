<template>
    <div class="product-card" @click="$emit('navigateClick',$event, componentsProps)">
        <div class="product-image mt-3">
            <img v-bind:src="componentsProps?.image_url" alt="Product Image">
        </div>
        <div class="product-info">
            <h2 class="product-title">{{componentsProps?.name.substring(0, 20)}}</h2>
            <p class="product-description">{{componentsProps?.description.substring(0, 20)}}</p>
            <div class="product-price">${{componentsProps?.price}}</div>
            <!-- <button class="product-button">Add to Cart</button> -->
        </div>
    </div>
</template>

<script>
export default {
    name:"CardType2",
    props: ['componentsProps'],
    emits: ["navigateClick",],

}
</script>

<style scoped>
.product-card {
  display: flex;
  flex-direction: column;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
  margin: 10px;
}

.product-image {
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.product-image img {
  max-width: 100%;
  max-height: 100%;
}

.product-info {
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.product-title {
  font-size: 1.5em;
  margin: 0;
}

.product-description {
  margin-top: 10px;
}

.product-price {
  font-weight: bold;
  margin-top: 10px;
  font-size: 20px;
}

.product-button {
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  margin-top: 10px;
  cursor: pointer;
}

.product-button:hover {
  background-color: #0062cc;
}

</style>