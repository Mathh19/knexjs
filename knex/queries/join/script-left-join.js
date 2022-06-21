const knex = require('../../config/database');

const leftJoin = knex('users as u')
    .select('u.id as uid', 'p.id as pid', 'p.bio', 'u.first_name')
    .leftJoin('profiles as p', 'u.id', 'p.user_id')
    .where('first_name', 'like', '%a')
    .orderBy('u.id','asc')
    .limit(5);

console.log(leftJoin.toString());

leftJoin.then((data) => {
    console.log(data);
}).catch((e) => {
    console.log(e.message);
}).finally(() => {
    knex.destroy();
})