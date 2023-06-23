<template>
    <div class="card  mt-3 card-1 text-center">
        <h4>Delivery Address</h4>
        <div class="card-2">
            <div class="p-3 card-child">
                <div class="d-flex flex-row">
                    <span class="circle">
                        <i class="fa fa-home" ></i>
                    </span>
                    <div class="d-flex flex-column ms-3">
                        <h6 class="fw-bold">{{ userDetails[0]?.name}}</h6>
                        <span>{{ userDetails[0]?.shipping_address }}</span>

                    </div>
                </div>
                <div class="edit">
                    <i class="fas fa-edit" @click="openDrawer"></i>
                </div>
            </div>
        </div>
    </div>
    <AddressSideDrawer />
</template>

<script>
import AddressSideDrawer from "./AddressSideDrawer.vue";

export default {
    name: "AddressCard",
    components: {
        AddressSideDrawer
    },
    
    methods:{
        openDrawer(){
            this.$store.commit("showSideDrawer")
        }

    },
    setup() {
        const userDetails = JSON.parse(localStorage.getItem('userDetails'));
        return{
            userDetails
        }

    }
    

}
</script>

<style scoped>
body {
    background-color: #eee;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(to right top, #2f62c6, #ba54b8, #ff5286, #ff8048, #ebbc12);
}

.card-1 {
    /* width:400px; */
    border-radius: 18px;
    border: none;
}

.card-2 {
    border-radius: 20px;
}


.card-child {
    height: 140px;
    border: 1px solid #e0e0e0;
    border-radius: 24px;
    display: flex;
    justify-content: space-between;

}
h4{
    font-weight: bold;
    text-align: left;
}
.fw-bold{
    text-align: left;
    padding-left: 1rem;
}

.circle {

    background-color: #ebdffb;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    display: flex;
    color: #9553ea;
    justify-content: center;
    align-items: center;
    font-size: 20px;

}


.circle-2 {

    background-color: #fbebdf;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    display: flex;
    color: #ea9253;
    justify-content: center;
    align-items: center;
    font-size: 20px;

}
.fa-edit{
    cursor: pointer;
}


.circle-3 {

    background-color: blue;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    display: flex;
    color: #fff;
    justify-content: center;
    align-items: center;
    font-size: 20px;

}
h6{
    font-weight: 600;
}
span{
    color: rgba(0,0,0,.65);
    text-align: left;
}
</style>