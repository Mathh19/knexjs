const knex = require('../config/database');

const select = knex('users as u').select('u.email as uemail', 'u.id as uid');

select.then(data => {
    for (const user of data) {
        console.log(user);
    };
}).catch(e => {
    console.log('ERRO:', e.message);
}).finally(() => {
    knex.destroy();
});