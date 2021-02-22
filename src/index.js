import React from "react";
import ReactDOM from "react-dom";
import store from "./redux/store";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import VisibilityFilters from "./components/VisibilityFilters";
import "./styles.css";
import { Provider } from "react-redux";
// const REACTREDUX = require('../node_modules/react-redux/lib/index.js')
// console.log('REACTREDUX', REACTREDUX)

const rootElement = document.getElementById("root");
// const MyContext = React.createContext(null);
/**
 * 1. Provider的用法：引入store & 包裹组件
 *  https://www.codenong.com/j5e76ef71e51d4526f82/
 *  http://ldllidonglin.github.io/blog/2020/05/07/2020-05-07-react-redux%E6%BA%90%E7%A0%81%E8%A7%A3%E6%9E%90/
 *  https://juejin.cn/post/6844904106000121863
 */
const App = () => ReactDOM.render(
  <Provider store={store}>
    <div className="todo-app">
      <h1>Todo List</h1>
      <AddTodo />
      <TodoList />
      <VisibilityFilters />
    </div>
  </Provider>,
  rootElement
);
App()