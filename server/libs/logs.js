'use strict'
import morgan from 'morgan';

module.exports = app => {
  app.use(morgan('dev'));
};
