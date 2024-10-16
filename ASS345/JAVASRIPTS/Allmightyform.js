 let root1, root2;

 let a = prompt("Enter the value of a");
 let b = prompt("Enter the value of b");
 let c = prompt("Enter the value of c");

 let discriminent = b * b - 4 * a * c; Math.pow(2)9




 if(discriminent > 0){
   root1 = (-b + Math.sqrt(discriminent)) / (2 * a);
   root2 = (-b - Math.sqrt(discriminent)) / (2 * a); 

   console.log(`The roots of the quadratic equation are ${root1} and ${root2}`);
 }

//  else if(discriminent ==0){
//     root1 = root2 = -b/(2 * a);
// console.log(`The roots of the quadratic equation are ${root1} and ${root2}`);

//  }

//  else{
//     let realPart = (-b / (2 * a)).toFixed(2);
//     let imagPart = (Math.sqrt(-discriminent) / (2 * a)).toFixed(2);
//     console.log(`The roots of the quadratic equation are ${realPart} and ${imagPart}`)
//  }

