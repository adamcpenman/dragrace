const db = require("../data/db-config")

 function getQueens() {
    return db("the_queens")
}

async function getSeasons(id) {
    const [quote] = await db("the_quotes as q")
        .where("q.id", id)
        .join("the_queens as u", "u.id","q.queens_id")
        .select("u.queens_name", "q.quotes")
        return {...quote}
}

module.exports = {
    getQueens,
    getSeasons,
}