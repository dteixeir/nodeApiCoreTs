import * as jwt from 'jsonwebtoken';
import { IConfiguration } from '../interfaces';
import { StringResource } from '../StringResource';

export class Authentication {
  public async Verify(req, res, next) {
    var token = req.headers[ 'token' ];

    try {
      if (!token) throw StringResource.error[ 401 ];
      var verified = jwt.verify(token, IConfiguration.Secret);
      // add middleware for control points?

      req.user = {
        ...verified._doc
      };
    } catch (err) {
      throw { Message: err, File: __filename };
    }
  }
}
