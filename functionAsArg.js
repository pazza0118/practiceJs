const arg1 = 5
const arg2 = 6
const arg3 = 7

// Variable = Regular Function Definition
const functionDefinition1 = function(para1, para2){
  return para1 + para2
}
console.log(functionDefinition1(arg1, arg2))


// Variable = Regular Function Call
const functionDefinition2 = (para1, para2) => {
  return para1 + para2
}
const functionCall2 = functionDefinition2(arg1, arg2)
console.log(functionCall2)


// Variable = function call with another function definition as arg
const functionDefinition3 = (para3, para1and2) => {
  return para3 + para1and2(arg1,arg2)
}
const functionCall3 = functionDefinition3(arg3, (para1, para2) => {
  return para1 + para2
}) 
console.log(functionCall3)