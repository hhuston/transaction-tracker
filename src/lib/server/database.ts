import { PGUSER, PGPASSWORD, PGHOST, PGPORT, PGDATABASE } from '$env/static/private'
import pg from 'pg'

const { Client } = pg
const client = new Client({
    user: PGUSER,
    password: 'secretpassword',
    host: 'database.server.com',
    port: 3211,
    database: 'mydb',
  })
await client.connect()