import React, {Component} from "react";
import Cart from "./Cart" 
class Product extends Component{
    product_name ="I-Phone"
    product_price = 55000
    colors =['Black' , 'Grey' , 'Red' , 'White']
   render(){
       return (
       <>
        <h3>Product Component</h3>
        <hr/>
        <Cart name ={this.product_name}
              price = {this.product_price}
              color = {this.colors}/>      
       </>
       )
   }
}
export default Product