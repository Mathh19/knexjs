const knex = require('../../config/database');

const select = knex('users').where('id', '=', 29);
const update = knex('users').update({
    first_name: 'Carlos',
    last_name: 'Mend'
}).where('id', '=', 29);

console.log(select.toString());
console.log(update.toString());

update.then((data) => {
    console.log(data);

    select.then((data) => {
        console.log(data);
    }).catch((e) => {
        console.log(e.message);
    });
}).catch((e) => {
    console.log(e.message);
}).finally(() => {
    knex.destroy();
});