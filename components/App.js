import React from 'react'
import Filter from './Filter'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import Title from './Title'
import Footer from './Footer'

const App = () => (
  <div>
  	<Title />
  	<Filter />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
