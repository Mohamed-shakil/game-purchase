import { useContext } from "react";
import { Shoppingcontext } from "../contextapi/shop-context";
import '../App.css';
function List({item})
{
   const {additems}=useContext(Shoppingcontext);
    return <>
    <div className="gameCard">
        {/* <img src={image}></img> */}
        <section className="title">{item.title}</section>
        <section className="desc">{item.description}</section>
        <section className="price">Price : RS {item.price}</section>
        <button onClick={()=>{additems(item)}}>Add to shopping cart</button>
    </div>
    </>
}

export default List;