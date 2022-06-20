const knex = require('../../config/database');

const insertSelect = knex(
        knex.raw(
            '?? (??, ??, ??)',
            ['profiles', 'bio', 'description', 'user_id']
        )
).insert((queryBuilder) => {
    queryBuilder.from('users').select(
        knex.raw(
            'concat("Bio de ", ??)',
            ['first_name']
        ),
        knex.raw("concat('Description de', ' ', first_name)"), 
        'id'
    );   
});

console.log(insertSelect.toString());

insertSelect.then((data) => {
    console.log(data);
}).catch((e) => {
    console.log(e.message);
}).finally(() => {
    knex.destroy();
});
