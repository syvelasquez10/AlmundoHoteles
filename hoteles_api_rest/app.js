const express = require('express')
const app = express()
var cors = require('cors')

app.use(cors())

var bd;

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var hotelSchema = new Schema({
    id: String,
    name: String,
    stars: Number,
    price: Number,
    image: String,
    amenities:[String]
});

var Hotel = mongoose.model('hotel', hotelSchema);

// Connect to the db
mongoose.connect('mongodb://localhost:27017/hoteles');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("Conectado a la base de datos");
});

app.get('/cargar_bd', function (req, res) {
    var fs = require('fs');
    var jsonObj;
    var datosCargados = '';
    fs.readFile('data.json', 'utf8', function (err, data) {
        if (!err) {
            var jsonArray = JSON.parse(data);
            var hotel = null;
            for(var i = 0; i < jsonArray.length; i++) {
                var hotelJson = jsonArray[i];
                hotel = new Hotel(hotelJson);
                hotel.save(function (err, hotel) {
                    if (err) return console.log(err);
                    datosCargados = datosCargados + ',' + hotel;
                    console.log(hotel);
                });
            }
            res.send("Los siguientes datos fueron cargados de forma exitosa: "+ datosCargados); 
        } else {
            console.log("Problemas leyendo el archivo json");
        }
    });
});

app.get('/hoteles', function (req, res) {
    Hotel.find({}, function(err, docs) {
        if (!err){ 
            res.send(JSON.stringify(docs));
        } else {
            console.log(err);
        }
    });
});

app.get('/hoteles/:name', function (req, res) {
    var re = new RegExp(req.params.name,"gi");
    Hotel.find({name: re}, function(err, docs) {
        if (!err){ 
            res.send(JSON.stringify(docs));
        } else {
            console.log(err);
        }
    });
});

app.get('/hoteles/stars/:cantidad', function (req, res) {
    Hotel.find({stars: req.params.cantidad}, function(err, docs) {
        if (!err){ 
            res.send(JSON.stringify(docs));
        } else {
            console.log(err);
        }
    });
});

app.listen(3000, () => console.log('El Hoteles API REST esta escuchando el puerto 3000'));