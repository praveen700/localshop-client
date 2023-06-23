<template>
  <div class="payment-card">
    <div class="payments-header">Payment Details</div>
    <div class="mrp">
      <div class="mrp-item">MRP Total</div>
      <div class="mrp-price">₹{{ totalPrice }}</div>

    </div>
    <div class="del">
      <div class="delivery">Delivery Fee</div>
      <div class="delivery-free">FREE</div>
    </div>
    <div class="total">
      <div class="total-tag">Total <p>(including VAT)</p></div>
     
      <div class="total-amount">₹{{ totalPrice }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "FirstContent",
  computed: {
   
    totalPrice() {
      return this.$store.state.addedCartDetails.reduce(
        (acc, val) => acc + val.quantity * val.price,
        0
      );
    },

  },
}
</script>
<style scoped>
.delivery,
.total-tag {
  font-family: helvetica, arial, sans-serif;
  font-weight: 500;
  text-transform: none;
  font-size: 1rem;
  letter-spacing: -.08px;
  line-height: 1.5;
}

.delivery-free {
  color: #00b259;
  font-weight: 600;

}

.total-amount {
  font-family: helvetica, arial, sans-serif;
  font-weight: 700;
  text-transform: none;
  font-size: 1.125rem;
  letter-spacing: -.09px;
  line-height: 1.3333333333;
}

.payments-header {
  text-align: left;
  padding: 15px;
  font-family: helvetica, arial, sans-serif;
  font-weight: 900;
  border-bottom: 1px solid #e0e0e0;
}

.mrp {
  display: flex;
  padding: 15px;
  justify-content: space-between;
  line-height: 1px;
  border-bottom: 1px solid #e0e0e0;
}

.del {
  display: flex;
  padding: 15px;
  justify-content: space-between;
  border-bottom: 1px solid #e0e0e0;
}

.total {
  display: flex;
  padding: 15px;
  justify-content: space-between;
}

.mrp-item {
  font-family: helvetica, arial, sans-serif;
  font-weight: 500;
  text-transform: none;
  font-size: 1rem;
  letter-spacing: -.08px;
  line-height: 1.5;
}

.mrp-price {
  font-family: helvetica, arial, sans-serif;
  font-weight: 700;
  text-transform: none;
  font-size: 1.125rem;
  letter-spacing: -.09px;
  line-height: 1.3333333333;

}</style>