import { Request, Response } from 'express';
import { DataBase } from '../data/connection';

export default async function selectAllStudents(
    req:Request,
    res:Response
){
    try {
        const dataDB = new DataBase()
        const result = await dataDB.getAllEstudantes()
        res.status(200).send(result)
        

    }catch (error:any){
        throw new Error(error.sqlMessage||error.message)
     }
    }