import { Request, Response, Application } from 'express';
import express from "express"


class App {
  public express: express.Application;

  constructor () {
    this.express = express();
    this.routes();
  }
  
  routes(){
    this.express.use(express.static('higharccode'));
    this.express.get('/highArc', (req, res) => {
        res.sendFile('views/index.html', { root : __dirname });
    });
    this.express.get('/bundle.js', (req, res) => {
      res.sendFile('./bundle.js', { root : __dirname });
  });

  }
}
export default new App().express;