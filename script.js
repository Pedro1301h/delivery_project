
let menos = document.querySelector('.menos')
let mais = document.querySelector('.mais')
let qnt = document.querySelector('.qnt')
let preco = document.querySelector('.preco')
let subtotal = document.querySelector('.subtotal')
let q = Number(qnt.value)
let s = Number(subtotal.value)
let p = Number(preco.value)
q=0

//preço dos produtos
let heineken = 7.9
preco.innerHTML=heineken.toLocaleString('pt-br',{style:'currency',currency:'BRL'})

//-----------------

menos.addEventListener('click',subtrair)
mais.addEventListener('click',somar)

function subtrair(){
    if(q == 0){
        return 0
    }else
    qnt.innerHTML=q-=1

    const valorHeineken = q*heineken
    if(valorHeineken != 0){
        subtotal.innerHTML='Total: '+valorHeineken.toLocaleString('pt-br',{style:'currency',currency:'BRL'})
    }else 
        subtotal.innerHTML=''
}


function somar(){
    qnt.innerHTML=q+=1
    
    const valorHeineken = q*heineken
    subtotal.innerHTML='Total: '+valorHeineken.toLocaleString('pt-br',{style:'currency',currency:'BRL'})
}



