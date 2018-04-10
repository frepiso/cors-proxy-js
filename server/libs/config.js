'use strict'
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

module.exports = app => {
  //port
  app.set('port', process.env.PORT || 3000);  
  //json
  app.set('json spaces', 4);
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended:true}));
};
