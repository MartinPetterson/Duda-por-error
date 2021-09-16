var pool = require('./bd');

async function getproductos() {
    var query = "select * from productos order by id ";
    var rows = await pool.query(query);
    return rows;
}

async function deleteproductosById(id) {
    var query = "delete from productos where id = ? ";
    var rows = await pool.query(query, [id]);
    return rows;
}



module.exports = { getproductos, deleteproductosById };
