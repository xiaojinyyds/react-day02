import React, { Component } from "react";
import "./TodoList.css";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";

export default class TodoList extends Component {
  render() {
    return (
      <div>
        <div className="todo-container">
          <div className="todo-wrap">
            <Header></Header>
            <Main></Main>
            <Footer></Footer>
          </div>
        </div>
      </div>
    );
  }
}
