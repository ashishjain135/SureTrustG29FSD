fetch("https://dummyjson.com/users")
.then(response=>response.json())
.then(data=>console.log(data))
.catch(error=>console.error(error))