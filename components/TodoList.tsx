import * as React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Checkbox from '@material-ui/core/Checkbox'

import Todo from '../src/todo'
import { completeTodo, TodoActions } from '../src/redux/actions'
import { TodoState } from '../src/redux/reducers'

type Props = {
  todos: Todo[],
  onComplete: (completed: number) => void,
}

const TodoListBase: React.FC<Props> = ({todos, onComplete}) => (
  <List>
    {
      todos.map((todo) =>
        <ListItem key={todo.id} style={todo.completed ? { textDecoration: 'line-through' } : {}}>
          <Checkbox onChange={(_e: React.ChangeEvent) => {
            onComplete(todo.id)
          }} /> {todo.title}
        </ListItem>
      )
    }
  </List>
)

const mapStateToProps = (state: TodoState) => (
  {
    todos: state.todos
  }
)

const mapDispatchToProps = (dispatch: Dispatch<TodoActions>) => (
  {
    onComplete: (id: number) => dispatch(completeTodo(id))
  }
)

const TodoList = connect(mapStateToProps, mapDispatchToProps)(TodoListBase)

export default TodoList