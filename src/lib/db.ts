import pg from 'pg'
import PGHOST from '$env/static/private'
import PGDATABASE from '$env/static/private'
import PGUSER from '$env/static/private'
import PGPORT from '$env/static/private'
import PGPASSWORD  from '$env/static/private'


const {Pool} = pg
const pool = new Pool({
    database:'accounts',
    user:'postgres',
    host:'localhost',
    port:5432,
    password:'Nevergiveup123#'

})

export const connectToDB = async () => await pool.connect();