import { ObjectID } from 'mongodb';
import { bcrypt } from 'bcryptjs';
import { config } from '../interfaces';

export class AutoUpdate {
  private HashPassword(req) {
    if (req.body.Password) {
      req.body.Password = bcrypt.hashSync(req.body.Password, config.Salt);
    }

    return req;
  }

  public async Update(req, res, next, collection) {
    try {
      switch (req.originalMethod) {
        case 'POST':
          req.body = {
            ...req.body,
            CreatedBy: new ObjectID(req.user._id),
            UpdatedBy: new ObjectID(req.user._id)
          };
          req = collection.collection.collectionName === 'users' ? this.HashPassword(req) : req;
          break;

        case 'PUT':
          req.body = {
            ...req.body,
            UpdatedBy: new ObjectID(req.user._id)
          };

          req = collection.collection.collectionName === 'users' ? this.HashPassword(req) : req;
          break;

        case 'DELETE':
          req.body = {
            ...req.body,
            UpdatedBy: new ObjectID(req.user._id),
            IsDeleted: true,
            IsActive: false
          };
          break;
      }

      return req;

    } catch (err) {
      throw { Message: err, File: __filename };
    }
  }
}
