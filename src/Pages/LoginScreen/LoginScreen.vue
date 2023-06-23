<template>
    <Navbar />
    <div id="card">
        <div id="card-content">
            <div id="card-title">
                <h2>LOCAL SHOP</h2>
                <div class="underline-title"></div>
            </div>
            <form class="form">
                <label for="user-email" style="padding-top:13px">
                    &nbsp;Mobile
                </label>
                <a-input id="user-email" v-model:value="initialState.phone" placeholder="Mobile" type="text"
                    class="form-content" name="phone" autocomplete="on" required :maxlength=10
                    @keydown="allowNumbersOnly($event)" />
                <div class="form-border"></div>
                <label for="user-password" style="padding-top:22px">&nbsp;Password
                </label>
                <a-input id="user-password" class="form-content" type="password" name="password" required
                    v-model:value="initialState.password" />
                <div class="form-border"></div>
                <button id="submit-btn" type="submit" name="submit"
                    @click="handleSubmit($event, initialState)">SUBMIT</button>
                <a href="#" id="signup" @click="openRegisterModal">Don't have account yet?</a>
            </form>
        </div>
    </div>
    <div>
        <CustomerDetails v-bind:visible="loginShow" @handleOk="handleOk" @handleCancel="handleCancel" />
    </div>
</template>

<script>
import Navbar from "../../components/Navbar/Navbar.vue";
import CustomerDetails from "../../components/CustomerDetails/CustomerDetails.vue";
import { ref } from 'vue';
import RegisterMixin from "../../mixins/loginMixin";
import { message } from 'ant-design-vue';
import { reactive } from 'vue';
export default {
    name: "LoginScreen",
    components: {
        Navbar,
        CustomerDetails
    },
    mixins: [RegisterMixin],
    data(){
        return {
            disbleBtn: false,
            initialState : {
            phone: null,
            password: "",
            }
        }
    },
    methods: {
        allowNumbersOnly(e) {
            var code = (e.which) ? e.which : e.keyCode;
            if (code > 31 && (code < 48 || code > 57)) {
                e.preventDefault();
            }
        },
         handleSubmit(event, value){
            event.preventDefault();
            if(this.initialState.phone.length > 0 && this.initialState.password.length > 0){
                this.disbleBtn = false;
                this.loginUser(value)
            }else{
                this.disbleBtn = true;
            }
        }
    },

    setup() {

        let loginShow = ref(false);
        let initialState = {
            phone: null,
            password: "",
        }
        const loginState = reactive({...initialState});

        const handleOk = (formState) => {
            if (formState.password !== formState.confirmPassword) {
                message.error('Password And Confirm Password should be Same');
                return;
            } else {
                loginShow.value = false;
                RegisterMixin.registerUser(formState)
            }
        }

        const handleCancel = () => {
            loginShow.value = false;
        }
        const openRegisterModal = () => {
            loginShow.value = true;
        }
       
        return {
            loginShow,
            loginState,
            handleOk,
            handleCancel,
            openRegisterModal,

        };
    }
}
</script>

<style scoped>
main {
    display: flex;
    justify-content: center;
    min-width: 1030px;
    min-height: 400px;
    margin-top: 24px;
    margin-bottom: 10%;
}

img {
    width: 100%;
    -o-object-fit: contain;
    object-fit: contain;
}

a {
    text-decoration: none;
}

body {
    background: -webkit-linear-gradient(bottom, #2dbd6e, #a6f77b);
    background-repeat: no-repeat;
}

label {
    font-family: "Raleway", sans-serif;
    font-size: 11pt;
}

#forgot-pass {
    color: #2dbd6e;
    font-family: "Raleway", sans-serif;
    font-size: 10pt;
    margin-top: 3px;
    text-align: right;
}

#card {
    background: #fbfbfb;
    margin: 6rem auto 8.1rem auto;
    width: 27%;
    border: 1px solid #e0e0e0;
    border-radius: 20px
}

label {
    text-align: left;
}

#card-content {
    padding: 12px 44px;
}

#card-title {
    font-family: "Raleway Thin", sans-serif;
    letter-spacing: 4px;
    padding-bottom: 23px;
    padding-top: 13px;
    text-align: center;
}

#signup {
    color: #2dbd6e;
    font-family: "Raleway", sans-serif;
    font-size: 10pt;
    margin-top: 16px;
    text-align: center;
}

#submit-btn {
    background: -webkit-linear-gradient(right, #a6f77b, #2dbd6e);
    border: none;
    border-radius: 21px;
    box-shadow: 0px 1px 8px #24c64f;
    cursor: pointer;
    color: white;
    font-family: "Raleway SemiBold", sans-serif;
    height: 42.3px;
    margin: 0 auto;
    margin-top: 50px;
    transition: 0.25s;
    width: 153px;
}

#submit-btn:hover {
    box-shadow: 0px 1px 18px #24c64f;
}

.form {
    align-items: left;
    display: flex;
    flex-direction: column;
}

.form-border {
    background: -webkit-linear-gradient(right, #a6f77b, #2ec06f);
    height: 1px;
    width: 100%;
}

.form-content {
    background: #fbfbfb;
    border: none;
    outline: none;
}

input {
    line-height: 1px;
}

.underline-title {
    background: -webkit-linear-gradient(right, #a6f77b, #2ec06f);
    height: 2px;
    margin: -1.1rem auto 0 auto;
    width: 220px;
}

.ant-input:focus,
.ant-input-focused {
    box-shadow: none;
}</style>