import React, { Component } from 'react'

export class Product extends Component {
    state={
        Product: "I-phone"
    }
    gmhandler = ()=>{
        this.setState({Product: "Good Morning"})
    }
    gnhandler = ()=>{
        this.setState({Product: "Good Night"})
    }
  render() {
    return (
      <div>
          <h4>Product:{this.state.Product}</h4>
          <button onClick={this.gmhandler}>GM</button>
          <button onClick={this.gnhandler}>GN</button>
     </div>
    )
  }
}

export default Product