let texto1 = document.getElementById('ex')
let botao1 = document.getElementById('botao1')

  let texto2 = document.getElementById('ex2')
  let botao2 = document.getElementById('botao2')

  let texto3 = document.getElementById('ex3')
  let botao3 = document.getElementById('botao3')
let ativo = true

function testar(){
    // if(!ativo) return
    for(let i = 0; i <= 5; i++){
texto1.innerHTML += 'Esse é o número ' + i + '<br>'
texto1.style.backgroundColor = '#fff'
texto1.style.width = '80%'
texto1.style.padding = '15px'
texto1.style.border = '1px solid #000'

    }
     botao1.removeEventListener('click', testar)
    //  ativo = false   
};
 botao1.addEventListener('click', testar)

function testar2(){
    
let i = 0;

    while(i < 10){
  
        i++
  texto2.innerHTML += `Esse número é o ${i} <br>`
texto2.style.backgroundColor = '#fff'
texto2.style.width = '80%'
texto2.style.padding = '15px'
texto2.style.border = '1px solid #000'

}
botao2.removeEventListener('click', testar2)
};
botao2.addEventListener('click', testar2);

function testar3(){
    
let i = 0;
  do {
  texto3.innerHTML += `Esse número é o ${i} <br>`
texto3.style.backgroundColor = '#fff'
texto3.style.width = '80%'
texto3.style.padding = '15px'
texto3.style.border = '1px solid #000'

i++
 
}


    while(i < 10)
       
        botao3.removeEventListener('click', testar3)
};
botao3.addEventListener('click', testar3)
