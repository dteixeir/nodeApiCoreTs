import { AuthController, BaseController } from './Controllers';
import { Classes } from './domain/';

export class Routes {
  // public Routes: Map<string, classes.Route>;
  public Routes: Array<Classes.Route>;

  constructor(routes: Array<Classes.Route>) {
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