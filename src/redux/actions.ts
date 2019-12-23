import { Action } from 'redux'

export enum ActionType {
  ADD_TODO = 'ADD_TODO',
  COMPLETE_TODO = 'COMPLETE_TODO',
  DELETE_TODO = 'DELETE_TODO',
}

interface AddTodoAction extends Action {
  type: ActionType.ADD_TODO,
  payload: {
    title: string
  }
}

export const addTodo = (title: string): AddTodoAction => (
  {
    type: ActionType.ADD_TODO,
    payload: {
      title: title
    }
  }
)

interface CompleteTodoAction extends Action {
  type: ActionType.COMPLETE_TODO,
  payload: {
    id: number
  }
}

export const completeTodo = (id: number): CompleteTodoAction => (
  {
    type: ActionType.COMPLETE_TODO,
    payload: {
      id: id
    }
  }
)

interface DeleteTodoAction extends Action {
  type: ActionType.DELETE_TODO,
  payload: {
    id: number
  }
}

export const deleteTodo = (id: number): DeleteTodoAction => (
  {
    type: ActionType.DELETE_TODO,
    payload: {
      id: id
    }
  }
)

export type TodoActions = AddTodoAction | CompleteTodoAction | DeleteTodoAction