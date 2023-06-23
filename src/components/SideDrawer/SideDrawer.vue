<template>
    <a-drawer
      v-model:visible="getSideDrawer"
      class="custom-class"
      title="Edit Address"
      placement="right"
      @close="$emit('closeSideDrawer')"
      
    >
      <slot></slot>
    </a-drawer>
  </template>
  <script>
  import { defineComponent } from 'vue';

  export default defineComponent({
    name:"SideDrawer",
    emits: ["closeSideDrawer"],
    computed:{
        getSideDrawer(){
            return this.$store.getters.getCommonComponentSideDrawer;
        }
    },

   
  });
  </script>
  
  