<template>
    <a-card hoverable style="width: 300px">
        <template #cover>
            <img alt="example" v-bind:src="componentsProps.image_url" />
        </template>
        <template #actions>
            <setting-outlined key="add" />
            <edit-outlined key="" />
            <ellipsis-outlined key="ellipsis" />
        </template>
        <a-card-meta class="description" v-bind:title="componentsProps.name" v-bind:description="componentsProps.description.substring(0,35)" />
    </a-card>
    <div class="empty"></div>
</template>
<script>
import { SettingOutlined, EditOutlined, EllipsisOutlined } from '@ant-design/icons-vue';
import { defineComponent } from 'vue';
export default defineComponent({
    name: "CardComponent",
    components: {
        SettingOutlined,
        EditOutlined,
        EllipsisOutlined,
    },
    props: ["componentsProps"],
  
});
</script>
<style scoped>
.description{
    text-align: left;
}
.empty{
    margin-bottom: 20px;
}
</style>
  
  
  
  
  
