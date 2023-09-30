const express = require('express') // express 
const app = express() //app
const port = 3001

app.get('/', (req, res) => {
    res.send('This is a message')
})

app.listen(port)