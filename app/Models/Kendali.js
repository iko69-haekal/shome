"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Kendali extends Model {
  static get table() {
    return "kendalis";
  }
  static get primaryKey() {
    return "id";
  }
}

module.exports = Kendali;
