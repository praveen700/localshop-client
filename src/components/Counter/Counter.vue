<template>
    <div class="purchase-info">
        <div class="increase-decrease-btn" 
        >
            <div class="value-button" id="decrease" value="Decrease Value">-</div>
            <input type="number" id="number"  min="0" />
            <div class="value-button" id="increase"  value="Increase Value">+</div>

        </div>
    </div>
</template>

<script>
export default {
    name:"CounterComponent"

}
</script>

<style scoped>
.increase-decrease-btn{
    margin-top: 20px;
    
}
.purchase-info {
    margin: 1.5rem 0;
    text-align: left;
    display: flex;
}

.value-button {
  display: inline-block;
  border: 1px solid #ddd;
  margin: 0px;
  width: 40px;
  height: 20px;
  text-align: center;
  vertical-align: middle;
  /* padding: 11px 0; */
  background: #eee;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.value-button:hover {
  cursor: pointer;
}

.increase-decrease-btn{
    margin-top: 20px;
    
}

.add-cart{
    margin-left: 20px;
}
.purchase-info input,
.purchase-info .btn {
    border: 1.5px solid #ddd;
    border-radius: 25px;
    text-align: center;
    padding: 0.45rem 0.8rem;
    outline: 0;
    margin-right: 0.2rem;
    margin-bottom: 1rem;
}
</style>