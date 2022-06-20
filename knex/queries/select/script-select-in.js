const knex = require('../../config/database');
const selectIn = knex('users')
    .select('id', 'first_name')
    .whereIn('id', [10, 15, 20, 25]);

console.log(selectIn.toString());

selectIn.then((data) => {
    console.log(data);
}).catch((e) => {
    console.log(e.message);
}).finally(() => {
    knex.destroy();
});