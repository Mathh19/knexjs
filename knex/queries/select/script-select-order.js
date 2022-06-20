const knex = require('../../config/database');
const selectOrder = knex('users')
    .select('id', 'first_name')
    .where('first_name', 'like', '___')
    .orWhere('first_name', 'like', '%na')
    .orderBy('id', 'asc')
    .orderBy('first_name', 'desc');

console.log(selectOrder.toString());

selectOrder.then((data) => {
    console.log(data);
}).catch((e) => {
    console.log(e.message);
}).finally(() => {
    knex.destroy();
});