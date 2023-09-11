const arrayOfFruits = [
    "Apple 1",
     "Banana 2 ",
    "Orange 3",
    "Mango 4",
  ];
  
  function removeNumbers(arr) {
    const result = [];
  
    for (let i = 0; i < arr.length; i++) {
      let cleanedString = arr[i];
      
      cleanedString = cleanedString.replace(/[0-9]/g, '');
  
      const parts = cleanedString.split('-');
      if (parts.length > 1) {
        cleanedString = parts[0].trim();
      }
  
      result.push(cleanedString.trim());
    }
  
    return result;
  }
  
  const newArray = removeNumbers(arrayOfFruits);
  
  
  console.log(newArray);
  
  