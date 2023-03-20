let container_basic = window.document.getElementById('container_basic')
let container_professional = window.document.getElementById('container_professional')
let container_master = window.document.getElementById('container_master')

let contador = 0

function clicado() {
    if(contador === 0){
        console.log("desativado")
        
        container_basic.innerHTML = '<h2>&dollar;199.99</h2>'
        container_professional.innerHTML = '<h2>&dollar;249.99</h2>'
        container_master.innerHTML = '<h2>&dollar;399.99</h2>'

        contador = contador + 1
    }else { 
        
        container_basic.innerHTML = '<h2>&dollar;19.99</h2>'
        container_professional.innerHTML = '<h2>&dollar;24.99</h2>'
        container_master.innerHTML = '<h2>&dollar;39.99</h2>'

        contador = contador - 1
    }  
}