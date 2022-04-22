import React, { Component } from 'react'

 class Cart extends Component {
  render() {
    return (
      <>
        <h3>Cart Component</h3>
        <pre>{JSON.stringify(this.props)}</pre>
        <h4>product Name:{this.props.name}</h4>
        <h4>product Price:{this.props.price}</h4>
        <h4>product color:{this.props.color[1]}</h4>
      </>
    )
  }
}

export default Cart