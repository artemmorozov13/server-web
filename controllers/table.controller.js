import config from "config";
import connection from "../db.js";

const transformOperator = (operator) => {
    switch (operator) {
        case "more":
            return ">"
        case "less":
            return "<"
        case "equal":
            return "="
    }
}

class TableController {
    limit = config.get("limitRows");

    getTableRows = (req, res) => {
        const {offset = 0} = req.params;
        const query = `SELECT * FROM \`project\` 
        LIMIT ${ this.limit } OFFSET ${ offset }`;

        connection.query(query, (err, data) => {
            if (err) {
                return res.send(err.message);
            }
            return res.send(data);
        })
    }

    getTableRowsByName = (req, res) => {
        const {value, operator, offset = 0} = req.params;
        const sqlOperator = transformOperator(operator);
        const query = `SELECT * FROM \`project\` WHERE 
        \`name\` ${ sqlOperator === "="? "LIKE" : sqlOperator } \"${ value }%\" 
        LIMIT ${ this.limit } OFFSET ${ offset }`;

        connection.query(query, (err, data) => {
            if (err) {
                return res.send(err.message);
            }
            return res.send(data);
        })
    }

    getTableRowsByCount = (req, res) => {
        const {value, operator, offset = 0} = req.params;
        const sqlOperator = transformOperator(operator);
        const query = `SELECT * FROM \`project\` WHERE 
        \`count\` ${ sqlOperator } \"${ value }\" 
        LIMIT ${ this.limit } OFFSET ${ offset }`;

        connection.query(query, (err, data) => {
            if (err) {
                return res.send(err.message);
            }
            return res.send(data);
        })
    }

    getTableRowsByDistance = (req, res) => {
        const {value, operator, offset = 0} = req.params;
        const sqlOperator = transformOperator(operator);
        const query = `SELECT * FROM \`project\` WHERE 
        \`distance\` ${ sqlOperator } \"${ value }\" 
        LIMIT ${ this.limit } OFFSET ${ offset }`;

        connection.query(query, (err, data) => {
            if (err) {
                return res.send(err.message);
            }
            return res.send(data);
        })
    }
}

export default new TableController;