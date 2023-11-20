
//----------------------------Produto 01----------------------------------------

let menos_prod_01 = document.querySelector('#menos_prod_01')
let mais_prod_01 = document.querySelector('#mais_prod_01')
let qnt_prod_01 = document.querySelector('#qnt_prod_01')
let preco_prod_01 = document.querySelector('#preco_prod_01')
let subtotal_prod_01 = document.querySelector('#subtotal_prod_01')
let q_prod_01 = Number(qnt_prod_01.value)
q_prod_01=0

//preço dos produtos
let valor_prod_01 = 7.9
preco_prod_01.innerHTML=valor_prod_01.toLocaleString('pt-br',{style:'currency',currency:'BRL'})

//-----------------

menos_prod_01.addEventListener('click',subtrair)
mais_prod_01.addEventListener('click',somar)

function subtrair(){
    if(q_prod_01 == 0){
        return 0
    }else
    qnt_prod_01.innerHTML=q_prod_01-=1

    const total_prod_01 = q_prod_01*valor_prod_01
    if(total_prod_01 != 0){
        subtotal_prod_01.innerHTML='Total: '+total_prod_01.toLocaleString('pt-br',{style:'currency',currency:'BRL'})
    }else 
        subtotal_prod_01.innerHTML=''
}


function somar(){
    qnt_prod_01.innerHTML=q_prod_01+=1
    
    const total_prod_01 = q_prod_01*valor_prod_01
    subtotal_prod_01.innerHTML='Total: '+total_prod_01.toLocaleString('pt-br',{style:'currency',currency:'BRL'})
}


//--------------------------------Produto 02-------------------------------------------


let menos_prod_02 = document.querySelector('#menos_prod_02')
let mais_prod_02 = document.querySelector('#mais_prod_02')
let qnt_prod_02 = document.querySelector('#qnt_prod_02')
let preco_prod_02 = document.querySelector('#preco_prod_02')
let subtotal_prod_02 = document.querySelector('#subtotal_prod_02')
let q_prod_02 = Number(qnt_prod_02.value)
q_prod_02=0

//preço dos produtos
let valor_prod_02 = 6.9
preco_prod_02.innerHTML=valor_prod_02.toLocaleString('pt-br',{style:'currency',currency:'BRL'})

//-----------------

menos_prod_02.addEventListener('click',sub02)
mais_prod_02.addEventListener('click',soma02)

function sub02(){
    if(q_prod_02 == 0){
        return 0
    }else
    qnt_prod_02.innerHTML=q_prod_02-=1

    const total_prod_02 = q_prod_02*valor_prod_02
    if(total_prod_02 != 0){
        subtotal_prod_02.innerHTML='Total: '+total_prod_02.toLocaleString('pt-br',{style:'currency',currency:'BRL'})
    }else 
        subtotal_prod_02.innerHTML=''
}


function soma02(){
    qnt_prod_02.innerHTML=q_prod_02+=1
    
    const total_prod_02 = q_prod_02*valor_prod_02
    subtotal_prod_02.innerHTML='Total: '+total_prod_02.toLocaleString('pt-br',{style:'currency',currency:'BRL'})
}




