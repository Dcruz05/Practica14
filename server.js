let express=require('express'); //importamos express

let app=express(); //Definimos una variable para usar express
let port=process.env.PORT || 3000; //
app.use('/assets', express.static(__dirname+'/public')); // Usaramos assets como una ruta para no poner toda la direccion donde se cuentra el css
app.set('view engine', 'ejs'); // Usamos el motor de vistas ejs para poder mostrar nuestras views

app.use('/',(req, res, next) => {
    console.log('Request URL:' + req.url);
    next()
});

app.get('/',  (req, res) => { // Ruta index del servidor
    res.render('index'); 
});

app.get('/person/:id',  (req, res) => { 
    res.render('person',{ID:req.params.id,msg: req.query.msg ,times: req.query.times}); 
    // para obtener el contenido de una query string tememos que definir las variables que vamos a renderizar cuando accedamos a la pagina
    // por ejemplo msg = req.query.msg msg se debe definir en la busqueda ?msg="test"
    // A comparacion de params los parametros se obtienen despues de un / usando : (/:) y el nombre de la variable que usaremos para almacenar 
    // y el query string se define desde el redireccionamiento de la pagina despues de un ?nombreVariable=  
});
app.listen(port);


