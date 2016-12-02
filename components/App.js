import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import Title from './Title'
// import Statics from './Statics'

const App = () => (
  <div>
  	<Title />
  	<Footer />
    <VisibleTodoList />
    <AddTodo />
    
  </div>
)

export default App
