import { Request, Response } from 'express';
import insertClass from '../data/insertClass';

export default async function createClass(

    req: Request,
    res: Response
) {

    const {nome, modulo} = req.body

    try {

        if (
            !nome ||
            !modulo
        ) {
            res.status(400).send({
                message: 'Preencha todos os campos "nome","data_inicio", "data_termino" e "modulo"'
            })
        }

        const id: string = Date.now() + Math.random().toString()

        await insertClass(
            id,
            nome,
            modulo
        )
        res
            .status(200).send({
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