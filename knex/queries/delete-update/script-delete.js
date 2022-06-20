const knex = require('../../config/database');

const select =  knex('users').select('id', 'first_name');
const deleteSql = knex('users').delete().whereBetween('id', [30, 35]);

console.log(select.toString());
console.log(deleteSql.toString());

deleteSql.then((data) =>{
    console.log(data);

    select.then((data) =>{
        console.log(data);
    }).catch((e) => {
        console.log(e.message);
    });
}).catch((e) => {
    console.log(e.message);
}).finally(() => {
    knex.destroy();
});