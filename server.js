import express from 'express'

const app = express()
const port = 5001

const todos = []

app.use(express.json())

app.get('/get-all-todos', (request, response) => {
    response.send(todos)
})

// naya todo banane ke lia
app.post('/add-todo',(request, response)=>{ 
    todos.push(request.body.todo)
    response.send("todo add ho gaya ha")

})

// ye api ko edit ya update karne ke ha 
app.patch('/edit-todo/:id',(request, response)=>{ })

app.delete('/delete-todo/:id',(request, response)=>{ })



// 

app.use((request, response) => {
    response.status(404).send("no route found!")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})