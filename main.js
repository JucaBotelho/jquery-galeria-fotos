$(document).ready(function(){  
    $('header button').click(function(){ // Ação ao clicar no botão, o mesmo que o AddEventListener do JS
        $("form").slideDown() //Efeitao dado ao clicar
    })

    $("#botao-cancelar").click(function(){
        $('form').slideUp() //Efeito para esconder o formulário
    })

    $("form").on("submit", function(e){
        e.preventDefault() //previne o efeito padrão que o browser atualiza a página ao clickar no botão
        const enderecoDaNovaImagem = $("#endereco-imagem-nova").val() /* .val é o mesmo que .value no js puro */
        const novoItem = $('<li style="display: none"></li>')
        $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem)
        $(`
            <div class='overlay-imagem-link'>
                <a href="${enderecoDaNovaImagem}" title="Ver imagem em tamanho real" target="_blank">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem)
        $(novoItem).appendTo("ul")
        $(novoItem).fadeIn(1000) /*animação para foto aparecer lentamente. 1000 quer dizer 1 seg */
        $("#endereco-imagem-nova").val("") /*resetar o input da url apos adicionar nova imagem */
    })

})