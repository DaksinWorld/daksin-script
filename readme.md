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

Then paste this command into terminal.

`
git clone https://github.com/DaksinWorld/daksin-script.git`

After all, **files** folder is your 
non-fordable (it means, that you cannot create folders as this will cause errors)
directory, where you create files with *.djs extension.

Enjoy coding!

### Syntax
`
func = function;`

`
cl() = console.log();`

`
rtn = return;`

`
-> = : // example: (time -> number) will compile in (time: number)`

`
elif() = else if()`

`
|or| = |`

`
also you can use standard syntax`

## Notes

You must have installed Typescript and Node.js in your PC.

### Our core library

`
import {returnFunction, evaluateFunction, latestItem, getObjectKeys, faker} from 'daksin-script/core/lib/index'
`

`
cl(returnFunction('string')) => 'string'`

`
cl(evaluateFunction('2+2')) => '4'`

`
cl(latestItem(['first', 'second', 'last']))' => 'last'`

`
cl(getObjectKeys({data: {name: 'asdasd'}, data2: {name: 'sadasd'}})) => ['data', 'data2']`

`
cl(faker()) it is a function which generates random data and returns a string array`

#### This project is current developing and I am looking for a person who would help with setting up IDE for this ProgrammingLanguage!

