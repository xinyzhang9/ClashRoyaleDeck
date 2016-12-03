import React, { PropTypes } from 'react'
import Todo from './Todo'

//utility functions to get statistics
let getLength = (todos) => {
  return todos.length
}

let getCost = (todos) => {
  let sum = 0;
  todos.forEach(function(o){
    sum += o.cost;
  })

  let res = (sum/8).toFixed(1);
  return res;
}

let getCore = (todos) => {
  let sum = 0;
  todos.forEach(function(o){
    sum += o.core;
  })
  return sum;
}

let getAttackRating = (todos) => {
  let sum = 0;
  let sumOfCost = 0;
  todos.forEach(function(o){
    sum += o.attackRating * o.number;
    sumOfCost += o.cost;
  })

  let res = (sum/sumOfCost).toFixed(1);
  return res;
}

let getDefendRating = (todos) => {
  let sum = 0;
  let sumOfCost = 0;
  todos.forEach(function(o){
    sum += o.defendRating * o.number;
    sumOfCost += o.cost;
  })

  let res = (sum/sumOfCost).toFixed(1);
  return res;
}

let getHitBuilding = (todos) => {
  let sum = 0;
  todos.forEach(function(o){
    sum += o.dpc * o.canHitBuilding;
  })
  return sum;
}

let getHitTroop = (todos) => {
  let sum = 0;
  todos.forEach(function(o){
    sum += o.dpc * o.canHitTroop;
  })
  return sum;
}

let getHitAir = (todos) => {
  let sum = 0;
  todos.forEach(function(o){
    sum += o.dpc * o.canHitAir;
  })
  return sum;
}

let getHitArea = (todos) => {
  let sum = 0;
  todos.forEach(function(o){
    sum += o.dpc * o.canHitArea;
  })
  return sum;
}

let getTank = (todos) => {
  let sum = 0;
  todos.forEach(function(o){
    sum += o.canTank;
  })
  return sum;
}





const TodoList = ({ todos, onTodoClick }) => {
  let deck = todos.filter(t => t.completed);
  return(
  <div>
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
      />
    )}
  </ul>
  <div style = {{textAlign: 'center'}}>
    {todos.filter(t => t.completed).length === 8 ? (
    <div id="success">
      <p><span style = {{color:'hotpink'}}>Average Elixir cost: </span>{getCost(deck)}</p>
      <p><span style = {{color:'hotpink'}}>No.of cores: </span>{getCore(deck)}</p>
      <p><span style = {{color:'hotpink'}}>Hit Building: </span>{getHitBuilding(deck)}</p>
      <p><span style = {{color:'hotpink'}}>Hit Troop: </span>{getHitTroop(deck)}</p>
      <p><span style = {{color:'hotpink'}}>Hit Air: </span>{getHitAir(deck)}</p>
      <p><span style = {{color:'hotpink'}}>Hit Area: </span>{getHitArea(deck)}</p>
    </div>
  ) : 
    <div id="fail">
      Your deck must include exactly 8 cards. {deck.length}/8
    </div>
  } 
  </div>
  </div>
)
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList
