import { sql } from './db.js'

export class Database {

    async create(user) {
        const id = 11;
        const nome = artigo.nome;
        const descricao = artigo.descricao;
        const contuedo = artigo.contuedo;
        const imagem = artigo.imagem;
        const github = artigo.github;

        await sql`insert into artigos (id, nome, descricao, conteudo, imagem, github) 
            values (${id}, ${nome}, ${descricao}, ${contuedo}, ${imagem}, ${github})`;
    }

    //update(id, artigo) {
    //    const { nome, descricao, contuedo, imagem, github } = artigo;
    //     sql`update artigo 
    //              set nome = ${nome}, descricao = ${descricao}, conteudo = ${conteudo}, imagem = ${imagem}, github = ${github} 
    //              where id = ${id}`;
    //  }
    
    //delete(id) {
    //    sql`delete from artigos where id = ${id}`;
    //  }
}