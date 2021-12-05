isBalance("())")
 function isBalance(input) {
    let result = null;
    const braceMap = {
'{': {
name: 'squiggly',
type: 'open',
},
'}': {
name: 'squiggly',
type: 'closed',
},
'[': {
name: 'square',
type: 'open',
},
']': {
name: 'square',
type: 'closed',
},
'(': {
name: 'parentheses',
type: 'open',
},
')': {
name: 'parentheses',
type: 'closed',
},
}
let braceStack = []
input.split('').map(element => {
const braceElement = braceMap[element]
if (braceElement) {
if (braceElement.type === 'open') {
braceStack.push({ ...braceElement })
}
if (braceElement.type === 'closed' && braceStack.length > 0) {
if (braceStack[braceStack.length - 1].name === braceElement.name) {
  if (braceStack[braceStack.length - 1].type === 'open') {
    braceStack.pop()
  } else {
    braceStack.push({ ...braceElement })
  }
} else {
  braceStack.push({ ...braceElement })
}
} else if (braceElement.type === 'closed' && braceStack.length === 0) {
braceStack.push({ ...braceElement })
}
}
})
if (braceStack.length === 0) {
result = true
}else{
result = false
}
console.log(result)
return result;
}