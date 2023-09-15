// created Objects with id property
const arr = [
    { id: 1, name: "Lizzy" },
    { id: 2, name: "Hazel" },
    { id: 3, name: "John" },
    { id: 4, name: "Peter" },
    { id: 5, name: "Hapiness" },
  
  ];
  // function will call deleteObjectsById and function takes two parameters,this parameter is expected to be an array of objects.
  function deleteObjectsById(arr, idToDelete) {

    // the filter method in JavaScript,create a new array that contains all elements from the arr array whose id property does not match the idToDelete value.
    return arr.filter(item => item.id !== idToDelete);
  }
  // This defines a constant variable idToDelete and assigns it the value 3. This is the id value that you want to use as a filter -
  //  to remove objects from the arr.
  const idToDelete = 3;

  // A new constant variable newArray is defined.This variable is assigned the result of calling the deleteObjectsById 
  // function with two arguments. This argument is the array containing objects that you want to filter and idToDelete is the argument of the id
  //  value that you want to use for filtering.
  const newArray = deleteObjectsById(arr, idToDelete);
  
  // this will print the filtered array to the console, allowing you to give the result.
  console.log(newArray);
 