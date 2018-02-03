exports.up = knex => knex.schema
  .createTable("pessoas", tb => {
    tb.increments("idpessoa")
    tb.string("nome")
    tb.string("telefone")
    tb.timestamp("dtnascimeto").notNullable().defaultTo(knex.fn.now())
  })

exports.down = knex => knex.schema
  .dropTable("state")