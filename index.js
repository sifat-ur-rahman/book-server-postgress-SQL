const express = require('express');

const PORT = 5000
const app = express()


//GET all books
app.get('/books', async(req,res)=>{
    try {
        res.status(200).json({message:'Get all Books'})
    } catch (error) {
        res.json({error: error.message})
    }

})

// GET a book by id


//POST books


// DELETE books by id


//PUT (update) a book by id






app.listen(PORT, ()=>{
    console.log(`postgress SQL Book server is running at ${PORT}`)

})