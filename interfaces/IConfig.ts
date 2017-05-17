import { Configuration } from '../domain/classes/';

interface IConfig {
  Secret: string;
  Database: string;
  Environment: string;
  Salt: string;
}

export let config: IConfig = new Configuration();
