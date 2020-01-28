
exports.up = async function(knex) {
  await knex.schema.alterTable('the_queens', (table) => {
      table.string("img_url")
  })
};

exports.down = async function(knex) {
  await knex.schema.alterTable('the_queens', (table) => {
      table.dropColumn("img_url")
  })
};
