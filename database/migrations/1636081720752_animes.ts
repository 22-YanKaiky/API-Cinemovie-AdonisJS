import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Animes extends BaseSchema {
  protected tableName = 'animes'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.uuid('guid').index()
      table.string('name', 100).unique().notNullable()
      table.string('genre', 800).notNullable()
      table.integer('seasons').notNullable()
      table.integer('episodes').notNullable()
      table.integer('year').notNullable()
      table.string('direction').notNullable()
      table.string('synopsis').notNullable()
      table.string('folder', 500).notNullable()
      table.string('trailer').notNullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
