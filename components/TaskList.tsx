import * as React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Checkbox from '@material-ui/core/Checkbox'

import Task from '../src/task'
import { completeTask, TodoActions } from '../src/redux/actions'
import { TodoState } from '../src/redux/reducers'

type Props = {
  tasks: Task[],
  onComplete: (completed: number) => void,
}

const TaskListBase: React.FC<Props> = ({tasks, onComplete}) => (
  <List>
    {
      tasks.map((task) =>
        <ListItem key={task.id}>
          <Checkbox onChange={(_e: React.ChangeEvent) => {
            onComplete(task.id)
          }} /> {task.title}
        </ListItem>
      )
    }
  </List>
)

const mapStateToProps = (state: TodoState) => (
  {
    tasks: state.tasks
  }
)

const mapDispatchToProps = (dispatch: Dispatch<TodoActions>) => (
  {
    onComplete: (id: number) => dispatch(completeTask(id))
  }
)

const TaskList = connect(mapStateToProps, mapDispatchToProps)(TaskListBase)

export default TaskList