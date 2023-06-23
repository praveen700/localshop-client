/* eslint-disable */ 
<template>
    <div>
        <a-modal v-model:visible="visible" title="Register Here" :closable="false" @ok="$emit('handleOk', formState)"
            :footer="null" :maskClosable="false">
            <a-form name="basic" :model="formState" :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }" autocomplete="off"
                @finish="onFinish" @finishFailed="onFinishFailed">
                <a-form-item label="Name" name="name" :rules="[{ required: true, message: 'Please input your Name!' }]">
                    <a-input v-model:value="formState.name" placeholder="Name" type="text" class="name" />
                </a-form-item>

                <a-form-item label="Email" name="email" :rules="[{ required: true, message: 'Please input your Email!' }]">
                    <a-input v-model:value="formState.email" placeholder="Email" type="email" class="email" />
                </a-form-item>
                <a-form-item label="Mobile" name="phone"
                    :rules="[{ required: true, message: 'Please input your Mobile!' }]">
                    <a-input v-model:value="formState.phone" placeholder="Mobile" type="text" class="mobile" :maxlength=10
                        @keypress="allowNumbersOnly($event)" />
                </a-form-item>
                <a-form-item label="Password" name="password"
                    :rules="[{ required: true, message: 'Please input your Password!' }]">
                    <a-input v-model:value="formState.password" placeholder="Password" type="password" class="password" />
                </a-form-item>
                <a-form-item label="Confirm Password" name="confirmPassword"
                    :rules="[{ required: true, message: 'Please input your Confirm Password!' }]">
                    <a-input v-model:value="formState.confirmPassword" placeholder="Confirm Password" type="password"
                        class="confirmPassword" />
                </a-form-item>
                <a-form-item label="Shipping Address" name="shipping_address"
                    :rules="[{ required: true, message: 'Please input your Shipping Address!' }]">
                    <a-input v-model:value="formState.shipping_address" placeholder="Shipping Address" type="text"
                        class="address" />
                </a-form-item>
                <a-form-item label="Billing Address" name="billing_address"
                    :rules="[{ required: true, message: 'Please input your Billing Address!' }]">
                    <a-input v-model:value="formState.billing_address" placeholder="Billing Address" type="text"
                        class="address" />
                </a-form-item>
                <div class="btns">
                    <div>
                        <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
                            <a-button style="margin-left: 10px" @click="formCancel">Cancel</a-button>
                        </a-form-item>
                    </div>
                    <div>
                        <a-form-item :wrapper-col="{ offset: 2, span: 16 }">
                            <a-button type="error" html-type="submit">Submit</a-button>
                        </a-form-item>
                    </div>

                </div>
            </a-form>
        </a-modal>
    </div>
</template>
<script>
import { defineComponent, reactive } from 'vue';

export default defineComponent({
    name: "CustomerDetails",
    props: ["visible", "handleOk", "handleCancel", "initialState"],
    methods: {
        allowNumbersOnly(e) {
            var code = (e.which) ? e.which : e.keyCode;
            if (code > 31 && (code < 48 || code > 57)) {
                e.preventDefault();
            }
        }
    },
    setup(props, ctx) {
        let initialState = {
            name: '',
            confirmPassword: "",
            password: "",
            email: '',
            phone: null,
            shipping_address: "",
            billing_address: ""
        }
        const formState = reactive({ ...initialState });
       
        const onFinish = value => {
            ctx.emit('handleOk', value)
            if (formState.password !== formState.confirmPassword) {
                return;
            }else{
                Object.assign(formState, initialState);
            }
        };
      
        const formCancel = () => {
            Object.assign(formState, initialState);
            ctx.emit('handleCancel')
        }

        const onFinishFailed = (errorInfo) => {
            return errorInfo;
        };
        return {
            formState,
            onFinish,
            onFinishFailed,
            formCancel,
            

        };
    },
});
</script>
<style scoped>
.cust-details {
    /* padding: 10px; */
}

.address,
.name,
.email,
.password,
.confirmPassword,
.mobile {
    margin-top: 10px;
    height: 50px;
}

.btns {
    display: flex;
    justify-content: space-between;
}
</style>
  
  <!-- const phoneNumberPattern = /^\d{10}$/;
 -->