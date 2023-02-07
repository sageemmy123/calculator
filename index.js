//Call the modules
const Hapi = require('hapi');

//Addresses and Ports
const Address = 'localhost';
const port = 3000;

//Create the Server
const server = Hapi.Server({
    host: Address,
    port: port
});

//Routes
require('./routes/routes')(server);
//Start Server
const init = async ()=>{
    await server.start();
    console.log("Server running on port:" +port);
}

//Start App
init();
