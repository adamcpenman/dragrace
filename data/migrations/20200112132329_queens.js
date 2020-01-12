
exports.up = async function(knex) {
    await knex.schema.createTable("the_queens", (table) => {
        table.increments('id')
        table.string("queens_name").notNullable()
        table.integer("season").notNullable()
    })
    await knex.schema.createTable("the_quotes", (table) => {
        table.increments("id")
        table.string("quotes").notNullable()
        table.integer("queens_id")
               .notNullable()
               .unsigned()
               .references("id")
               .inTable("the_queens")
               .onDelete("CASCADE")
               .onUpdate("CASCADE") 
    })
    await knex.schema.createTable("queen_quotes", (table) => {
        table.integer("queens_id")
              .unsigned()
              .notNullable()
              .references("id")
              .inTable("the_queens")
        table.integer("quotes_id")
              .unsigned()
              .notNullable()
              .references("id")
              .inTable("the_quotes")  
        table.primary(["queens_id", "quotes_id"])
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("queen_quotes")
    await knex.schema.dropTableIfExists("the_quotes")
    await knex.schema.dropTableIfExists("the_queens")
};
