const express = require('express');
const app = express();
const path = require('path')
const mainRouter = require('./routes/main');

// recurso estaticos
app.use(express.static('public'));

// configuracion de vista 
app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'ejs');


// rutas
app.use('/', mainRouter);


// servidor
app.listen(3000, () => console.log('server running'));

