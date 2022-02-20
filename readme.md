**Some info about**
-

Daksin-script's is minimalistic typed language, which was create to make your code more readable and faster

**Instalation**
-
**Before we start, you must have installed Type Script**
If you have not paste this command into terminal

`
npm i -g typescript
`

First you should install dependecies 

`
npm install daksin-script @types/node
`

In your project directory create **app.ts** file and **files** folder.

Paste this code into **app.ts**

`
import {main} from 'daksin-script/core/compiler'; 
main();
`

Then into your package.json add this lines of code

`
"scripts": {
"start": "tsc app.ts && npm run watch",
"watch": "node app.js && ts-node res --watch"
},`

After all, **files** folder is your 
non-fordable (it means, that you cannot create folders as this will cause errors)
directory, where you create files with *.djs extension
