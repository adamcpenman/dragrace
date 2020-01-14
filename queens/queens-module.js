const db = require("../data/db-config")

 function getQueens() {
    return db("the_queens")
}

async function getQueenSeason(id) {

    const kween = await db("the_queens as q")

   .where("q.id", id)
   .join("queens_seasons as qs", "q.id", "qs.queen_id")
   .join("the_seasons as s", "s.id", "qs.season_id")
   .select("q.queens_name", "s.season_num")
    return kween
}

async function getSingleSeason(id) {

    const kween = await db("the_seasons as s")

   .where("s.id", id)
   .join("queens_seasons as qs", "s.id", "qs.season_id")
   .join("the_queens as q", "q.id", "qs.queen_id")
   .select("q.queens_name", "s.season_num")
    return kween
}

// async function getQuotes(id) {
//     const [quote] = await db("the_quotes as q")
//         .where("q.id", id)
//         .join("the_queens as u", "u.id","q.queens_id")
//         .select("u.queens_name", "q.quotes")
//         return {...quote}
// }

module.exports = {
    getQueens,
    getQueenSeason,
    getSingleSeason,
    // getQuotes,
}