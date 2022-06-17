const knex = require('../config/database');
const selectBetween = knex('users').select('id', 'first_name')
    .whereBetween('id', [80, 83])
    .orWhereBetween('id', [10, 15]);

console.log(selectBetween.toString());

selectBetween.then((data) => {
    console.log(data);
}).catch((e) => {
    console.log(e.message);
}).finally(() => {
    knex.destroy();
});
