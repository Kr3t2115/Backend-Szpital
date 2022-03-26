const express = require('express')
const cors = require('cors')
const lekarze = require('./routes/routesLekarze')
const pacjenci = require('./routes/routesPacjenci')
const leki = require('./routes/routesLeki')
const recepta = require('./routes/routesRecepta')
const port = 3000
const app = express()

app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});

app.use(express.json())

app.use('/api/lekarze', lekarze)

app.use('/api/pacjenci', pacjenci)

app.use('/api/leki',  leki)

app.use('/api/recepta',  recepta)

app.get('/', (req,res) => {
    res.send('Hello')
})

app.listen(port, () => {
    console.log(`Server dziala na porcie: ${port}`)
})



