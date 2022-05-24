import { connection } from './connection';


export default async function selectAgeStudentById(
   
    id:string,


):Promise<any>{
   const result = await connection('Estudante')
    .select('*')
    .where({id})

    return result[0]

}