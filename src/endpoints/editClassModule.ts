import { Request, Response } from 'express';
import { DataBase } from '../data/connection';

export default async function editClassModule(
    req:Request,
    res:Response
){
    try {
        const id = req.params.id
        const modulo = req.body.modulo

        const dataDB = new DataBase()
        const result = await dataDB.setEditClass(id,modulo)
        const turmaAtualizada = await dataDB.getOneTurma(id)
        res.status(200).send( {message: 'Turma traferida de Modulo!', Turma:turmaAtualizada})
        

    }catch (error:any){
        throw new Error(error.sqlMessage||error.message)
     }
    }