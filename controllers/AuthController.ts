import * as jwt from 'jsonwebtoken';
import { IConfiguration } from '../interfaces/';

export class AuthController {
  public Authenticate(app, route, _collection: any) {
    try {
      app.post('/auth', async (req, res, next) => {
        let user = await _collection.findOne({ Username: req.body.username });
        let password = user.get('Password');
        password === req.body.password ? this.success(user, res) : this.failure(res);
      });

      // Return middleware.
      return (req, res, next) => {
        return next();
      };

    } catch (err) {
      throw { Message: err, File: __filename, Collection: _collection.collection.collectionName };
    }
  }

  private success(user, res) {
    try {
      let token = jwt.sign(user, IConfiguration.Secret, { expiresIn: '5h' });
      res.status(200).json({ token: token });
    } catch (err) {
      console.log(err);
    }
  }

  private failure(res) {
    try {
      res.status(400).send({ error: 'raw' });
    } catch (err) {
      console.log(err);
    }
  }
}