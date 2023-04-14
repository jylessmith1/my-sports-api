## COR Produce Delivery API

This is an API that lets a customer retieve sports items for a store based off their favorite NBA Basketball Player. 
NOTICE: all features are not available at this time, able to see and add players and onle see whats available only.
NOTICE: when you see "sports" it refers to the PLAYERS.(only basketball players as of now) (will add other sports gear for additional players in future.)

Here are the request methods:

`/sports` - GET

- Returns a list of all available Basketball Players

`/sports/:id` - POST

- Returns a single player by his id and allows you to add a player if desired
- example response from `/sports/`:

```
   "id:": "1",
    "Name": "Kevin Durant",
    "Position": " Small Forward",
    "Team": "Phoenix Suns"
```
`/store` - GET

- Accepts a `store` object, and shows all available products that we have in the store

- example object:

```
    "id": "3",
    "Category": "Basketball",
    "Product": "Basketball Shoes",
    "description": "Full-grain leather basketball shoes for all positions heights and playing types"

```
