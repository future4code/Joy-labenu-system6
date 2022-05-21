import { Request, Response } from 'express';
import { DataBase } from '../data/connection';

export default async function searchStudent(
    req:Request,
    res:Response
){
    try {
        let search = req.query.nome
        const dataDB = new DataBase()
        const result = await dataDB.getEstudanteSearch(search)
        res.status(200).send(result)
        

    }catch (error:any){
        throw new Error(error.sqlMessage||error.message)
     }
    }