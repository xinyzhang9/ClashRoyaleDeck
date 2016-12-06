import React, { PropTypes } from 'react'
import Todo from './Todo'
import PureCard from './PureCard'

import data from 'json!../cards.json';
  let cards = []
Object.keys(data).forEach(function(key, idx) {
   cards.push(data[key]);
}); 

let newCards = [];
for(let i in cards){
  let index = parseInt(i)+1;
  newCards[i] = {
                  id: index,
                  text: cards[i].name,
                  // img_src :'http://clashroyaledeckbuilder.com/assets/cards/'+index+'.png',
                  img_src : index.toString(),
                  completed: false,
                  cost: cards[i].cost,
                  type: cards[i].type,
                  rarity: cards[i].rarity,
                  number: cards[i].number || 1,
                  core: cards[i].core || 0,
                  attackRating: cards[i].attackRating || 0,
                  defendRating: cards[i].defendRating || 0,
                  canHitBuilding: cards[i].canHitBuilding || 0,
                  canHitTroop: cards[i].canHitTroop || 0,
                  canHitAir: cards[i].canHitAir || 0,
                  canHitArea: cards[i].canHitArea || 0,
                  canTank: cards[i].canTank || 0,
                  dps: cards[i].dps || 0,
                  dpc: cards[i].dpc || 0,
                  dpcTower: cards[i].dpcTower || (cards[i].dpc || 0)
                }
}

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
    sum += o.attackRating * o.cost;
  })
  console.log('att rating',sum);
  let rating = (sum > 250)?'S':(sum > 220)?'A':(sum>200)?'B':(sum>150)?'C':(sum>100)?'D':(sum>75)?'E':'F';
  return rating;
}

//defend rating
let getDefendRating = (todos) => {
  let sum = 0;
  todos.forEach(function(o){
    sum += o.defendRating * o.cost;
  })

  console.log('def rating',sum);
  let rating = (sum > 250)?'S':(sum > 220)?'A':(sum>200)?'B':(sum>150)?'C':(sum>100)?'D':(sum>75)?'E':'F';
  return rating;
}

//hit building capability
let getHitBuilding = (todos) => {
  let sum = 0;
  todos.forEach(function(o){
    sum += o.dpc * o.canHitBuilding;
  })
  let rating = (sum > 600)?'S':(sum > 550)?'A':(sum>80)?'B':(sum>70)?'C':(sum>60)?'D':(sum>50)?'E':'F';
  return rating;
}

//hit troop capability
let getHitTroop = (todos) => {
  let sum = 0;
  todos.forEach(function(o){
    sum += o.dpc * o.canHitTroop;
  })
  let rating = (sum > 600)?'S':(sum > 550)?'A':(sum>80)?'B':(sum>70)?'C':(sum>60)?'D':(sum>50)?'E':'F';
  return rating;
}

//hit air capability
let getHitAir = (todos) => {
  let sum = 0;
  todos.forEach(function(o){
    sum += o.dpc * o.canHitAir;
  })
  let rating = (sum > 400)?'S':(sum > 350)?'A':(sum>300)?'B':(sum>250)?'C':(sum>200)?'D':(sum>100)?'E':'F';
  return rating;
}

//hit area capability
let getHitArea = (todos) => {
  let sum = 0;
  todos.forEach(function(o){
    sum += o.dpc * o.canHitArea;
  })
  let rating = (sum > 400)?'S':(sum > 350)?'A':(sum>300)?'B':(sum>250)?'C':(sum>200)?'D':(sum>100)?'E':'F';
  return rating;
}

//no. of tanks
let getTank = (todos) => {
  let sum = 0;
  todos.forEach(function(o){
    sum += o.canTank;
  })
  return sum;
}

let getCostSuggestion = (todos) => {
  if(getCost(todos) >= 3.8 && todos.filter(t => t.id === 23).length === 0){
    return 'The Elixir Cost is too high. You should consider an Elixir Collector.';
  }else if(getCost(todos) <= 3 && getCore(todos) === 0){
    return 'The Elixir Cost is very low. However, you should choose at least a core to lead your troop.';
  }else if(getCost(todos) >= 4.7){
    return 'The Elixir Cost is too high even with an Elixir Collector.';
  }else{
    return 'The Elixir Cost is applicable. Good job.';
  }
}




const TodoList = ({ todos, onTodoClick }) => {


  
  let deck = todos.filter(t => t.completed);
  // to fetch from todos
  let testArr = [1,2,3];
  return(
  <div style = {{textAlign:'center'}}>
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
      <h5>[ Statistics ] </h5>
      <p><span style = {{color:'hotpink'}}>Average Elixir Cost(圣水速率): </span>{getCost(deck)}</p>

      <p><span style = {{color:'red'}}>Attack rating(进攻评分): </span>{getAttackRating(deck)}</p>
      <p><span style = {{color:'green'}}>Defend rating(防守评分): </span>{getDefendRating(deck)}</p>

      <p>
        <span style = {{color:'gray'}}>Common(普通卡牌): </span>{getCommon(deck)}  
        <span style = {{color:'orange'}}> Rare(稀有卡牌): </span>{getRare(deck)}  
        <span style = {{color:'purple'}}> Epic(史诗卡牌): </span>{getEpic(deck)}  
        <span style = {{color:'skyblue'}}> Legendary(传奇卡牌): </span>{getLegendary(deck)}
      </p>
      <p>
        <span style = {{color:'maroon'}}>Troop(部队数目): </span>{getTroops(deck)}  
        <span style = {{color:'hotpink'}}> Spell(法术数目): </span>{getSpells(deck)}  
        <span style = {{color:'green'}}> Building(建筑数目): </span>{getBuildings(deck)}  
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
      <hr/>
      <h5>[ Elixir Suggestions ] </h5>
      <p>
      {getCostSuggestion(deck)}
      </p>
      <h5>[ Most hated cards ] </h5>
      <ul>
      {
        testArr.map(t => 
         <PureCard
          key={t}
          text = {newCards[t].text}
          img_src = {t.toString()}
        />
        )
      }
      </ul>
      <h5>[ Better to have ]</h5>
      <ul>
      {
        testArr.map(t => 
         <PureCard
          key={t}
          text = {newCards[t].text}
          img_src = {t.toString()}
        />
        )
      }
      </ul>
    </div>

  ) : 
    <div id="fail">
      Your deck must include exact <code>8</code> cards. You can see your deck in <span style = {{color:'steelblue'}}>Completed</span> tab
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
