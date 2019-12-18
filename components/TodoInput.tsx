import { useState, ChangeEvent, FC, FormEvent } from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

import { TodoActions, addTask } from '../src/redux/actions'

type Props = {
  onAddTask?: (taskName: string) => void
}

const TodoInputBase: FC<Props> = ({ onAddTask }) => {
  const [taskName, setTaskName] = useState('')
  const taskInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTaskName(event.target.value)
  }
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (onAddTask && taskName) {
      onAddTask(taskName)
      setTaskName('')
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <Button type='submit' color='primary'>+</Button>
      <TextField id='name' value={taskName} onChange={taskInputHandler} />
    </form>
  )
}

const mapDispatchToProps = (dispatch: Dispatch<TodoActions>) => (
  {
    onAddTask: (title: string) => dispatch(addTask(title))
  }
)

const TodoInput = connect(null, mapDispatchToProps)(TodoInputBase)

export default TodoInput