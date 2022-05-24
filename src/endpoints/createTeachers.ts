import { Request, Response } from 'express';
import insertTeacher from '../data/insertTeacher';
import { Docentes } from '../classes/docente';


export default async function createTeacher(

    req: Request,
    res: Response

){

    const {nome, email, data, turma_id} = req.body
    const docentes = new Docentes(nome, email, data, turma_id)
    try {

        if (
            !nome ||
            !email ||
            !data ||
            !turma_id


        ) {
            res.status(400).send({
                message: 'Preencha todos os campos!'
            })
            return

        }

        const id: string = Date.now() + Math.random().toString()

        function formatDate(date: string): string {
            const day = date.split("/")[0];
            const month = date.split("/")[1];
            const year = date.split("/")[2];
            return year + '-' + ("0" + month).slice(-2) + '-' + ("0" + day).slice(-2);
        }

        const formattedDataNascimento: string = formatDate(docentes.getData_nasc())

        await insertTeacher(
            id,
            docentes.getNome(),
            docentes.getEmail(),
            formattedDataNascimento,
            docentes.getTurma_id()
        
        )
        res
            .status(200).send({
                message: 'Professor criado com sucesso!',
                id,
                name:nome,
                email:email,
                data_nasc: formattedDataNascimento,
                turma_id: turma_id
            })


    } catch (error: any) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })

    }

}