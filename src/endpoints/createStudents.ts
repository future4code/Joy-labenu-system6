import {Request, Response} from 'express';
import insertStudents from '../data/insertStudents';
import { Estudantes } from '../classes/estudante';

export default async function createStudents(

    req:Request,
    res:Response


){

    const {nome, email, data, turma_id} = req.body
    const estudantes = new Estudantes(nome, email, data, turma_id)
   
    try {
         
            if(
                !nome ||
                !email ||
                !data ||
                !turma_id


            ){ res.status(400).send({
               message:'Preencha os campos "name","email" e "data" e "turma_id"'
             })
             return 
               
        }

        function formatDate(date: string): string {
            const day = date.split("/")[0];
            const month = date.split("/")[1];
            const year = date.split("/")[2];
            return year + '-' + ("0" + month).slice(-2) + '-' + ("0" + day).slice(-2);
        }

        const formattedData: string = formatDate(estudantes.getData())

                const id: string = Date.now() + Math.random().toString()

                await insertStudents(
                    id,
                    estudantes.getNome(),
                    estudantes.getEmail(),
                    formattedData,
                    estudantes.getTurma_id()
                )
                res
                .status(200).send({
                    message:'Estudante criado com sucesso!',
                    id,
                    nome:nome,
                    email:email,
                    data_nasc:formattedData,
                    turma_id: turma_id
                   
                })
               

            }catch (error:any){
                res.status(400).send({
                message: error.message || error.sqlMessage
            })
            
        }

}