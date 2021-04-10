const path = require('path');
const express = require('express');
const app = express();

const indexRoutes = require('./routes/index');

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
//app.set('views', 'src/views');//falta ruta de carpetas para reconocer los controladores

app.use('/', indexRoutes);

app.listen(app.get('port'), ()=>{
    console.log('Servidor en puerto 3000');
});