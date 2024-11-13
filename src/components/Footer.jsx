import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    console.log(this.props);
    const {count,msg,school} = this.props// 解构赋值
// props 是父组件传递过来的属性, 是只读的, 不能修改
    return (
      <div>
        <hr></hr>
        <h1>{count}</h1>
        <h1>{msg}</h1>
        <h1>{school}</h1>
      </div>
    )
  }
}
