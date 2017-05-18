import * as bcrypt from 'bcryptjs';
import { Classes, Collections } from './domain/';
import { AuthController, BaseController } from './Controllers';

export const setUp = {
  appSettings: {
    "secret": "buahahahaSuckers!",
    "database": process.env.NODE_ENV ? 'mongodb://danny:password@ds019766.mlab.com:19766/anime' : 'mongodb://localhost/taskList',
    "environment": process.env.NODE_ENV || 'dev',
    "salt": bcrypt.genSaltSync(10)
  },
  routes: [
    new Classes.Route('auth', AuthController, Collections.Users, { GET: false, PUT: false, POST: true, DELETE: false }),
    new Classes.Route('role', BaseController, Collections.Roles, { GET: true, PUT: true, POST: true, DELETE: false }),
    new Classes.Route('task', BaseController, Collections.Tasks, { GET: true, PUT: true, POST: true, DELETE: false }),
    new Classes.Route('taskList', BaseController, Collections.TaskLists, { GET: true, PUT: true, POST: true, DELETE: false }),
    new Classes.Route('user', BaseController, Collections.Users, { GET: true, PUT: true, POST: true, DELETE: false })
  ]
}
