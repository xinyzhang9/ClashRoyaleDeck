import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import Title from './Title'

const App = () => (
  <div>
  	<Title />
  	<Footer />
    <VisibleTodoList />
    
  </div>
)

export default App
