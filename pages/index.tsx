import * as React from 'react'
import { NextPage } from 'next'

import Layout from '../components/Layout'
import TodoInput from '../components/TodoInput'
import TaskList from '../components/TaskList'

import Task from '../src/task'

const IndexPage: NextPage = () => {
  const [tasks, setTasks] = React.useState<Task[]>([]) 
  const [nextId, setNextId] = React.useState(0)
  const completeHandler = (completed: Task) => {
    setTasks(tasks.filter((t) => t != completed))
  }

  return (
    <Layout title="Todolist">
      <h1>Todolist</h1>
      <TodoInput onAddTask={(taskName) => {
        setTasks(tasks.concat({
          id: nextId,
          title: taskName,
        }))
        setNextId(nextId + 1)
      }} />
      <TaskList tasks={tasks} onComplete={completeHandler} />
    </Layout>
  )
}

export default IndexPage
