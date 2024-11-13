import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class BuTest extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,// 必须是字符串, 不能是空字符串
    height: PropTypes.number,
    age: PropTypes.number,
    sex: PropTypes.string
  }

  render() {
    let {name,height,age,sex} = this.props

    return (
      <div>
        <h1>BuTest</h1>
        <h1>{name}</h1>
        <h1>{height}</h1>
        <h1>{age}</h1>
        <h1>{sex}</h1>
      </div>
    )
  }
}
