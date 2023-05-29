

// 1) If obj context is provided at function invocation
const thisNotHardBound = {
  name: "notBound",
  display: function(){
    console.log(this.name)
  }
}
thisNotHardBound.display()   // "notBound"          


// 2) If obj context is not provided at function invocation
const plainFunctionCall = thisNotHardBound.display
plainFunctionCall()         // undefined            -> JS only looks at this line for obj context



// 3) If obj context is not provided at function invocation, but the display method is bound to the obj
const thisHardBound = {
  name: "bound",
  display: function(){
    console.log(this.name)
  }
}
thisHardBound.display = thisHardBound.display.bind(thisHardBound)

const plainFunctionCall2 = thisHardBound.display
plainFunctionCall2()         // "bound" 
