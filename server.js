'use strict'
import express from 'express';
import consign from 'consign';
import path from 'path';

const app = express();

consign({cwd: 'server'})
  .include('libs/logs.js')
  .include('libs/config.js')
  .then('routes')
  .include('libs/boot.js')
  .into(app);
