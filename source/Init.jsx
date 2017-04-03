export const state = {
  showCalculator: true,
  cardPosition: { 
    x: (window.innerWidth / 2) - 200,
    y: (window.innerHeight / 2) - 250
  },
  mouseDownPosition: {
    exists: false,
    x: 0,
    y: 0
  },
  screen: "",
  leftHandSide: "",
  rightHandSide: "",
  calculation: {
    number: "",
    then: "="
  }
}



// A calculation is defined as..
// 
// { number : string
// , then : 
//     "=" or 
//     { operation : "*" or "/" or "+" or "-"
//     , number: string
//     , then :
//         "=" or 
//         { operation : "*" or "/" or "+" or "-"
//         , number: string
//         , then :
//             "=" or
//             { operation : "*" or "/" or "+" or "-"
//             , number: string
//             , then :
//                 ...
//             } 
//         } 
//     } 
// }