import { Request, Response } from 'express';
import insertStudentWithHobby from '../data/insertStudentWithHobby';

export default async function createStudentWithHobby(
    req:Request,
    res:Response

){
    const {estudante_id, hobby_id} = req.body

    try{

        if(
            !estudante_id ||
            !hobby_id
        ){
            res.status(400).send({
                message: 'É necessário passar o id do estudante e do hobbie!'
            })

            return
        }

        const id: string = Date.now() + Math.random().toString()

        await insertStudentWithHobby(
            id,
            estudante_id,
            hobby_id
        )

        res
        .status(200).send({
            message: 'Aluno e Hobbie unidos com sucesso!!!',
            
            uniao: id,
            estudante_id:estudante_id,
            hobby_id:hobby_id
        })


    }catch (error: any) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }

}