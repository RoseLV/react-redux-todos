import { ADD_TODO, TOGGLE_TODO, SET_FILTER } from "./actionTypes";

let nextTodoId = 0;

/**
 * 添加todo
 */
export const addTodo = content => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    content
  }
});

/**
 * 改变todo状态
 */
export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: { id }
});

/**
 * 筛选todo状态
 */
export const setFilter = filter => ({ 
  type: SET_FILTER, 
  payload: { filter } 
});
