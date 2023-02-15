const projects = document.querySelectorAll('.projects');
const setaVoltar = document.getElementById('seta-voltar');
const setaAvancar = document.getElementById('seta-avancar');
const setaVoltarMobile = document.getElementById('seta-voltar-m');
const setaAvancarMobile = document.getElementById('seta-avancar-m');
const projectsMobile = document.querySelectorAll('.projects-mobile');

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

 setaAvancarMobile.addEventListener("click", function(){
    
    if(projetoAtual === projectsMobile.length -1){
     return;
    }
     projetoAtual++;
     esconderprojetoMobile();
     showProjectMobile();
 });
 
 setaVoltarMobile.addEventListener("click", function(){
     
         if(projetoAtual===0){
             return;
         }
     projetoAtual--;
     esconderprojetoMobile();
     showProjectMobile();
    
  });

function showProject() {
    projects[projetoAtual].classList.add('show');
    
}

function showProjectMobile() {
    
    projectsMobile[projetoAtual].classList.add('show-mobile');
}



function esconderprojetoAberto(){
    const projetoAberto = document.querySelector('.show');
    projetoAberto.classList.remove('show');
    
}


function esconderprojetoMobile(){
    
    const projetoAbertoMobile = document.querySelector('.show-mobile');

    projetoAbertoMobile.classList.remove('show-mobile');
}


