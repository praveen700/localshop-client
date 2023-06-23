<template>
    <Carousel :autoplay="2000" :wrap-around="true">
      <Slide v-for="(banners, index) in landingPageDetails?.bannerImages" :key="index">
        <img v-bind:src="banners" />
      </Slide>
  
      <template #addons>
        <Pagination />
      </template>
    </Carousel>
    <!-- {{ JSON.stringify(landingPageDetails.bannerImages) }} -->
  </template>
  
  <script>
  import { defineComponent } from 'vue'
  import { Carousel, Pagination, Slide } from 'vue3-carousel'
  
  import 'vue3-carousel/dist/carousel.css'
  
  export default defineComponent({
    name: 'Banner-Component',
    inject: ["myText"],
    components: {
      Carousel,
      Slide,
      Pagination,
    },
    props: ["landingPageDetails"],
    
  
  })
  </script>
  