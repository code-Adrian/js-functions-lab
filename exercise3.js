fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
     const completed = json.filter((i, index) => {
        
        return i.completed === false;
             }).map( i => {
                return {
                  userID: `${i.userId}`,
                  title: `${i.title}`
                };
              });

      console.log(completed)
  })
  .catch(function(err) { 
    console.log(err);
  });