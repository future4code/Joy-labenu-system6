import knex from "knex";
import dotenv from "dotenv";

dotenv.config();

export const connection = knex({
   client: "mysql",
   connection: {
      host: process.env.DB_HOST,
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_SCHEMA,
      multipleStatements: true
   },
});
export class DataBase{
   private connection = knex({
      client: "mysql",
      connection: {
         host: process.env.DB_HOST,
         port: 3306,
         user: process.env.DB_USER,
         password: process.env.DB_PASSWORD,
         database: process.env.DB_SCHEMA,
         multipleStatements: true
      },
      });
   public getAllEstudantes = async () => {
      try {
         return await this.connection('Estudante')
      } catch (error:any){
         throw new Error(error.sqlMessage||error.message)
      }
   }
   public getOneEstudante = async (id:any) => {
      try {
         return await this.connection('Estudante').where({id:id})
      } catch (error:any){
         throw new Error(error.sqlMessage||error.message)
      }
   }
   public getEstudanteSearch = async (search:any) => {
      try {
        const [result] = await this.connection('Estudante').select().where("nome", "like", `%${search}%`)      
         return [result]

      } catch (error:any){
         throw new Error(error.sqlMessage||error.message)
      }
   }
   public getAllDocentes = async() => {
      try {
         return await this.connection('Docente')
      } catch (error:any){
         throw new Error(error.sqlMessage||error.message)
      }
   }
   public getOneDocente = async (id:string) => {
      try {
         return await this.connection('Docente').select().where({id:id})
      } catch (error:any){
         throw new Error(error.sqlMessage||error.message)
      }
   }
   public getAllTurma = async() => {
      try {
         return await this.connection('Turma')
      } catch (error:any){
         throw new Error(error.sqlMessage||error.message)
      }
   }
   public getOneTurma = async (id:any) => {
      try {
         return await this.connection('Turma').select().where({id:id})
      } catch (error:any){
         throw new Error(error.sqlMessage||error.message)
      }
   }
   public setEditClass = async(id:any,modulo:any) => {
      try {
         return await this.connection('Turma').update({modulo:modulo}).where({id:id})
      } catch (error:any){
         throw new Error(error.sqlMessage||error.message)
      }
   }   
   public setEditStudent = async(id:any,idTuma:any) => {
      try {
         return await this.connection('Estudante').update({turma_id:idTuma}).where({id:id})
         // const result =  await connection("Tasks").update({status: req.body.status}).where({ taskId:req.params.id });

      } catch (error:any){
         throw new Error(error.sqlMessage||error.message)
      }
   }
   public setEditDocente = async(id:any,turma_id:any) => {
      try {
         return await this.connection('Docente').update({turma_id:turma_id}).where({id:id})
      } catch (error:any){
         throw new Error(error.sqlMessage||error.message)
      }
   }
}