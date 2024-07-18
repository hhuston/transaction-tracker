import { PGUSER, PGPASSWORD, PGHOST, PGPORT, PGDATABASE } from '$env/static/private'
import pg from 'pg'

const { Client } = pg
const client = new Client({
    user: PGUSER,
    password: PGPASSWORD,
    host: PGHOST,
    port: 5432,
    database: PGDATABASE,
  })
await client.connect()

export function createTransaction(name : string, total_cost : Number, category : Boolean, date : string) {
  client.query('\
    INSERT INTO transactions (fullname, totalcost, owedtouser, date)\
    VALUES ($1, $2, $3, $4)\
    ', [name, total_cost, category, date])
}