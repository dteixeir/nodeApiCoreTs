import { Schema } from 'mongoose';

export class Route {
  public Route: string;
  public Controller: any;
  public Model: Schema;
  public HttpActions: {
    GET: boolean,
    PUT: boolean,
    POST: boolean,
    DELETE: boolean
  };

  constructor(route: string, controller: any, model: any, httpActions: any) {
    this.Route = route;
    this.Controller = controller;
    this.Model = model;
    this.HttpActions = httpActions;
  }
};