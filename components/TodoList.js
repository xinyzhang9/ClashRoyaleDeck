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
                  dpcTower: cards[i].dpcTower || (cards[i].dpc || 0),
                  dislike: cards[i].dislike || [],
                  like: cards[i].like || []
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
  // console.log('att rating',sum);
  let rating = (sum > 250)?'S':(sum > 220)?'A':(sum>200)?'B':(sum>150)?'C':(sum>100)?'D':(sum>75)?'E':'F';
  return rating;
}

//defend rating
let getDefendRating = (todos) => {
  let sum = 0;
  todos.forEach(function(o){
    sum += o.defendRating * o.cost;
  })

  // console.log('def rating',sum);
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

//get suggestion about the elixir cost
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

//get suggestion about strategy based on core
let getStrategySuggestion = (todos) => {
  let numCores = getCore(todos);
  let suggestions = [];
  if(numCores < 1){
    return ['An attacking core is strongly suggested to be included in your deck.'];
  }else if(numCores > 2){
    return ['You have included more than 2 cores, which is not suggested.'];
  }else{
    todos.filter(t => t.core === 1).forEach(function(c){
      switch(c.id){
        case 8:
          suggestions.push("Giant combined with ranged troops can form a strong ground push.");
          break;
        case 10:
          suggestions.push("Prince combined with area-damaged troops or spells can form surprise attack.");
          break;
        case 19:
          suggestions.push("Baloon combined with Giant can form a classical ground-air push.");
          break;
        case 20:
          suggestions.push("X-Bow combined with defending troops or buildings can eliminate enemy tower without entering opponent territory.");
          break;
        case 30:
          suggestions.push("Giant Skeleton's best value is its death damage. So try to get close to the opponent's tower.");
          break;
        case 33:
          suggestions.push("Hog Rider combined with quick small troops can form a quick attack or surprise attack.");
          break;
        case 36:
          suggestions.push("Golem is so robust and slow. It buys time for you to add support units behind it.");
          break;
        case 38:
          suggestions.push("P.E.E.K.A is strong and powerful. But it is easily disattracted by small troops. Try to make ways for it.");
          break;
        case 42:
          suggestions.push("Mortar fires area damage to opponent's troop or tower in very long rage. Your task is to protect it as long as possible.");
          break;
        case 46:
          suggestions.push("Royal Giant targets buildings in long range so it protects your support troops from opponents' attack. But you still need to eliminate opponents' backups quickly.");
          break;
        case 48:
          suggestions.push("Three Musketeers are extremy fatal but also vulnerable to fireballs and lightning. Separate them into two ways can avoid heavy loss and form a strong push.");
          break;
        case 52:
          suggestions.push("Sparky fires fatal area damage but its fire speed is extremy low. Try to protect it from small troops and guide it near opponent's tower.");
          break;
        case 53:
          suggestions.push("Lava Hound is the core of air-troops. Add proper air support units behind it and eliminate opponent's backups.");
          break;
        case 54:
          suggestions.push("Miner is a very versatile core. You can use it to assassinate Princess, destroy Elixir Collector, or be a tank for your attacking units.");
          break;
        case 56:
          suggestions.push("Bowler behind a Giant can form a strong ground push. It is also a very strong defending unit.");
          break;
        case 64:
          suggestions.push("Elite Barbarians are quick and strong, shifting from defensive to offensive. Support them if you have enough elixirs.");
          break;
        default:
          suggestions.push("No suggestions available.");
      }
    })
    

  }
  return suggestions;
}

//get most hated cards
let getDislikeCards = (todos) => {
  let map = new Map();
  todos.forEach(function(o){
    o.dislike.forEach(function(x){
      if(!map.has(x)){
        map.set(x,1);
      }else{
        map.set(x,map.get(x)+1);
      }
    })
  })
  
  let sortable = Array.from(map.entries());
  sortable.sort(function(a,b){return b[1]-a[1];});
  return sortable.map(function(x){return x[0]}).slice(0,3);

}

//get suggested combination cards
let getLikeCards = (todos) => {
  let map = new Map();
    todos.forEach(function(o){
      o.like.forEach(function(x){
        if(!map.has(x)){
          map.set(x,1);
        }else{
          map.set(x,map.get(x)+1);
        }
      })
    })

    //remove cards which are already included in deck
    todos.forEach(function(o){
      if(map.has(o.id)){
        map.delete(o.id);
      }
    })
  
  let sortable = Array.from(map.entries());
  sortable.sort(function(a,b){return b[1]-a[1];});
  return sortable.map(function(x){return x[0]}).slice(0,3);
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
      <h5 style = {{color: 'hotpink'}}>[ Elixir Suggestions ] </h5>
      <p>
      {getCostSuggestion(deck)}
      </p>
      <h5 style = {{color: 'orange'}}>[ Strategy Suggestions ] </h5>
      {
        getStrategySuggestion(deck).map(t => 
          <p key={t}>{t}</p>
        )
      }

      <h5 style = {{color: 'red'}}>[ Most hated cards ] </h5>
      <ul>
      {
        getDislikeCards(deck).map(t => 
         <PureCard
          key={t}
          text = {newCards[t-1].text}
          img_src = {t.toString()}
        />
        )
      }
      </ul>
      <h5 style = {{color: 'green'}}>[ Suggested combination with ]</h5>
      <ul>
      {
        getLikeCards(deck).map(t => 
         <PureCard
          key={t}
          text = {newCards[t-1].text}
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
