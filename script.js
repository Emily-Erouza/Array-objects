const fruits = [{ apple: 1 }, { banana: 2 }, { orange: 3 }];

const index = fruits.findIndex(elem => {
 
  for (const value in elem) {
    if (elem.hasOwnProperty(value) && elem[value] > 2) {
      return true;
    }
  }
  return false;
});

console.log(index); 
   
 
  