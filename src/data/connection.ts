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
   public getAllDocentes = async() => {
      try {
         return await this.connection('Docente')
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
}