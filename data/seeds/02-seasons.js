exports.seed = async (knex) => {
    await knex("the_seasons").insert ([
        {season_num:"1st"},
        {season_num:"2nd"},
        {season_num:"3rd"},
        {season_num:"4th"},
        {season_num:"5th"},
        {season_num:"6th"},
        {season_num:"7th"},
        {season_num:"8th"},
        {season_num:"9th"},
        {season_num:"10th"},
        {season_num:"11th"},
        {season_num:"AllStars 1"},
        {season_num:"AllStars 2"},
        {season_num:"AllStars 3"},
        {season_num:"AllStars 4"},
    ])
}        