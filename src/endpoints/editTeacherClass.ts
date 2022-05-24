import { Request, Response } from 'express';
import { DataBase } from '../data/connection';

export default async function editTeacherClass(
    req:Request,
    res:Response
){
    try {
        const id = req.params.id
        const turma_id = req.body.turma_id

        const dataDB = new DataBase()
        const result = await dataDB.setEditDocente(id,turma_id)
        const docenteAtualizado = await dataDB.getOneDocente(id)

        res.status(200).send( {message: 'Docente traferido de turma!', Docente: docenteAtualizado})
        

    }catch (error:any){
        throw new Error(error.sqlMessage||error.message)
     }
    }