const express = require('express');
const app = express();
const hbs = require('hbs');

//Helpers HBS
require('./helpers/helper');

//change port deploy or local
const port = process.env.PORT || 3000; 

// Express HBS engine
app.use(express.static(__dirname + '/public'));//ruta de archivos estaticos

hbs.registerPartials(__dirname + '/views/partials'); //ruta de los partials
app.set('view engine', 'hbs'); //renderizador de vistas para express

app.get('/', (req, res)=> {
    res.render('home', { // renderizar el home y pasar el objeto con los datos
        name:'Juan Pablo Valencia Gil',
    });
});

app.get('/about', (req, res)=> {
    res.render('about', { // renderizar el home y pasar el objeto con los datos
        name:'Juan Pablo Valencia',
    });
});

app.listen(port, ()=> {
    console.log('Escuchando peticiones en el puerto' + port);
});