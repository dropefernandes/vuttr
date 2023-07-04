import express from 'express';

import HttpServer from './HttpServer';

export default class ExpressAdapter implements HttpServer {

  app: any;

  constructor () {
    this.app = express();
  }

  register(method: string, url: string, callback: Function): Promise<void> {
    return this.app[method](url, async function (req: any, res: any) {
      const output = await callback(req.query, req.body);
      res.json(output);
    });
  }
  
  async listen(port: number): Promise<void> {
    return this.app.listen(port)
  }
}