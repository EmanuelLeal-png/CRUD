const db = require('../config/db');

const Aula = {
    create: (aula, callback) => {
        const query = 'INSERT INTO aulas (tema, descricao, data_aula) VALUES (?, ?, ?)';
        db.query(query, [aula.tema, aula.descricao, aula.data_aula], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results.insertId);
        });
    },

    findById: (id, callback) => {
        const query = 'SELECT * FROM aulas WHERE id = ?';
        db.query(query, [id], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results[0]);
        });
    },

    update: (id, aula, callback) => {
        const query = 'UPDATE aulas SET tema = ?, descricao = ?, data_aula = ? WHERE id = ?';
        db.query(query, [aula.tema, aula.descricao, aula.data_aula, id], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results);
        });
    },

    delete: (id, callback) => {
        const query = 'DELETE FROM aulas WHERE id = ?';
        db.query(query, [id], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results);
        });
    },

    getAll: (callback) => {
        const query = 'SELECT * FROM aulas';
        db.query(query, (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results);
        });
    },
};

module.exports = Aula;
