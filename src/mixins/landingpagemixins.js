import { getLandingPageDetails } from "./landingpage.service";


export default {
    data() {
        return {
            landingPageDetails: [],
        }
    },
    async mounted() {
        try {
            let result = await getLandingPageDetails();
            if (result?.status === 200) {
                this.landingPageDetails = result?.data?.data
            }
        } catch (err) {
            console.log(err)
        }

    },
    
  

}