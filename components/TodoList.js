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

let getTroops = (todos) => {
  return todos.filter(t=>t.type === 'troop').length;
}

let getSpells = (todos) => {
  return todos.filter(t=>t.type === 'spell').length;
}

let getBuildings = (todos) => {
  return todos.filter(t=>t.type === 'building').length;
}

let getCommon = (todos) => {
  return todos.filter(t=>t.rarity === 'common').length;
}

let getRare = (todos) => {
  return todos.filter(t=>t.rarity === 'rare').length;
}

let getEpic = (todos) => {
  return todos.filter(t=>t.rarity === 'epic').length;
}

let getLegendary = (todos) => {
  return todos.filter(t=>t.rarity === 'legendary').length;
}

//no. of attacking cores
let getCore = (todos) => {
  let sum = 0;
  todos.forEach(function(o){
    sum += o.core;
  })
  return sum;
}

// attack rating
let getAttackRating = (todos) => {
  let sum = 0;
  todos.forEach(function(o){
    sum += o.attackRating * o.number;
  })

  let res = (sum).toFixed(1);
  return res;
}

//defend rating
let getDefendRating = (todos) => {
  let sum = 0;
  todos.forEach(function(o){
    sum += o.defendRating * o.number;
  })

  let res = (sum).toFixed(1);
  return res;
}

//hit building capability
let getHitBuilding = (todos) => {
  let sum = 0;
  todos.forEach(function(o){
    sum += o.dpc * o.canHitBuilding;
  })
  return sum;
}

//hit troop capability
let getHitTroop = (todos) => {
  let sum = 0;
  todos.forEach(function(o){
    sum += o.dpc * o.canHitTroop;
  })
  return sum;
}

//hit air capability
let getHitAir = (todos) => {
  let sum = 0;
  todos.forEach(function(o){
    sum += o.dpc * o.canHitAir;
  })
  return sum;
}

//hit area capability
let getHitArea = (todos) => {
  let sum = 0;
  todos.forEach(function(o){
    sum += o.dpc * o.canHitArea;
  })
  return sum;
}

//no. of tanks
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
      <p><span style = {{color:'hotpink'}}>Average Elixir Cost: </span>{getCost(deck)}</p>

      <p><span style = {{color:'red'}}>Attack rating: </span>{getAttackRating(deck)}</p>
      <p><span style = {{color:'green'}}>Defend rating: </span>{getDefendRating(deck)}</p>

      <p>
        <span style = {{color:'gray'}}>Common: </span>{getCommon(deck)}  
        <span style = {{color:'orange'}}> Rare: </span>{getRare(deck)}  
        <span style = {{color:'purple'}}> Epic: </span>{getEpic(deck)}  
        <span style = {{color:'skyblue'}}> Legendary: </span>{getLegendary(deck)}
      </p>
      <p>
        <span style = {{color:'maroon'}}>Troop: </span>{getTroops(deck)}  
        <span style = {{color:'hotpink'}}> Spell: </span>{getSpells(deck)}  
        <span style = {{color:'green'}}> Building: </span>{getBuildings(deck)}  
      </p>

      <p>
      <span style = {{color:'steelblue'}}>No.of cores(核心数目): </span>{getCore(deck)}
      <span style = {{color:'brown'}}> No.of tanks(坦克数目): </span>{getTank(deck)}
      </p>

      <p>
      <span style = {{color:'blue'}}>Hit Building(夺塔能力): </span>{getHitBuilding(deck)}
      <span style = {{color:'blue'}}> Hit Troop(削兵能力): </span>{getHitTroop(deck)}
      <span style = {{color:'blue'}}> Hit Air(防空能力): </span>{getHitAir(deck)}
      <span style = {{color:'blue'}}> Hit Area(群伤能力): </span>{getHitArea(deck)}
      </p>
    </div>
  ) : 
    <div id="fail">
      Your deck must include exactly <code>8</code> cards. You can see your deck in <span style = {{color:'steelblue'}}>Completed</span> tab
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
