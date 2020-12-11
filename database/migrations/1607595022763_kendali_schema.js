"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class KendaliSchema extends Schema {
  up() {
    this.create("kendalis", (table) => {
      table.increments();
      table.boolean("CH_1");
      table.boolean("CH_2");
      table.timestamps();
    });
  }

  down() {
    this.drop("kendalis");
  }
}

module.exports = KendaliSchema;
