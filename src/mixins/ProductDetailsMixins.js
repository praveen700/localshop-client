import { fetchProductByID } from "./product.service";


export default {
    data() {
        return {
            productDetails: [],
        }
    },
    async mounted() {
        try {
            let result = await fetchProductByID(Number(this.$route?.query?.productId));
            if (result?.status === 200) {
                this.productDetails = result?.data?.data
            }
        } catch (err) {
            return err
        }

    },
   



}