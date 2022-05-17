import { Request, Response } from 'express';
import selectAgeStudentById from '../data/selectAgeStudentById';
import { connection } from '../data/connection';


export default async function getAgeStudentById(
    req:Request,
    res:Response

){
    try {

        const estudante = await selectAgeStudentById(req.params.id)

        if(!estudante){
            res.status(404).send({
                message:'Estudante não encontrado'
            })

        }
            const result =  await connection('Estudante')
            const newData = new Date(result[0].data)
            console.log(newData)
            const dateAtual= new Date()
            const age = dateAtual.getFullYear() - newData.getFullYear()

            res.status(200).send({
                message:'Sucesso!!',
                idade:age
            })


            }catch (error:any) {
                res.status(400).send({
                    message: error.message || error.sqlMessage
                })
          }
    }