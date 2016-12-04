import data from 'json!../cards.json';
var cards = []
Object.keys(data).forEach(function(key, idx) {
   cards.push(data[key]);
}); 

var newCards = [];
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



const todo = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, {
        completed: !state.completed
      })
    default:
      return state
  }
}

const todos = (state = newCards, action) => {
  switch (action.type) {
    case 'TOGGLE_TODO':
      return state.map(t =>
        todo(t, action)
      )
    default:
      return state
  }
}

export default todos
