import { createUser, userLogin } from "./login.service";
import { message } from 'ant-design-vue';


export default {
    methods:{
        loginUser: async function(body) {
            try {
                let result = await userLogin(body);
                if (result?.status === 200) {
                    message.success(result?.data?.message);
                    localStorage.setItem("userDetails", JSON.stringify(result?.data?.data))
                    this.$router.push({ path:  '/', name: "LandingScreen" , query: { customerDetails: result?.data?.data  } } );
                }
            } catch (err) {
                message.error(err?.response?.data?.error);
    
            }
          }

    },

    async registerUser(body) {
        try {
            let result = await createUser(body);
            if (result?.status) {
                message.success(result?.data?.data);
            }
        } catch (err) {
            message.error(err?.response?.data?.message);

        }

    },
   
    // async loginUser(body) {
    //     try {
    //         let result = await userLogin(body);
    //         if (result?.status === 200) {
    //             console.log(result, "result")
    //             message.success(result?.data?.message);
    //             localStorage.setItem("userDetails", JSON.stringify(result?.data?.data))
    //             this.$router.push({ path:  '/', name: "LandingScreen" , query: { customerDetails: result?.data?.data  } } );
    //         }
    //     } catch (err) {
    //         message.error(err?.response?.data?.error);

    //     }
    // }



}