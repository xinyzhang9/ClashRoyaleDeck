# Clash Royale Deck Advisor
> This is a single-page application: a deck advisor for Clash Royale players. User can build their own deck from the most updated (include new released) 64 cards. the advisor will show some useful statistics and suggestions on how to improve this deck.  

## Todo
Add new released cards to databases.  
## Technology
React + Redux + Webpack  
(Python is also used to crawl images of the cards)
## Features
- [x] Displays all 64 cards in the game when the page is first loaded.  
- [x] Provides differnet filters to classify cards.  
- [x] Shows statistics and suggestions only when user has selected exact 8 cards.(Game rule)
- [x] Calculates ratings of the deck in multiple dimensions, including offensive score and defensive score.   
- [x] Gives suggestions based on the core card of the user's deck.  
- [x] Suggests the most dangerous cards the opponent will use to counter the user's deck.
- [x] Suggests the possible attack combinations based on user's chosen cards.
- [x] Bundles all node-modules and server-side code into a single js file and deployed directly on Github page.

## Live
https://xinyzhang9.github.io/ClashRoyaleDeck/

## Run in production mode  
```
1. Clone or Download this repo  
2. Switch to this repo in your terminal  
3. Type the command "npm install"  
4. Type the command "sudo npm run build"  
5. Open your index.html file in this repo

```
## Run in dev mode  
```
1. Clone or Download this repo  
2. Switch to this repo in your terminal  
3. Type the command "npm install"  
4. Edit index.html, change <script src="bundle.js"></script> to <script src="/static/bundle.js"></script>  
5. Type the command "npm run start"  
6. Open your browser at localhost:3000
```
## Screenshot
![alt tag](https://raw.githubusercontent.com/xinyzhang9/ClashRoyaleDeck/master/screen.png)

