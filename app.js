const express = require('express')
// const bodyParser = require('body-parser')
const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

const authorRouter = require('./routes/authorRouter')

app.get('/', (req, res) => {
    res.send('<h1>Library System</h1>')
})

app.post('/author-management', authorRouter)

app.use('/author-management', authorRouter)

app.listen(3000,() => {
    console.log('The library app is listening on port 3000!')
})