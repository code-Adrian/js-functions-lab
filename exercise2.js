fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    const completed = json.map( i => {
        return {
          title: `${i.title}`
        };
      });
    
      const completedArr = completed.map(i => i.title);
     completed.forEach( (todo, index) => {
      console.log(`${completedArr}`)
    })
  })
  .catch(function(err) { 
    console.log(err);
  });