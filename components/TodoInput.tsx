import { useState, ChangeEvent, FC, FormEvent } from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

import { TodoActions, addTodo } from '../src/redux/actions'

type Props = {
  onAddTodo?: (todoName: string) => void
}

const TodoInputBase: FC<Props> = ({ onAddTodo }) => {
  const [todoName, setTodoName] = useState('')
  const todoInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTodoName(event.target.value)
  }
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (onAddTodo && todoName) {
      onAddTodo(todoName)
      setTodoName('')
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <Button type='submit' color='primary'>+</Button>
      <TextField id='name' value={todoName} onChange={todoInputHandler} />
    </form>
  )
}

const mapDispatchToProps = (dispatch: Dispatch<TodoActions>) => (
  {
    onAddTodo: (title: string) => dispatch(addTodo(title))
  }
)

const TodoInput = connect(null, mapDispatchToProps)(TodoInputBase)

export default TodoInput