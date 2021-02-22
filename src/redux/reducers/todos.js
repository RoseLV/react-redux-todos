import { ADD_TODO, TOGGLE_TODO } from "../actionTypes";

const initialState = {
  allIds: [],
  byIds: {}
};

/**
 * 
 * @param {*} state 
 * @param {*} action 
 */
export default function(state = initialState, action) {
  switch (action.type) {
    /**
     * 添加todo
     */
    case ADD_TODO: {
      const { id, content } = action.payload;
      console.log('action', action);
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            content,
            completed: false
          }
        }
      };
    }
    /**
     * 改变todo状态
     */
    case TOGGLE_TODO: {
      const { id } = action.payload;
      console.log('action', action);
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            completed: !state.byIds[id].completed
          }
        }
      };
    }
    default:
      return state;
  }
}
