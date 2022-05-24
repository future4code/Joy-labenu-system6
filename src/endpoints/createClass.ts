import { Request, Response } from 'express';
import insertClass from '../data/insertClass';
import { Turmas } from '../classes/turma';

export default async function createClass(

    req: Request,
    res: Response
) {
 
    const {nome, modulo} = req.body
    const turmas = new Turmas(nome, modulo)
    try {

        if (
            !nome ||
            !modulo
        ) {
            res.status(400).send({
                message: 'Preencha todos os campos "nome" e "modulo"'
            })
        }

        const id: string = Date.now() + Math.random().toString()
       
        await insertClass(
            id,
            turmas.getNome(),
            turmas.getModulo()
        )
        res.status(200).send({
                message: 'Classe criada com sucesso!!!',
                id,
                nome: nome,
                modulo: modulo
            })


    } catch (error: any) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })

    }

}