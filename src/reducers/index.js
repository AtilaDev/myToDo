import { ADD_TASK, REMOVE_TASK } from '../actions';

const initialState = {
  tasks: [],
};

export default (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case REMOVE_TASK:
      return {
        ...state,
        ...state.tasks.splice(action.payload, 1),
      };

    default:
      return state;
  }
};
