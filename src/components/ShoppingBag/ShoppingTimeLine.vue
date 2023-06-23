  <template>
    <div class="shpooing-timeline">
      <a-steps :current="timelineStepsCounter">
        <a-step v-for="item in steps" :key="item.title" :title="item.title" />
      </a-steps>
      <div class="steps-content">
        <component :is="steps[timelineStepsCounter].content" />
      </div>
      <div class="steps-action">
        <a-button v-if="timelineStepsCounter < steps.length - 1" type="primary" @click="next(steps[timelineStepsCounter].buttonText, totalPrice)" class="steps-button">
         {{ steps[timelineStepsCounter].buttonText}}
        </a-button>
        <a-button
          v-if="timelineStepsCounter == steps.length - 1"
          type="primary"
          @click="$message.success('Processing complete!')"
          class="done"
        >
          Done
        </a-button>
        <div class="prev">
          <a-button v-if="timelineStepsCounter > 0"  @click="prev">
            Previous
          </a-button>

        </div>
      </div>
    </div>
  </template>
  
<script>
 import FirstContent from "@/components/FirstContent.vue";
 import LastContent from "@/components/LastContent.vue";
 import razorPaymanet from "../../mixins/paymentMixins";
// import SecondContent from "@/components/SecondContent.vue";
// import { useStore } from 'vuex';


export default {
    name: "ShoppingTimeline",
   
    data() {
    return {
      current: 0,
      steps: [
        {
          title: "My Cart",
          content: FirstContent,
          buttonText: "Place Order"
        },
        {
          title: "Order Review",
          content: FirstContent,
          buttonText: "Make Payment"
        },
        {
          title: "Payment",
          content: LastContent,
          buttonText: ""
        },
      ],
    };
  },
  // props:["totalAmount"],
  emits: ["makeOrder"],
  mixins:[razorPaymanet],
  
  computed: {
    timelineStepsCounter(){
      return this.$store.getters.timelineCounterSteps
    },
    totalPrice() {
      return this.$store.state.addedCartDetails.reduce(
        (acc, val) => acc + val.quantity * val.price,
        0
      );
    },
  },
  methods: {
    next(text, totalPrice) {
      if(text === "Make Payment"){
        razorPaymanet.makePayment(totalPrice)
      }else{
        this.$store.commit("timeLineCounter")
      }
      

    },
    prev() {
      this.$store.commit("timeLineDecrementCounter")
    },

    
  },
    
}
</script>

<style scoped>
.shpooing-timeline{
  width: 80%;
}
.steps-content {
  margin-top: 16px;
  border: 1px solid #e0e0e0;
  border-radius: 24px;
  background-color: #fafafa;
  min-height: 200px;
  /* text-align: center;
  padding-top: 80px; */
}
.steps-action .steps-button{
  width: 100%;
  border-radius: 10px;
}
.steps-action {
  margin-top: 24px;
}
.prev{

  margin-top: 5px;
  
}
.prev button{
  width: 100%;
  border-radius: 10px;
  
}
.steps-action button{
  width: 100%;
  border-radius: 10px;
  height: 40px;
}
/* background: #0c5273; */
</style>