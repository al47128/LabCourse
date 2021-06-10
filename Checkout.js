import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
function Checkout(){
    return(
       <div className="checkout">
           <div className="checkout__left">
            <div>
                <h2 className="checkout__title">Shportja juaj eshte e zbrazet,karuc</h2>
                <p>Nuk ke asgje ne shporten tende,Bli nje produkt,karuc</p>

            </div>

           </div>
           <div className="checkout__right">
            <Subtotal/>
            
            
            
          

           </div>
       </div>

    )




}
export default Checkout