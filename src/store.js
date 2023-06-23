import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";
import SecureLS from "secure-ls";
const ls = new SecureLS({ isCompression: false });
export const store = createStore({
  state: {
    register: [],
    addedCartDetails: [],
    cartCount: {},
    count: 0,
    totalAmount: 0,
    productCartCount: 0,
    timelineCounter: 0,
    showDrawer: false,
    componentSideDrawer: false

  },
  plugins: [
    createPersistedState({
      storage: {
        getItem: (key) => ls.get(key),
        setItem: (key, value) => ls.set(key, value),
        removeItem: (key) => ls.remove(key)
      }
    })
  ],
  getters: {
    getValue(state) {
      return state.addedCartDetails;
    },
    getQuantityValue(state) {
      return state.addedCartDetails.map(ele => ele.quantity);
    },

    getCountValue(state) {
      return state.count;
    },
    getCartCount(state) {
      return state.cartCount;
    },
    getTotalMount(state) {
      state.totalAmount = state.addedCartDetails.reduce(function (prev, cur) {
        return prev + cur.price;
      }, 0);
      return state.totalAmount
    },
    productCounts(state) {
      return state.productCartCount;
    },
    timelineCounterSteps(state) {
      return state.timelineCounter
    },
    getDrawerStatus(state) {
      return state.showDrawer
    },
    getCommonComponentSideDrawer(state) {
      return state.componentSideDrawer
    }
  },
  mutations: {
    increment: (state,) => state.count++,
    decrement: (state) => state.count--,
    productCartDecrement: (state) => state.productCartCount--,
    productCartIncrement: (state) => state.productCartCount++,
    cartIncrement: (state, index) => {
      state.addedCartDetails[index].quantity++
    },
    cartDecrement: (state, index) => {
      state.addedCartDetails[index].quantity--
    },
    incrementIndividualProduct: (state) => {
      state.addedCartDetails[0].quantity++
    },
    decrementIndividualProduct: (state) => {
      state.addedCartDetails[0].quantity--
    },

    timeLineCounter(state) {
      state.timelineCounter++;
    },
    timeLineDecrementCounter(state) {
      state.timelineCounter--;
    },
    showSideDrawer: (state) => {
      state.showDrawer = true
    },
    closeSideDrawer: (state) => {
      state.showDrawer = false;
    },

    commonOpenSideDrawer: (state) => {
      state.componentSideDrawer = true
    },
    commonCloseSideDrawer: (state) => {
      state.componentSideDrawer = false
    },


  }
})