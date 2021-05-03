const cors = require('cors');
const express = require('express');

const app = express();
app.use(cors());
app.options('*', cors());

const port = 8085;

app.get('/', (req, res, next) => {
    res.send('welcome to my api ...');
});


//suma 

app.get('/suma', (req, res, next) => {
    const num1 = req.query.num1;
    const num2 = req.query.num2;

    const r = parseFloat(num1) + parseFloat(num2);
    var objResult = {
        result: r
    }
    res.send(objResult);
});

//resta 

app.get('/resta', (req, res, next) => {
    const num1 = req.query.num1;
    const num2 = req.query.num2;

    const r = parseFloat(num1) - parseFloat(num2);
    var objResult = {
        result: r
    }
    res.send(objResult);
});

//division 

app.get('/division', (req, res, next) => {
    const num1 = req.query.num1;
    const num2 = req.query.num2;

    const r = parseFloat(num1) / parseFloat(num2);
    var objResult = {
        result: r
    }
    res.send(objResult);
});

//division 

app.get('/cuadrado', (req, res, next) => {
    const num1 = req.query.num1;
    const num2 = req.query.num2;

    // utilizamos la propiedad pow de la libreria math para hacer el calculo
    const r = Math.pow(parseFloat(num1), parseFloat(num2));
    var objResult = {
        result: r
    }
    res.send(objResult);
});

//division 

app.get('/sqrt', (req, res, next) => {
    const num1 = req.query.num1;
    const num2 = req.query.num2;

    // utilizamos la propiedad sqrt de la libreria math para hacer el calculo
    const r = Math.sqrt(parseFloat(num1));
    var objResult = {
        result: r
    }
    res.send(objResult);
});


//multiplicacion 

app.get('/multiplicacion', (req, res, next) => {
    const num1 = req.query.num1;
    const num2 = req.query.num2;

    // utilizamos la propiedad sqrt de la libreria math para hacer el calculo
    const r = parseFloat(num1) * parseFloat(num2);
    var objResult = {
        result: r
    }
    res.send(objResult);
});



app.listen(port, () => 
    console.log('listening on port ' + port)
);