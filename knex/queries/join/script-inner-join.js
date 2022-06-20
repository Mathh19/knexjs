const knex = require('../../config/database');

const innerJoin = knex('users as u')
    .select('u.id as uid', 'p.id as pid', 'p.bio', 'u.first_name')
    .innerJoin('profiles as p', 'u.id', 'p.user_id')
    .where('u.first_name', 'like', '%a')
    .where('u.id', '>', '12')
    .where('u.id', '<', '24')
    .orderBy('u.id', 'asc')
    .limit(5);

console.log(innerJoin.toString());

innerJoin.then((data) => {
    console.log(data);
}).catch((e) => {
    console.log(e.message);
}).finally(() => {
    knex.destroy();
});