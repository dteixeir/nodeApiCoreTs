import { AuthController, BaseController } from './Controllers';
import { Document, Schema, Model, model } from "mongoose";
//import * as models from './classes/';
//import * as classes from './classes/';
import { Classes, Collections } from './domain/';

let routes: Array<Classes.Route> = [
  new Classes.Route('auth', AuthController, Collections.Users, { GET: false, PUT: false, POST: true, DELETE: false }),
  new Classes.Route('role', BaseController, Collections.Roles, { GET: true, PUT: true, POST: true, DELETE: false }),
  new Classes.Route('task', BaseController, Collections.Tasks, { GET: true, PUT: true, POST: true, DELETE: false }),
  new Classes.Route('taskList', BaseController, Collections.TaskLists, { GET: true, PUT: true, POST: true, DELETE: false }),
  new Classes.Route('user', BaseController, Collections.Users, { GET: true, PUT: true, POST: true, DELETE: false })
];

export class Routes {
  // public Routes: Map<string, classes.Route>;
  public Routes: Array<Classes.Route>;

  constructor() {
    this.Routes = new Array<Classes.Route>();
    this.Routes = routes;
  }

  public async createRoute(app: any, routeConfig: Classes.Route) {
    return await this.getController(app, routeConfig);
  }

  private async getController(app, routeConfig: Classes.Route) {
    switch (routeConfig.Route) {
      case 'auth':
        return await new AuthController().Authenticate(app, routeConfig.Route, routeConfig.Model);

      default:
        return await new BaseController(app, routeConfig.Route, routeConfig.Model, routeConfig.HttpActions);
    }
  }
}