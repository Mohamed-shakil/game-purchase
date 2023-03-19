import { useCallback, useContext } from "react";
import { Shoppingcontext } from "../contextapi/shop-context";
import useRazorpay from 'react-razorpay';

function Shoppingcart()
{
    const {items}=useContext(Shoppingcontext);
    const rzpay=useRazorpay();
    let total=0;
    const rzpayDisplay = useCallback(async (total)=> {
        const options = {
            key: "",
            amount: total,
            currency: "INR",
            name: "Game-Purchase",
            description: "payment",
            handler: (resp)=> {
                console.log(resp);
            },
            prefill: {
                name: "Mohamed shakil",
                email: "shakilmohammed16@gmail.com",
                contact: "2355555555"
            
            },
            notes: {
                address: "adress"
            },
            theme: {
                color: "#3399cc",
            },
        }
        const pay = new rzpay(options);
        pay.open();
        
    }, [rzpay])
    return <>
        <div>
        {items.map((item)=>{
            total+=item.price;
            return <>
            <div>{item.title} <span> : RS {item.price}-/</span></div>
            <button>Remove from cart</button></>  } 
                     
        )}
        </div>
        <div>Billing total : {total}</div>
        <button onClick={()=>{rzpayDisplay(total)}}>Pay</button>
    </>
}

export default Shoppingcart;