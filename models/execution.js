'use strict';

const Sequelize = require('sequelize');
const Base = require('./base.js');

class Execution extends Base {
    constructor(db) {
        super(db);
        this.model = db.define('execution', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true
            },
            task_id: {
                type: Sequelize.INTEGER
            },
            status: {
                type: Sequelize.INTEGER
            },
            output: {
                type: Sequelize.STRING
            }
        }, {
            freezeTableName: true,
            timestamps: true
        });
    }

    deleteLast(taskId) {
        let sql = "DELETE FROM execution WHERE task_id = :task_id";
        return this.db.query(sql, {
            replacements: {task_id: taskId},
            type: this.db.QueryTypes.DELETE
        });
    }
}

module.exports = Execution;