import { debounce } from "@/helper/helper";
import { getElectronicsDetails, productPriceFilter, productSort } from "./product.service";


export default {
    data() {
        return {
            productDetails: [],
        }
    },
    async mounted() {
        try {
            let result = await getElectronicsDetails(this.$route?.query?.categoryType);
            if (result?.status === 200) {
                this.productDetails = result?.data?.data
            }
        } catch (err) {
            return err
        }

    },
    methods: {
        async radioChange(event) {
            try {
                let result = await productSort(Number(this.$route?.query?.categoryId), event.target.value)
                if (result?.status === 200) {
                    this.productDetails = result?.data?.data
                }
            } catch (err) {
                return err
            }
            
        },
        priceRangeSlider: debounce(async function (event) {
            try {
                let payload = {
                    categoryId: Number(this.$route?.query?.categoryId),
                    minPrice: event[0],
                    maxPrice: Number(event[1])
                }
                let result = await productPriceFilter(payload)
                if (result?.status === 200) {
                    this.productDetails = result?.data?.data
                }
            } catch (err) {
                return err
            }
        }, 300),

        goToOtherPage(event, props) {
            event.preventDefault()
            this.$router.push({ path:  '/product-details', query: { productId: props?.product_id, productDetails:props } } );
            
        },

        
    }






}