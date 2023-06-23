<template >
    <a-drawer class="select-address" title="Select Address" :placement="placement"
        :header-style="{ fontSize: '24px', fontWeight: 'bold' }" :footer-style="{ textAlign: 'right', borderTop: 'none' }"
        :closable="true" :visible="isDrawerOpened" @close="onClose">
        <div class="adress-block">
            <h6>Saved Address</h6>
            <div class="address-content">
                <div class="name-edit">
                    <div class="customer-name">
                        <p>{{ userDetails[0]?.name }} <i class="fas fa-home"></i></p>
                    </div>
                    <div class="edit">
                        <i class="fas fa-edit" @click="editAddress"></i>
                    </div>
                </div>
                <div class="address">
                    <p>{{ userDetails[0]?.shipping_address }}</p>
                </div>
                <a-button type="primary" @click="onClose">Delivery Here</a-button>
            </div>

        </div>
        <template #footer>
            <a-button type="primary" class="add-new" @click="openSideDrawer" :disabled="true">
                <template #icon><i class="fas fa-add"></i></template>
                Add New Address</a-button>
        </template>
    </a-drawer>
<SideDrawer v-bind:open="sideDrawer" @closeSideDrawer="closeSideDrawer">
    <div class="form">
        <a-input  placeholder="Name" :disabled="true"  class="side-input" v-model:value="formState.name" />
        <br />
        <a-input  placeholder="Email" :disabled="true" class="side-input mt-4" v-model:value="formState.email" />
        <br />
        <a-input  placeholder="Billing Address" class="side-input mt-4" v-model:value="formState.billing_address" />
        <br />
        <a-input  placeholder="Shipping Address" class="side-input mt-4"  v-model:value="formState.shipping_address" />
        <br />
        <a-input  placeholder="Receiver Number" class="side-input mt-4" v-model:value="formState.phone" />
        <div>
            <a-button type="primary"  class="save mt-4" @click="saveAddress(formState)"> Save Address</a-button>
        </div>
    </div>
</SideDrawer>
</template>
<script>
import { defineComponent, ref, reactive } from 'vue';
import { useStore } from 'vuex';
import SideDrawer from "../../../components/SideDrawer/SideDrawer.vue";
import CustomerAddressMixin from "../../../mixins/customerAddressMixin";

export default defineComponent({
    name: "AddressSideDrawer",
    mixins: [CustomerAddressMixin],
    components: {
        SideDrawer
    },
    computed: {
        isDrawerOpened() {
            return this.$store.getters.getDrawerStatus
        }
    },
    
    setup() {
        const userDetails = JSON.parse(localStorage.getItem('userDetails'));
        let initialState = {
            name: userDetails[0]?.name,
            confirmPassword: userDetails[0]?.confirmPassword,
            password: userDetails[0]?.password,
            email: userDetails[0]?.email,
            phone: userDetails[0]?.phone,
            shipping_address: userDetails[0]?.shipping_address,
            billing_address: userDetails[0]?.billing_address
        }
        const formState = reactive({ ...initialState });
        
        const store = useStore();
        const placement = ref('right');
        const sideDrawer = ref(false);
        const showDrawer = () => {
            store.commit("showSideDrawer")
        };
        const onClose = () => {
            store.commit("closeSideDrawer")
        };
        const openSideDrawer = () => {
            store.commit("commonOpenSideDrawer")
        }
        const editAddress = () => {
            store.commit("commonOpenSideDrawer")
        }
        const closeSideDrawer = () => {
            store.commit("commonCloseSideDrawer")
        }
        const saveAddress = async (value) => {
          await  CustomerAddressMixin.updateCustomerAddress(value, userDetails[0]?.customer_id)

        }
        return {
            placement,
            showDrawer,
            onClose,
            openSideDrawer,
            sideDrawer,
            closeSideDrawer,
            userDetails,
            editAddress,
            formState,
            saveAddress
        };
    },
});
</script>
<style scoped>
.select-address .ant-drawer-content-wrapper .ant-drawer-content .ant-drawer-wrapper-body .ant-drawer-header .ant-drawer-header-title .ant-drawer-title {
    font-size: 20px !important;
    font-weight: 600 !important;

}

.address-content {
    padding: 10px;
    border: 1px solid #0c5273;
    border-radius: 11px;
    height: auto;
}

.name-edit {
    display: flex;
    justify-content: space-between;

}
.side-input{
    height: 50px;
}
.save{
    background: #0078ad;
    color: #fff;
    border: 1px solid #e0e0e0;
    border-radius: 24px;
    height: 52px;
    font-size: 1rem;
}
.save:hover, .save:focus{
    background: #0078ad;
    color: #fff;
    border: 1px solid #e0e0e0;
}
.customer-name {
    font-family: helvetica, arial, sans-serif;
    font-weight: 600;
    text-transform: none;
    font-size: .875rem;
    letter-spacing: -.07px;
    line-height: 1.4285714286;
    font-weight: 700;
    color: #141414;
    padding: 0 42px 0 0;
    margin: 0 0 6px;

}

.address p {
    font-size: 14px;
    color: rgba(0, 0, 0, .65);
}

h6 {
    padding: 2px;
    color: #141414;
    font-weight: 700;
}

button {
    width: 100%;
    background: #0c5273;
    border-radius: 10px;
    border: #0c5273;
    height: 40px;
}

button:hover,
button:focus {
    background: #0c5273;
}

.add-new {
    background: white;
    color: #0c5273;
    border: 1px solid #e0e0e0;
    border-radius: 24px;
    height: 52px;
    font-size: 1rem;
}

.add-new:hover,
.add-new:focus {
    background: #fff;
    color: #0c5273;
    border: 1px solid #e0e0e0;
}

.fa-add {
    padding-right: 1rem;
}

.ant-drawer-footer {
    border-top: none;
}
.fa-edit{
    cursor: pointer;
}
</style>
  
  