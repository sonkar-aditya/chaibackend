// console.log("Chai aur code");
require('dotenv').config()
const express = require('express')
// import express from "express"
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res)=>{
    res.send('adityasonkar')
})

app.get('/login', (req, res)=>{
    res.send('<h1>please login at Chai and code</h1>')
})

app.get('/youtube', (req, res)=>{
    res.send("<h2>Chai aur Code</h2>")
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
}) 