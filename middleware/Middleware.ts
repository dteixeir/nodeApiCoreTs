// package puts all requests through the middleware in order
import { Authentication, AutoUpdate, Resource, Response } from './Index';
import { IConfiguration } from '../interfaces/';
import { ErrorLogs } from '../domain/collections';
import { StringResource } from '../StringResource';

const _auth = new Authentication();
const _autoUpdate = new AutoUpdate();
const _resource = new Resource();
const _response = new Response();

export class MiddleWare {
  async MiddleWare(req, res, next, collection, actions) {
    try {
      await _auth.Verify(req, res, next);                                    // Authenticate
      req = await _autoUpdate.Update(req, res, next, collection);        // House Keeping properties maintained
      var result = await _resource.resource(req, res, collection, actions);  // Act upon db request
      _response.response(req, res, result, collection);                      // Return proper status codes - maybe more logic in here?
    } catch (err) {
      // If in prod send back generic 400 and log error
      // If dev then send error back
      if (IConfiguration.Environment === 'dev') {
        res.status(400).send({ error: err });
      } else {
        var result: any = await ErrorLogs.create(err);
        res.status(400).send(StringResource.error[ 400 ].resourceFailed);
      }
    }
  }
}
