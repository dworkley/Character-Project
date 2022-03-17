var express = require('express');
var mysql = require('mysql');

 
var con = mysql.createConnection({
    host: "mysqlserver-cei.database.windows.net",
    //host: "localhost",
    //port: '1433', //port found on azure conection strings page
    //port: '3306', //from the console 
    user: "Azureuser",
    password: "Ceicei42",
    //user: 'root',
    //password: 'rootuser',
    //database: "mySampleDatabase"
});

con.connect(function(err){
    if (err) throw err;
    console.log("Connection Success !")
});
