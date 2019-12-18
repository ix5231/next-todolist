import { Action } from 'redux'

export enum ActionType {
  ADD_TASK = 'ADD_TASK',
  COMPLETE_TASK = 'COMPLETE_TASK',
}

interface AddTaskAction extends Action {
  type: ActionType.ADD_TASK,
  payload: {
    title: string
  }
}

export const addTask = (title: string): AddTaskAction => (
  {
    type: ActionType.ADD_TASK,
    payload: {
      title: title
    }
  }
)

interface CompleteTaskAction extends Action {
  type: ActionType.COMPLETE_TASK,
  payload: {
    id: number
  }
}

export const completeTask = (id: number): CompleteTaskAction => (
  {
    type: ActionType.COMPLETE_TASK,
    payload: {
      id: id
    }
  }
)

export type TodoActions = AddTaskAction | CompleteTaskAction