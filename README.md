# data-structure

## Installing

``` javascript 
npm install --save common-data-structure
```

## Example

``` javascript 
import { Stack } from 'common-data-structure'

const stack = new Stack() // create an instance
stack.push(5) // add an element
stack.push(6)
stack.peek() // peek top of stack element
stack.push(8)
stack.isEmpty() // Is the stack empty 
stack.size() // stack length
```