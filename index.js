const express = require('express')
const path = require('path')
const app = express()
const port = 3000

// app.get('/', (req, res) => {
//   res.send('/web/halaman1.html')
// })
app.use(express.static(path.join(__dirname, 'web')))
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'web/',))
})

app.get('/hello', (req, res) => {
    res.send ('HeelloWorld!')
  })
  

app.post('/login', (req, res) => {
    res.send('login Berhasil')

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})