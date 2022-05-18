
export class Turmas {
    
    private nome:string;
    private modulo:string;

    constructor(nome:string,modulo:string){
       
        this.nome = nome
        this.modulo = modulo
    }
   
    public getNome(): string {
        return this.nome
    }
    public getModulo(): string {
        return this.modulo
    }
    public setModulo = (modulo:string) => this.modulo = modulo
    }


