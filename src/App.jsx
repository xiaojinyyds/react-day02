// import React, { Component } from 'react'
// import Footer from './components/Footer'
// import MainFun from './components/MainFun'
// import Side from './components/Side'

// export default class App extends Component {
//   // //定义状态
//   // constructor(){
//   //   super()// 调用父类的构造函数
//   //   this.state = {
//   //     count: 100,
//   //     msg: 'Hello World'

//   //   }// 定义状态方式一
//   // }
//   state = {
//     count: 200,
//     msg: 'Hello World'
//   }// 定义状态方式二
//   click1(){
//     this.setState({
//       count: this.state.count + 1,
//       msg: 'Hello Vue'
//     })// 改变状态
//   }
//   click2(){
//     this.setState({
//       count: this.state.count + 1,
//       msg: 'Hello React'
//     })// 改变状态
//   }
//   click3=()=>{
//     this.setState({
//       count: this.state.count + 1,
//       msg: 'Hello HTML'
//     })// 改变状态
//   }

//   click4(){
//     this.setState({
//       count: this.state.count + 1,
//       msg: 'Hello JS'
//     })// 改变状态
//   }
//   constructor(){
//     super()// 调用父类的构造函数
//     this.click4 = this.click4.bind(this)// 绑定事件
//   }

//   decCount(num){
//     this.setState({
//       count: this.state.count - num
//     })// 改变状态
//   }
//   render() {
//     // let {count,msg} = this.state// 解构赋值
//     let {count,msg} = this.state// 解构赋值
//     return (
//       <div>
//         <h1>App</h1>
//         <h2>count:{count}</h2>
//         <h2>msg:{msg}</h2>
//         <button onClick={this.click1.bind(this)}>Click1</button>
//         <button onClick={()=>
//           this.click2()
//           }>Click2</button>
//         <button onClick={this.click3}>Click3</button>
//         <button onClick={this.click4}>Click4</button>
//         {/* <Footer num={count} xiaoxi={msg} school='西科大'/> */}
//         {/* // 传递数据给Footer组件 */}
//         <Footer count={count} msg={msg} school='西科大'/>

//         <Side decCount={this.decCount.bind(this)} />、

//         <MainFun count={count} msg={msg} school='西科大' decCount={this.decCount.bind(this)}/>
//         {/* // 传递数据给MainFun组件, 并绑定事件 */}
//       </div>// 回显数据
//     )// 返回页面
//   }// 渲染页面
// }

import React, { Component } from "react";
import Button from "./components/Button/Button";
import BuTest from "./components/Button/BuTest";
import TodoList from "./TodoList/TodoList";
export default class App extends Component {
  render() {
    return (
      <div>
        <TodoList></TodoList>
      </div>
    );
  }
}
