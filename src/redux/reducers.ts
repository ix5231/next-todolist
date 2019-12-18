import Task from '../task'
import { ActionType, TodoActions } from './actions'

export interface TodoState {
  nextId: number,
  tasks: Task[]
}

const initialState: TodoState = {
  nextId: 0,
  tasks: []
}

const todoApp = (state = initialState, action: TodoActions): TodoState => {
  switch (action.type) {
    case ActionType.ADD_TASK:
      return {
        nextId: state.nextId + 1,
        tasks: state.tasks.concat({
          id: state.nextId,
          title: action.payload.title,
        })
      }
    case ActionType.COMPLETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((t) => t.id != action.payload.id),
      }
    default:
      return state
  }
}

export default todoApp