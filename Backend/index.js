const path = require('path');
const connectToMongo=require('./db');
const express = require('express')
var cors = require('cors')
connectToMongo();

const app = express()
const port = 5000
app.use(cors())
app.use(express.json())
// Available Routes

app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))

//Serve Frontend
app.use(express.static(path.join(__dirname, '../Frontend/build')));

app.get('*', (req, res) =>
  res.sendFile(
    path.resolve(__dirname, '../', 'Frontend', 'build', 'index.html')
  )
);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})