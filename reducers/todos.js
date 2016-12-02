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
                  img_src :'http://clashroyaledeckbuilder.com/assets/cards/'+index+'.png',
                  completed: false,
                  cost: cards[i].cost,
                  type: cards[i].type,
                  rarity: cards[i].rarity

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
