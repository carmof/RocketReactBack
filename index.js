const express = require('express')

const app = express()


app.get('/', (req, res, next) => {
    console.log('hello')
    res.status(200).json({ msg: 'Felipe' })
})
app.listen(3333)