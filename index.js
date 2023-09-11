const arr = [
    { id: 1, name: "Lizzy" },
    { id: 2, name: "Hazel" },
    { id: 3, name: "John" },
    { id: 4, name: "Peter" },
    { id: 5, name: "Hapiness" },
  
  ];
  
  function deleteObjectsById(arr, idToDelete) {
    return arr.filter(item => item.id !== idToDelete);
  }
  
  const idToDelete = 3;
  const newArray = deleteObjectsById(arr, idToDelete);
  
  console.log(newArray);
