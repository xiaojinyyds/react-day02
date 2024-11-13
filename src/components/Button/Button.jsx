import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class Button extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,// 必须是字符串, 不能是空字符串
    height: PropTypes.number,
    age: PropTypes.number,
    sex: PropTypes.string,
  }
  static defaultProps = {
    name: 'button',
    height: 180,
    age: 18,
    sex: '男'
  }
  render() {
    let {name,height,age,sex} = this.props
    console.log(this.props);
    return (
      <div>
        <button>{name}</button>
        <button>{height}</button>
        <button>{age}</button>
        <button>{sex}</button>
      </div>
    )
  }
}
