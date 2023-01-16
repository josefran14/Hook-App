// const addArray = (array, shift) =>{

//     if(shift !== 0){
//         let primerCorte = array[0].splice(0, shift)
//         let segundoCorte = array[1].splice(-shift)
//         let corte = array[0]
//         let corte2 = array[1]
//         let result = corte.map((item, index) => item + corte2[index])
//         return [...primerCorte, ...result, ...segundoCorte]
//     }else{
//         let corte = array[0]
//         let corte2 = array[1]
//         return  corte.map((item, index) => item + corte2[index])
//     }
// }

const addArray = (array, shift) => {
  return array.reduce((acc, element, index) => {
    let indexAcc = shift;
    if (acc.length === element.length) {
      acc = acc.map((item, index) => {
        if (index > indexAcc) {
          item + element[index];
          indexAcc + shift;
        }
      });
    } else {
      acc = acc.map((item, index) => {
        if (index > indexAcc) {
          item + element[index];
          indexAcc + shift;
        }
      });
    }
    return acc
});
};

console.log(addArray([[1, 2, 3, 4, 5, 6],[7, 7, 7, -7, 7, 7],[1, 1, 1, 1, 1, 1],],3));
//[1,2,3,11,12,13,-6,8,8,1,1,1]

// return array.reduce((acc, element, index) => {
//     return acc.map((item, index) => {
//       if (index >= shift) {
//         return item + element[index];
//       }else{
//         return item
//       }
//     });
//   });
