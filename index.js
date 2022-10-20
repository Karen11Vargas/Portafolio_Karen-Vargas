const express = require('express')
const app = express() //Se guarda todo el metodo donde se guarda todas las funicones de express
const port = 3000



//Se puede acceder a los archivo sin importar la ruta donde esten 
const path = require('path') 
app.use('/static', express.static(path.join(__dirname, 'public')))

//Establecer el motor que se va a usar
app.set('view engine', 'ejs')
//Donde van a estar guardadas las vistas
app.set('views', __dirname + '/views')


//El establecimiento de las rutas basicas que tiene eñ proyecto

app.get('/', (req, res) => {
  console.log(__dirname)
  res.render('index')
})


app.get('/carrera', (req, res) => {
  res.render('carrera')
})

app.get('/pasatiempos', (req, res) => {
  res.render('pasatiempos')
})


//Establecer la ruta al error
app.use((req, res, next) =>{
      res.status(404).sendFile(__dirname + '/public/404.html')
})

//Lo que hace es escuchar a traves de que puerto se esta ejecutando 
app.listen(port, () => {
  console.log(`Acceda al servidos haciendo click aqui http://localhost:${port}`)
})