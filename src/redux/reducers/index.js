import { combineReducers } from "redux";
import visibilityFilter from "./visibilityFilter";
import todoList from "./todos";

/**
 *   combineReducers 函数返回一个函数，也就是合并后的 reducer 函数
 *   该函数返回总的 state
 *   https://www.bookstack.cn/read/CS-Interview-Knowledge-Map/spilt.3.Framework-react-zh.md
 *   todoList和visibilityFilter是两个reducer函数
 * todoList和visibilityFilter也是store里面的两个key名,
 * 每个reducer都是这么个方法(initialState, action) => currentState
 * 看todos
 */
export default combineReducers({ todoList, visibilityFilter });