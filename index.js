const express = require('express');
const path = require('path');
const app = express();

// Configuración
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/static', express.static(path.join(__dirname, 'public')))

// Rutas
app.use('/', require('./routes/index'));
app.use('/contact', require('./routes/contact'));


// Vistas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Establecer la ruta al error
app.use((req, res, next) =>{
  res.status(404).sendFile(__dirname + '/public/404.html')
})

//Lo que hace es escuchar a traves de que puerto se esta ejecutando 
app.listen(PORT, () => {
  console.log(`Acceda al servidos haciendo click aqui http://localhost:${PORT}`)
})