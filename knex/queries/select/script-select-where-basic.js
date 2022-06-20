const knex = require('../../config/database');

const select = knex('users as u').select('id', 'first_name')
    .where('id', '=', 2)
    .andWhere('first_name', '=', 'Leon')
    .orWhere('id', '=', 3);

select.then(data => {
    for (const user of data) {
        console.log(user);
    };
}).catch(e => {
    console.log('ERRO:', e.message);
}).finally(() => {
    knex.destroy();
});