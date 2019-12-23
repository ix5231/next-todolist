import * as React from 'react'
import { NextPage } from 'next'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Layout from '../components/Layout'
import TodoInput from '../components/TodoInput'
import TodoList from '../components/TodoList'
import todoApp from '../src/redux/reducers'

const store = createStore(todoApp)

const IndexPage: NextPage = () => (
  <Provider store={store}>
    <Layout title="Todolist">
      <h1>Todolist</h1>
      <TodoInput />
      <TodoList />
    </Layout>
  </Provider>
)

export default IndexPage
