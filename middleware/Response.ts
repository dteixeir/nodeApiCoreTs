import { _ } from 'lodash';

export class Response {
  response(req: any, res: any, result: any, collection: any) {
    try {
      switch (req.originalMethod) {
        case 'GET':
          res.status(200).send(result);
          break;

        case 'PUT':
          if (result) {
            res.status(200).send(result);
          } else {
            throw { Message: "HTTP:PUT No Returned Object?", File: __filename, Collection: collection.collection.collectionName };
          }

          break;

        case 'POST':
          if (result) {
            res.status(201).send(result);
          } else {
            throw { Message: "HTTP:POST No Returned Object?", File: __filename, Collection: collection.collection.collectionName };
          }

          break;

        case 'DELETE':
          if (_.isEmpty({ result })) {
            res.status(204).send();
          } else if (result.IsDeleted) {
            res.status(200).send(result);
          } else {
            throw { Message: "HTTP:DELETE error", File: __filename, Collection: collection.collection.collectionName };
          }

          break;
      }
    } catch (err) {
      throw { Message: err, File: __filename, Collection: collection.collection.collectionName };
    }
  }
}
