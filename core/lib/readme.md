### Usage

Add import to your file.

`
import {...} from 'daksin-script/core/lib/index'`
---

There are basic functions:

* `
returnFunction(arg -> string) -> string` This function returns an element which you provide 
   
* `
evaluateFunction(code -> string) -> string` This function evaluates your code

* `
latestItem(array -> any[]) -> any` This function returns last item of array
   
* `
getObjectKeys(obj -> object) -> string[] ` This function object keys 
  
* ` 
faker(limit -> number) -> string[]  ` This function gives you test data array
  
* `
rm(path -> string) -> string` This function delete file or folder by providing path and returns a response
  
* `
debug(code -> string) -> any | undefined` This function debug your code
  
---
  
### Notes
All functions are in public access, so you can check code.

