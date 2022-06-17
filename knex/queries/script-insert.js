const knex = require('../config/database');

const data = [
    {
        first_name: 'Joana',
        last_name: 'B.',
        email: '2@email.com',
        password_hash: '4_hash',
        salary: 2460.20
    },
    {
        first_name: 'Rosana',
        last_name: 'C.',
        email: '3@email.com',
        password_hash: '5_hash',
        salary: 1470.78
    }
];

const insert = knex('users').insert(data);

// console.log(insert.toString());
// console.log(insert.toSQL().toNative());

insert.then(data => {
    console.log(data);
}).catch(e => {
    console.log('ERRO:', e.message);
}).finally(() => {
    knex.destroy();
});