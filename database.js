import { sql } from './db.js'
import { randomUUID } from "crypto";

export class DatabaseUsers {
    async createUser(user) {
        const id = randomUUID();
        const name = user.name;
        const senha = user.senha;
        const perfil = user.perfil;

        await sql`insert into users (id, name, password, profile) 
            values (${id}, ${name}, ${senha}, ${perfil})`;
    }

    //update(id, user) {
    //    const { name, password, profile } = user;
    //     sql`update user 
    //              set name = ${name}, password = ${senha}, profile = ${perfil},
    //              where id = ${id}`;
    //  }
    
    //delete(id) {
    //    sql`delete from users where id = ${id}`;
    //  }
}