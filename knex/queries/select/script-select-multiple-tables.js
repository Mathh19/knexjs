const knex = require('../../config/database');

const select = knex(
    knex.raw(
        '?? as ??, ?? as ??',
        ['users', 'u', 'profiles', 'p']
     )
  )
  .select('u.id as uid', 'p.id as pid', 'p.bio', 'u.first_name')
  .where('u.id', '=', knex.raw('??',  ['p.user_id']));

console.log(select.toString());

select.then((data) => {
    console.log(data);
}).catch((e) => {
    console.log(e.message);
}).finally(() => {
    knex.destroy();
});