exports.seed = async (knex) => {
    await knex("the_quotes").insert([
        {quotes: "My name is yours, what's Alaska", queens_id: 1},
        {quotes: "If you wish you were me right now, it's natural.", queens_id: 2}
    ])
}

