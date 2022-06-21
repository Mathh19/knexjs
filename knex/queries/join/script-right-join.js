const knex = require('../../config/database');

const rightJoin = knex('users as u')
    .select('u.id as uid', 'p.id as pid', 'p.bio', 'u.first_name')
    .rightJoin('profiles as p', 'u.id', 'p.user_id')
    .orderBy('u.id', 'asc')
    .limit(5);

console.log(rightJoin.toString());

rightJoin.then((data) => {
    console.log(data);
}).catch((e) => {
    console.log(e.message);
}).finally(() => {
    knex.destroy();
});