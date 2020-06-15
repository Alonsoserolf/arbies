import { TOGGLE_LIGHT } from './actionTypes'

const initialState = {
  isDark: false
}

export default function(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_LIGHT: {
      return {
        ...state,
        isDark: !state.isDark
      }
    }
    default:
      return state;
  }
}
