const express = require('express');
const app = express();
const path = require('path');
const mainRouter = require('./routers/main')

// recursos estaticos
app.use(express.static('public'));

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use('/', mainRouter);

app.listen(3000, () => {
    console.log(`Servidor corriendo en http://localhost:${3000}`);
})

