const { application } = require("express");
const express = require("express");
const server = express(); // app is object of express class and it can have multiple servers
const cors = require("cors");
const bodyparser = require("body-parser"); //used to process data sent in an HTTP request body.
const mongoose = require("mongoose");
const{ toodisplayWork,tooaddWork, tooupdateWork, toodeleteWork,tooupdateStatus} = require("../sirnodejs/controllers/control"); //importing api
//const { json } = require("body-parser");
// connecting with database
mongoose.connect("mongodb://localhost:27017/St2");
mongoose.connection.on("connected",()=>{
    console.log("DataBase CONNECTED");
});

server.use(cors());
server.use(bodyparser.json());
server.use(bodyparser.urlencoded({
    extended: true
  }));

server.get("/getWork", toodisplayWork);
server.post("/createWork", tooaddWork);
server.put("/putWork", tooupdateWork);
server.delete("/deleteWork",toodeleteWork);
server.put("/putStatus",tooupdateStatus);


server.listen(5000,() =>{
    console.log("Server started at port 5000");
});