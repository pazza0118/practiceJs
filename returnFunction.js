const log = (num) => {
  const newNum = num + 5;
  return console.log(`num + 5 is ${newNum}`)
}

const returnLogCall = (num) => {
  return log(num)         // "return log(num) will simply be replaced with everything within log()'s curly braces"
}

const returnLog = () => {
  return log
}

const equivalentToReturnLog = () => {
  return (
    (num) => {
      const newNum = num + 5
      return console.log(`num + 5 is ${newNum}`)
    }
  )
}
const equivalentToReturnLog2 = () => {
  console.log("hi")
  return (
    function(num){
      const newNum = num + 5
      return console.log(`num + 5 is ${newNum}`)
    }
  )
}



// log(10)                  // Original function
// returnLogCall(10)        // Equivalent to original function
// returnLog()              // Only returns original function ref, does not call it
// equivalentToReturnLog()  // Equivalent to returnLog(), different from returnLogCall(#)
const newFunc = equivalentToReturnLog2()  // runs the function, but not the returned function
newFunc(5)                                // runs the returned function