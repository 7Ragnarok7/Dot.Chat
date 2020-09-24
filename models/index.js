var http = require('http');
const conn = require('../configs/db-config');
var express = require('express');
var server = http.createServer(function(request, response){

});

conn.query('Select * from USERS;', function(err, result) {
  console.log(result);
} )