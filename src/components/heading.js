import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'; 
import { Shoppingcontext } from '../contextapi/shop-context';

function Heading()
{
   
    const {items}=useContext(Shoppingcontext);
     const nav=useNavigate();
    return <>
    <nav>
        <div className="head">Game Shopping</div>
        
        <button className='cart' onClick={()=>{nav('/shoppingcart')}}><span>{items.length}</span>Cart</button>
    </nav>
    </>
}

export default Heading;