var elementoDuvida = document.querySelectorAll('.duvida')

elementoDuvida. forEach(function(duvida){
    duvida.addEventListener('click', function(){
        duvida.classList.toggle('ativa')
    })
})