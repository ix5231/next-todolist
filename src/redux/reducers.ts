import Todo from '../todo'
import { ActionType, TodoActions } from './actions'

export interface TodoState {
  nextId: number,
  todos: Todo[]
}

const initialState: TodoState = {
  nextId: 0,
  todos: []
}

const todoApp = (state = initialState, action: TodoActions): TodoState => {
  switch (action.type) {
    case ActionType.ADD_TODO:
      return {
        nextId: state.nextId + 1,
        todos: state.todos.concat({
          id: state.nextId,
          title: action.payload.title,
          completed: false,
        })
      }
    case ActionType.COMPLETE_TODO:
      return {
        ...state,
        todos: state.todos.map(t => (
          t.id === action.payload.id ? {
            ...t,
            completed: true,
          } : t
        ))
      }
    case ActionType.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((t) => t.id != action.payload.id),
      }
    default:
      return state
  }
}

export default todoApp