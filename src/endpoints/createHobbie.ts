import { Request, Response } from 'express';
import insertHobbie from '../data/insertHobbie';


export default async function createHobbie(
    req:Request,
    res:Response

){
    const {nome} = req.body

    try {

        if(
            !nome
        ){
            res.status(400).send({
                message: 'Preencha o campo name com o seu hobbie favorito :D'
            })

            return
        }

        const id: string = Date.now() + Math.random().toString()

        await insertHobbie(
            id,
            nome
        )
        
        res
        .status(200).send({
            message: 'Hobbie criado com Sucesso!!!',
            id,
            nome:nome
        })


        }catch (error: any) {
            res.status(400).send({
                message: error.message || error.sqlMessage
            })
        
        }

    }