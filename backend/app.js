
// //Required frameworks for the task
//  const express = require('express');
//  const bodyParser = require('body-parser');
//  const cors = require('cors');

//  var app = express();

//  app.use(bodyParser.json());
//  app.use(cors());


 
//  const routerConst = require('./routes/index.routes');
//  app.use('/api',routerConst);
// //My node is now listening to the port number 3000.
//  app.listen(3000,() => console.log("server started..."))


 const express = require('express'); //Import the express dependency
const app = express();              //Instantiate an express app, the main work horse of this server
const port = 3000;                  //Save the port number where your server will be listening

//Idiomatic expression in express to route and respond to a client request
app.get('/', (req, res) => {        //get requests to the root ("/") will route here
console.log('test')                                                        //the .sendFile method needs the absolute path to the file, see: https://expressjs.com/en/4x/api.html#res.sendFile 
});

app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port ${port}`); 
});