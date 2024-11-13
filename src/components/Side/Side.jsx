import React, { Component } from 'react'

export default class Side extends Component {
  render() {
    console.log(this.props);
    let {decCount}=this.props
    return (
      <div>
        <h1>Side</h1>
        <button onClick={()=>decCount(2)}>减二</button>
      </div>
      
    )
  }
}
