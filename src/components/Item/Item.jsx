import React, { Component } from "react";

export default class myItem extends Component {
  render() {
    return (
      <div>
        <li>
          <label>
            <input type="checkbox" />
            <span>xxxxx</span>
          </label>
          <button className="btn btn-danger">删除</button>
        </li>
      </div>
    );
  }
}
