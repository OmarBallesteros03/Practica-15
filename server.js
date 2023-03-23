const express = require('express'); //inyeccion de la dependencia
let app = express();
let PORT = process.env.PORT || 3000; //definicion de puerto escucha
app.use('/assets', express.static(__dirname + '/public')); //contenido estatico

app.use(express.urlencoded({extended: false})); 

app.set('view engine', 'ejs');

app.get('/student', function (req, res) {
    let t=req.params.id
    res.render('student');
});

app.post('/addStudent', function (req, res){
    res.render( 'displayData',{ nombre: req.body.nombre,  //renderizacion de datos
                                edad: req.body.edad,
                                nss: req.body.nss,
                                tipoSangre: req.body.tipoSangre});
});

app.listen(PORT);