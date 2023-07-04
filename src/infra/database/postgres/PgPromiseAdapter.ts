import pgp from 'pg-promise';
import Connection from '../Connection';

export default class PgPromiseAdapter implements Connection {
  connection: any;

  constructor () {
    this.connection = pgp()("postgres://postgres:pedro1609@localhost:5432/drope");
  }

  query (statement: string, params: any): Promise<any> {
    return this.connection.query(statement, params);
  }

  close (): Promise<any> {
    return this.connection.$pool.end();
  }
}