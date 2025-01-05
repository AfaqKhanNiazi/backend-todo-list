import express from "express";

const app = express();
const port = process.env.PORT || 5001;

const todos = [];

// to convert body into json
app.use(express.json());

app.get("/get-all-todos", (request, response) => {
    const message = !todos.length?"todos empty":"ye lo sub todos"
  response.send({data:todos,message:message});
});

// naya todo banane ke lia
app.post("/add-todo", (request, response) => {
    const obj = { todoContent: request.body.todo, 
        id: String(new Date().getTime()),
     }
  todos.push(obj);

  response.send({message:"todo add ho gaya ha",data:obj});
});

// ye api ko edit ya update karne ke ha
app.patch("/edit-todo/:id", (request, response) => {
    
    const id = request.params.id

    let isFound = false
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id === id) {
            // ider product mil chuaka ha (ab ap use product ko edit kar skhte ho)
            todos[i].todoContent = request.body.todoContent
            isFound = true
            break;
        }
        
    }

    if(isFound){
    response.status(201).send({
        data:{ todoContent: request.body.todoContent,id: id,},
        message:'todo updated successfully!'})
    }else{
    response.status(200).send({data:null,message:'todo not found'})

    }

    
});

app.delete("/delete-todo/:id", (request, response) => {
    const id = request.params.id

    let isFound = false
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id === id) {
            // ider product mil chuaka ha (ab ap use product ko delete kar skhte ho)
            todos.splice(i,1)
            isFound = true
            break;
        }
        
    }

    if(isFound){
    response.status(201).send({
        // data:{ todoContent: request.body.todoContent,id: id,},
        message:'todo deleted successfully!'})
    }else{
    response.status(200).send({data:null,message:'todo not found'})

    }

});

//

app.use((request, response) => {
  response.status(404).send("no route found!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
