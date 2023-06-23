<template>
    <div id="components-popover-demo-placement">
        <div :style="{ marginLeft: `${buttonWidth}px`, clear: 'both', whiteSpace: 'nowrap' }">
            <a-popover placement="bottom">
                <template #content>
                    <p>Content</p>
                    <p>Content</p>
                </template>
                <template #title>
                    <span>Title</span>
                </template>
                <a-button>Bottom</a-button>
            </a-popover>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
    setup() {
        return {
            buttonWidth: ref<number>(70),
        };
    },
});
</script>
<style>
#components-popover-demo-placement .ant-btn {
    width: 70px;
    text-align: center;
    padding: 0;
    margin-right: 8px;
    margin-bottom: 8px;
}
</style>
  