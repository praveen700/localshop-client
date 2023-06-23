<template>
    <a-breadcrumb > 
      <a-breadcrumb-item><a href="/">{{breadCrumbPath?.firstPath}}</a></a-breadcrumb-item>
      <a-breadcrumb-item>{{breadCrumbPath?.secondPath}}</a-breadcrumb-item>
      <a-breadcrumb-item v-if="breadCrumbPath?.thirdPath">{{breadCrumbPath?.thirdPath}}</a-breadcrumb-item>
    </a-breadcrumb>
  </template>
<script>
    export default {
        name: "BreadCrumb",
        props:['breadCrumbPath']
    }
</script>

<style scoped>

</style>