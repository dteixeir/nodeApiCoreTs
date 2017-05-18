import { Configuration, Route } from '../domain/classes';
import * as settings from '../appSettings';

interface IConfig {
  Secret: string;
  Database: string;
  Environment: string;
  Salt: string;
  Routes: Array<Route>;
}

export let IConfiguration: IConfig = new Configuration(settings.setUp.appSettings, settings.setUp.routes);
