import {HIDE_ALERT, SHOW_ALERT} from "../actionTypes";

const handlers = {
  [SHOW_ALERT]: (_, action) => action.payload,
  [HIDE_ALERT]: () => null,
  DEFAULT: (state) => state,
};

export const alertReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
};

// switch (action.type) {
//   case SHOW_ALERT:
//     return action.payload;
//   case HIDE_ALERT:
//     return null;

//   default:
//     return state;
// }
