//Window scope
// a = 'JavaScript' // is a window scope this found anywhere
// b = 10 // this is a window scope variable
// function letsLearnScope() {
//   console.log(a, b)
//   if (true) {
//     console.log(a, b)
//   }
// }
// console.log(a, b) // accessible
// letsLearnScope();

//Global scope
let a1 = 'JavaScript' // is a global scope it will be found anywhere in this file
let b1 = 10 // is a global scope it will be found anywhere in this file
function letsLearnScope() {
  console.log(a1, b1) // JavaScript 10, accessible
  if (true) {
    let a1 = 'Python' //Local Scoped[Inside if-else block]
    let b1 = 100
    console.log(a1, b1) // Python 100
  }
  console.log(a1, b1)
}
letsLearnScope()
console.log(a1, b1) // JavaScript 10, accessible

//Difference between var && let,const
function letsLearnScope() {
    var gravity = 9.81
    console.log(gravity)
  
  }
  // console.log(gravity), Uncaught ReferenceError: gravity is not defined
  
  if (true){
    var gravity = 9.81
    console.log(gravity) // 9.81
  }
  console.log(gravity)  // 9.81
  
  for(var i = 0; i < 3; i++){
    console.log(i) // 0, 1, 2
  }
  console.log(i) // 3
  
