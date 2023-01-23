const tabs = document.querySelectorAll('.tab');


tabs.forEach(tab => {
    tab.addEventListener("click", function(){

        if(tab.classList.contains("selected")){
            return;
        }

        selectTab(tab);
        showInfo(tab);

    });
});

function selectTab(tab){

    const selectedTab = document.querySelector(".tab.selected");
    selectedTab.classList.remove("selected")

    tab.classList.add("selected");
}

function showInfo (tab){
    const selectedInfo = document.querySelector(".menu.selected");
    selectedInfo.classList.remove("selected");

   const idDoElementoDeInfo = `info-${tab.id}`

   const showInfo = document.getElementById(idDoElementoDeInfo)
   showInfo.classList.add("selected")
}

const buttonPortfolio = document.getElementById('portfolio');

buttonPortfolio.addEventListener('click', function (){
    const buttonsP = document.querySelector('.buttons-p')
    const activeItem = document.querySelector('.activated');
    
    buttonsP.classList.add('activated');
    activeItem.classList.remove('activated');   
})

const buttonDesktop = document.getElementById('desktop');

buttonDesktop.addEventListener('click', function(){
    showPortfolioDesktop();
})

function showPortfolioDesktop(){
    const card = document.querySelector('.card')
    const portfolioDesktop = document.querySelector('.portfolio-desktop')

    card.style.display = "none";
    portfolioDesktop.style.display = "flex";
}

const buttonMobile = document.getElementById('mobile');

buttonMobile.addEventListener('click', function(){
    showPortfolioMobile();
})

function showPortfolioMobile(){
    const card = document.querySelector('.card')
    const portfolioMobile = document.querySelector('.portfolio-mobile')
    
    card.style.display = "none";
    portfolioMobile.style.display = "flex";
    
}

const backDesktop = document.getElementById('inicio')
const backMobile = document.getElementById('inicio-mobile')

backDesktop.addEventListener('click', function(){
    voltarAoInicio();
})

backMobile.addEventListener('click', function(){
    voltarAoInicio();
})

function voltarAoInicio(){
    const card = document.querySelector('.card')
    const portfolioMobile = document.querySelector('.portfolio-mobile')
    const portfolioDesktop = document.querySelector('.portfolio-desktop')
    
    card.style.display = "block";
    portfolioMobile.style.display = "none";
    portfolioDesktop.style.display = "none"

}