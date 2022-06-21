const knex = require('../../config/database');

const select = knex('users as u')
    .select('u.first_name')
    .leftJoin('profiles as p', 'u.id', 'p.user_id')
    .count('u.id as total')
    .whereIn('u.id', [62, 105, 10, 11])
    .groupBy('first_name')
    .orderBy('total', 'desc');

console.log(select.toString());

select.then((data) => {
    console.log(data);
}).catch((e) => {
    console.log(e.message);
}).finally(() => {
    knex.destroy();
});