const knex = require('../config/database');
const selectLike = knex('users')
    .select('id', 'first_name')
    .where('first_name', 'like', '___')
    .orWhere('first_name', 'like', '%na');

console.log(selectLike.toString());

selectLike.then((data) => {
    console.log(data);
}).catch((e) => {
    console.log(e.message);
}).finally(() => {
    knex.destroy();
});