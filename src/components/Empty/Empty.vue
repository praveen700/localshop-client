<template>
    <a-empty
      image="https://cdn-icons-png.flaticon.com/128/9285/9285664.png"
      :image-style="{
        height: '60px',
      }"
    >
      <template #description>
        <span>
          Your Cart Is Empty 
          
        </span>
      </template>
      <a-button type="primary" @click="navigate">Continue Shopping</a-button>
    </a-empty>
  </template>
<script>
export default {
    name: "EmptyCartBox",
    methods: {
        navigate(){
            this.$router.push({ path: '/',  });
        }
    }
}
</script>