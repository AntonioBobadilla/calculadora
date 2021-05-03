// import express and cors

const cors = require('cors');
const express = require('express');

//create the express app with cors enabled 

const app = express();
app.use(cors());
app.options('*', cors());

//define port

const port = 8085;

// define root controller (GET)

app.get('/', (req,res,next) => {
	res.send('welcome to my api...');
});

// define GET controller for triangulo
app.get('/triangulo', (req,res,next) => {
	var base = req.query.base;
	var altura = req.query.altura;
	console.log(base);
	console.log(altura);

	var area = (base*altura)/2;
	var objResult = {
		area: area
	}
	res.send(objResult);
});

app.listen(port, () =>
	console.log('listening on port 8085')
);