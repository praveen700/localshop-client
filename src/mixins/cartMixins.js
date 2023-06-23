

export default {
   
   removeItemFromCart(store, index){
       store.commit("decrement");
       store.state.addedCartDetails.splice(index, 1);
       localStorage.removeItem("vuex");
       localStorage.removeItem("_secure__ls__metadata");
   },

   placeOrder(){
    // console.log("placeOrder")

   }
    
}