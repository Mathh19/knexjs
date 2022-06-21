const knex = require('../../config/database');

const update = knex('users as u')
    .join('profiles as p', 'u.id', 'p.user_id')
    .update({
        'p.bio': knex.raw('CONCAT(p.bio,  " updated")')
    })
    .where({
        'u.first_name': 'katelyn'
    });

console.log(update.toString());

update.then((data) => {
    console.log(data);
}).catch((e) => {
    console.log(e.message);
}).finally(() => {
    knex.destroy();
});