const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 4000;

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.get('/', function(req, res) {
   res.send("Hellow! Express Server");
});

app.post('/enroll', function(req, res){
    console.log(req.body);
    res.status(200).send({"message" : "data Received"});
})

app.listen(PORT, function() {
   console.log("Server is running on PORT number : ", PORT)
});