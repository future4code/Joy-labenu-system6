import { Request, Response } from 'express';
import { DataBase } from '../data/connection';

export default async function editStudentClass(
    req:Request,
    res:Response
){
    try {
        const id = req.params.id
        const turma_id = req.body.turma_id

        const dataDB = new DataBase()
        const result = await dataDB.setEditStudent(id,turma_id)
        const estudanteAtualizado = await dataDB.getOneEstudante(id)
        res.status(200).send( {message: 'Aluno traferido de turma!', Estudante:estudanteAtualizado})
        

    }catch (error:any){
        throw new Error(error.sqlMessage||error.message)
     }
    }