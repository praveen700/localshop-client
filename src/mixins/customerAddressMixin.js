import { getCustomer, updateCustomer } from "./customer.service";
import { message } from 'ant-design-vue';


export default {

    async updateCustomerAddress(body, id) {
        try {
            let result = await updateCustomer(body, id);
            if (result?.status === 200) {
                message.success(result?.data?.message);
                let customerDetails = await getCustomer(id);
                localStorage.removeItem("userDetails");
                localStorage.setItem("userDetails", JSON.stringify(customerDetails?.data?.data))
            }
        } catch (err) {
            message.error(err?.response?.data?.error);

        }
    },



}