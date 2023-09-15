// created a constant variable named arrayOfFruits and assigns it an array.
const arrayOfFruits = [
    "Apple 1",
     "Banana 2 ",
    "Orange 3",
    "Mango 4",
  ];
  
  function removeNumbers(arr) {
    // Initialize an empty array to store the cleaned strings.
    const result = []; 
  
    for (let i = 0; i < arr.length; i++) {
      let cleanedString = arr[i];  // Get the current element from the input array.

      // Remove all numeric digits (0-9) from the string using a regular expression.
      cleanedString = cleanedString.replace(/[0-9]/g, '');
  
  // Split the string by hyphens ('-') and check if there are multiple parts.
      const parts = cleanedString.split('-');
      if (parts.length > 1) {
  // If there are multiple parts, take the first part and remove leading spaces.
        cleanedString = parts[0].trim();
      }
  
  // Add the cleaned string to the result array,removing any leading spaces.
      result.push(cleanedString.trim());
    }
  // Return the array containing the cleaned strings.
    return result;
  }
  
  // A new constant variable newArray is declared and assigned the result of calling the removeNumbers 
  // function with arrayOfFruits as its argument.
  const newArray = removeNumbers(arrayOfFruits);
  
  console.log(newArray);
  
  