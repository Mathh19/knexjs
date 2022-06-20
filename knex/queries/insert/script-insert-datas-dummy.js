const knex = require('../../config/database');

const query = datas;

knex.raw(query).then(data => {
    console.log(data);
}).catch(e => {
    console.log(e.message);
}).finally(() => {
    knex.destroy();
});