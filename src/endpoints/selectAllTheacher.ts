import { Request, Response } from 'express';
import { DataBase } from '../data/connection';

export default async function selectAllTheacher(
    req:Request,
    res:Response
){
    try {
        const dataDB = new DataBase()
        const result = await dataDB.getAllDocentes()
        res.status(200).send(result)
        

    }catch (error:any){
        throw new Error(error.sqlMessage||error.message)
     }
    }