export class Cliente{
    _nome;
    _cpf;
    _senha;

    get cpf(){
        return this._cpf;
    }

    get nome(){
        return this._nome;
    }

    autenticar(){
        return false;
    }

    constructor(nome, cpf, senha){
        this._cpf = cpf;
        this._nome = nome;
        this._senha = senha;
    }
    
}
