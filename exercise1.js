fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
     const completed = json.filter((i, index) => {
        
        return i.completed === true;
             });
     completed.forEach( (todo, index) => {
      console.log(`${todo.title} - ${todo.completed}`)
      
    })
  })
  .catch(function(err) { 
    console.log(err);
  });