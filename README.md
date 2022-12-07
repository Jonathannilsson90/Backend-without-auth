# Group five - Project in group with working API.

## Description:

Groups of five is tasked to make a working REST-API.

With the help of eachother the group is tasked with working out routers, controllers and testing in order to, in the end make a fully functional REST-API.

In this case without a database.


## NPM packages used:
---
``` 
 npm install express 
 npm install dotenv --save-dev
 npm install uuid
 npm install -D nodemon
``` 
---
## How to get the server running:

In order for the server to start the user will have to type:

```
For production: npm start
For development: npm test
```
---
## Included functions:
This explains what the following functions do:
* getClothes
* getClothesById
* postClothing
* updateClothing
* removeClothing

```
api/clothes/getClothes - Prints out "clothes" array and displays it to the user
api/clothes/getClothesById - Prints out a specific object in the array "clothes" using it's ID
api/clothes/postClothing - Adds a new "clothing" object to the "clothes" array.
api/clothes/updateClothing - Changes "clothing" object using it's ID
api/clothes/removeClothing - removes "clothing" object using it's ID
```
---
## Insomnia HTTP verbs:
These are direct links to the respective functions:
```
getclothes - http://localhost:3000/api/clothes
getClothesById - http://localhost:3000/api/clothes/ *ID*
postClothing - http://localhost:3000/api/clothes
updateClothing - http://localhost:3000/api/clothes/ *ID*
removeClothing - http://localhost:3000/api/clothes/ *ID*
```
---
## Contributors:
|Name: | Github:|
|-----------------|-------------------|
|Robin Raczkiewicz| [Robinrac](https://github.com/Robinrac)           |
|Jonathan Nilsson | [Jonathannilsson90](https://github.com/Jonathannilsson90) |
|Una Paruma       | [ParumaUna](https://github.com/ParumaUna)         |
|Shehryar Hassan  | [sherii190](https://github.com/sherii190)   |
|Mustafa Zaitoun  | [muza97](https://github.com/muza97)