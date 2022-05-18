
export class Estudantes {
    // private id: string;
    private nome:string;
    private email:string;
    private data:string;
    private turma_id: string;

    constructor(nome:string,email:string,data:string,turma_id:string){
        // this.id = id
        this.nome = nome
        this.email = email
        this.data = data
        this.turma_id = turma_id
    }
    // public getId(): string {
	// 	return this.id
	// }
    public getNome(): string {
        return this.nome
    }
    public getEmail(): string {
        return this.email
    }
    public getData(): string {
        return this.data
    }
    public getTurma_id(): string {
        return this.turma_id
    }
    public setTurma_id = (turma_id:string) => this.turma_id = turma_id
    }


