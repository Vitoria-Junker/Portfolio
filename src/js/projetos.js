const projects = document.querySelectorAll('.projects');
const setaVoltar = document.getElementById('seta-voltar');
const setaAvancar = document.getElementById('seta-avancar');

let projetoAtual = 0;

setaAvancar.addEventListener("click", function(){
    
   if(projetoAtual === projects.length -1){
    return;
   }

    projetoAtual++;

    esconderprojetoAberto();
    showProject();
    

});

setaVoltar.addEventListener("click", function(){
    
        if(projetoAtual===0){
            return;
        }

    projetoAtual--;

    esconderprojetoAberto();
    showProject();
   
 });

function showProject() {
    projects[projetoAtual].classList.add('show');
}

function esconderprojetoAberto(){
    const projetoAberto = document.querySelector('.show');
    projetoAberto.classList.remove('show');
}


