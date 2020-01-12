exports.seed = async (knex) => {
    await knex("the_queens").insert([
        {queens_name: "Alaska ThunderFuck 5000", season: "5 & AllStars 2"},
        {queens_name: "Trixie Mattel", season: "7 & AllStars 3"}
    ])
}