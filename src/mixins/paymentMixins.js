export default {
    makePayment(totalPrice) {
        let details = JSON.parse(localStorage.getItem("userDetails"))
        var options = {
            "key": "rzp_test_5lTFSCgxZgUpPb", // Enter the Key ID generated from the Dashboard
            "amount": (totalPrice * 100), // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "Local Shop", //your business name
            "description": "Test Transaction",
            "image": "../assets/local-shop.png",
            "handler": function(response){
                console.log(response.razorpay_payment_id)
                // order api integration is pending
            },
            "prefill": { 
                "name": details[0]?.name, //your customer's name
                "email": details[0]?.email,
                "contact": details[0]?.phone //Provide the customer's phone number for better conversion rates 
            },
            "theme": {
                "color": "#3399cc"
            }
        };
        var rzp = new window.Razorpay(options);
        rzp.open();
    },
}