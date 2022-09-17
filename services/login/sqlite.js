const sqlite3 = require('sqlite3');

const db = new sqlite3.Database('./database.sqlite', (error) => {
    if (error) console.log(error);
});

db.serialize(() => {
    db.run('create table if not exists user (id integer primary key, login text, password text)', (error) => {
        if (error) console.log(error);
    });

    db.run('insert into user (login, password) values (?, ?)', ['admin@admin.com', 'admin123'], (error) => {
        if (error) console.log(error);
    });

    db.all('select * from user', (error, rows) => {
        console.log(error, rows);
    });
});

db.close();