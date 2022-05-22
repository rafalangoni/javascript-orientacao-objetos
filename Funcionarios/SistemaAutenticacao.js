/**
 * "Interface", quem for autenticavel deve implementar o método autenticar para que possa se logar
 */
export class SistemaAutenticacao{
    static login(autenticavel, senha){
        if(SistemaAutenticacao.ehAutenticavel(autenticavel)){
            return autenticavel.autenticar(senha);
        }
        return false;

    }
//* POLIMORFISMO E DUCK TYPE: não importa qual tipo de objeto é, se ele possui o método autenticar, ele automaticamente é um autenticavel
//
    static ehAutenticavel(autenticavel){
       return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function;
    }

}