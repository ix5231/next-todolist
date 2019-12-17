import { useState, ChangeEvent, FC, FormEvent } from 'react'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

type Props = {
  onAddTask?: (taskName: string) => void
}

const TodoInput: FC<Props> = ({ onAddTask }) => {
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

export default TodoInput