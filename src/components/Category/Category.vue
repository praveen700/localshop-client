<template>
    <section class="category">
        <div class="category-title jm-heading-xs">
            Sort
        </div>
        <div class="filter mt-3">
            <a-radio-group v-model:value="value" name="radioGroup">
                <a-radio value="ASC" @click="$emit('radioChange', $event)">Low to High</a-radio>
                <a-radio value="DESC" @click="$emit('radioChange', $event)">High to Low</a-radio>
            </a-radio-group>
        </div>
        <a-divider type="horizontal" />
        <h2>Filter</h2>
        <div class="price mt-3">
            <div class="category-title jm-heading-xs">
                Price
            </div>
            <div class="price-slider">
                <a-slider 
                v-model:value="sliderValue" range  @afterChange="$emit('priceRangeSlider', $event)" :min="min" :max="max"
                />
                <!-- <input type="range" class="range-slider" v-model="sliderValue" 
                @input="$emit('priceRangeSlider', $event)" :min="min" :max="max"> -->
            </div>
            <div class="price-show">
                <p>{{sliderValue[0]}}</p>
                <p>{{ sliderValue[1] }}</p>
            </div>
        </div>
        <a-divider type="horizontal" />
        <div class="price mt-3">
            <div class="category-title jm-heading-xs">
                Brand
            </div>
            <div class="price-slider">

            </div>

        </div>
    </section>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
    name: "CatgeoryComponent",
    setup() {
        const activeKey = ref([]);
        const value = ref('');
        const sliderValue = ref([0, 50000]);
        const min = ref(0);
        const max = ref(50000);
        const text = `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`;
        return {
            activeKey,
            text,
            value,
            sliderValue,
            min,
            max
        };
    },
    emits: ["radioChange", "priceRangeSlider", "debounce"],
  
});
</script>

<style scoped>
.filter{
    display: flex;
}
.category {
    padding: 16px;
    border-radius: 24px;
    border: 1px solid #e0e0e0;
    height: auto;
}
.price-show{
    display: flex;
    justify-content: space-between;
}
.jm-heading-xs {
    font-family: "JioType", helvetica, arial, sans-serif;
    font-weight: 900 !important;
    font-size: 18px !important;
    letter-spacing: -0.72px !important;
    line-height: 1 !important;
    text-align: left;
}

.cat-accordion {
    margin-top: 8px;
    border-top: none;
    border-left: none;
    border-right: none;
}

h2 {
    text-align: left;
    font-family: helvetica, arial, sans-serif;
    font-weight: 900 !important;
    font-size: 24px !important;
    letter-spacing: -0.72px !important;
    line-height: 1 !important;
}
.range-slider{
    width: 100%;
}
</style>