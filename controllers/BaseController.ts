import { MiddleWare } from '../middleware/';
let mw = new MiddleWare();

export class BaseController {
  constructor(app, route: string, _collection: any, actions) {
    app.get(`/${route}/:id?/:populate?`, async (req, res, next) => {
      await mw.MiddleWare(req, res, next, _collection, actions);
    });

    app.put(`/${route}/:id`, async (req, res, next) => {
      await mw.MiddleWare(req, res, next, _collection, actions);
    });

    app.post(`/${route}`, async (req, res, next) => {
      await mw.MiddleWare(req, res, next, _collection, actions);
    });

    app.delete(`/${route}/:id/:hardDelete?`, async (req, res, next) => {
      await mw.MiddleWare(req, res, next, _collection, actions);
    });

    //Return middleware.
    return (req, res, next) => {
      next();
    };
  }
}