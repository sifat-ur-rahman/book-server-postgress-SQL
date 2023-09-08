const express = require('express');

const PORT = 5000
const app = express()
app.use(express.json())


//GET all books
app.get('/books', async(req,res)=>{
    try {
        res.status(200).json({message:'Get all Books'})
    } catch (error) {
        res.json({error: error.message})
    }

})

// GET a book by id
app.get('/books/:id', async(req,res)=>{
    try {
        const {id} = req.params
        res.status(200).json({message:`Specific book is returned with id ${id}`})
    } catch (error) {
        res.json({error: error.message})
    }

})

//POST books
app.post('/books', async(req,res)=>{
    try {
        const {name, description} = req.body
        res.status(200).json({message:`Books was create  ${name} & ${description}`})
    } catch (error) {
        res.json({error: error.message})
    }

})

// DELETE books by id
app.delete('/books/:id', async(req,res)=>{
    try {
        const {id} = req.params
        res.status(200).json({message:`Specific book is deleted with id ${id}`})
    } catch (error) {
        res.json({error: error.message})
    }

})

//PUT (update) a book by id






app.listen(PORT, ()=>{
    console.log(`postgress SQL Book server is running at ${PORT}`)

})