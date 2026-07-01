import { CapacitorSQLite, SQLiteDBConnection, SQLiteConnection } from '@capacitor-community/sqlite'

const dbName = 'banco'
let db: SQLiteDBConnection | null = null
let initialized = false 
const sqliteConnection = new SQLiteConnection(CapacitorSQLite)

async function ensureDatabase()
{
  if(initialized && db){
    return
  }
  if(!db){
    db = await sqliteConnection.createConnection(dbName,false,'no-encryption',1,false)
  }

  await db.open()
  await db.execute (
      `CREATE TABLE IF NOT EXISTS usuarios (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        login TEXT NOT NULL UNIQUE,
        senha TEXT NOT NULL
      );`,
    )

  initialized = true
}
function getDb(){
  if (!db){
    throw new Error('Banco de dados ainda não inicializado')
  }
  return db
}

export async function initDatabase(){
  try{
    await ensureDatabase()
  } catch(error){
    console.error('Erro ao iniciar DB',error)
    throw error
  }
}
export async function addContato(
  nome: string,
  email: string,
  telefone: string
) {
  const query =
    'INSERT INTO usuarios (nome, email, telefone) VALUES (?, ?, ?);'

  await getDb().run(query, [nome, email, telefone])
}
export async function listContatos(){
  const result = await getDb().query(`SELECT * FROM contatos;`)
  return result.values || []
}

export async function deleteContatoById(id:number){
  const query = 'DELETE FROM contatos where id = ?';
  return await getDb().run(query,[id])
}

export async function addUsuario(
  nome: string,
  email: string,
  senha: string
) {
  await ensureDatabase()
  const query =
    'INSERT INTO contatos (nome, email, senha) VALUES (?, ?, ?);'
  await getDb().run(query, [nome, email, senha])
}
  export async function updateContato(
  id:number,
  nome: string,
  email: string,
  telefone: string
) {
  const query =
    'UPDATE contatos SET nome = ?, email = ?, telefone = ? WHERE id = ?;'
  await getDb().run(query,[nome, email, telefone, id])
}

  export async function deleteUsuarioById(id:number){
    await ensureDatabase()
    const query = 'DELETE FROM usuarios where id = ?';
    return await getDb().run(query,[id])
  }

  export async function updateUsuario(
  id:number,
  nome:string,
  login:string,
  senha: string
) {
  await ensureDatabase()
  const query =
    'UPDATE contatos SET nome = ?, login = ?, senha = ? WHERE id = ?;'
  await getDb().run(query,[nome,login,senha, id])
}

export async function realizarLogin(
  login: string,
  senha: string
){
  await ensureDatabase()
  const query = `SELECT * FROM usuarios where login = ? and senha = ?`
  const result = await getDb().query(query,[login, senha])
  return result.values || []
}

  export async function findContatoByName(nome:string){
    await ensureDatabase()
    const query = 'SELECT FROM contatos where nome = ?';
    const result = await getDb().query(query,[nome])
    return result.values ||[]
  }
