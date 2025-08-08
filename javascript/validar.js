var Nome, Instituicao, Area, Turno, Participar, Comentarios;

function Impossibilitar(){
    //Nome só Letras
    document.getElementById('participante').addEventListener('input', function(){
        this.value = this.value.replace(/[^a-zA-ZÀ-ÿ\s]/g, "");
    });
    

}
function Obrigatorio(){
    //Nome
    Nome = document.getElementById('participante').value;
    //Nome Obrigatório
    if(Nome == ""){
        alert("Nome é OBRIGATÓRIO!!");
        
        document.getElementById('participante').style.borderColor="red";
        
        return false;
    }
    //Instituição
    Instituicao = document.getElementById('instituicao').value;
    //Nome Obrigatório
    if(Instituicao == ""){
        alert("Instituição é OBRIGATÓRIO!!");
        
        document.getElementById('instituicao').style.borderColor="red";
        
        return false;
    }

    //Interesse
    Area = document.getElementById('area').value;
    //Área de Interesse Obrigatório
    if(Area == ""){
        alert("Area de Interesse é OBRIGATÓRIO!!");
        
        document.getElementById('area').style.borderColor="red";
        
        return false;
    }

    //Turno
    Turno = document.getElementById('turno').value;
    
    //Aceita Presencial?
    Participar = document.querySelector('input[name="presenca"]:checked').value;

    //Comentarios
    Comentarios = document.getElementById('comentarios').value;

    return true;
}