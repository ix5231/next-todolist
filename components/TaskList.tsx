import * as React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Checkbox from '@material-ui/core/Checkbox'

import Task from '../src/task'

type Props = {
  tasks: Task[],
  onComplete: (completed: Task) => void,
}

const TaskList: React.FC<Props> = ({tasks, onComplete}) => (
  <List>
    {
      tasks.map((task) =>
        <ListItem key={task.id}>
          <Checkbox onChange={(_e: React.ChangeEvent) => onComplete(task)} /> {task.title}
        </ListItem>
      )
    }
  </List>
)

export default TaskList