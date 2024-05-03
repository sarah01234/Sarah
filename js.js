var url = "dados.xml";
var id = 0;

$.ajax(url)
    .done(function(xml){
        $(xml).find("opção").each(function(){
            var imageSrc = $(this).find("id").text() + '.jpg'; // Default to JPG
            // Check if PNG exists, if not, use JPG
            if (!imageExists(imageSrc)) {
                imageSrc = $(this).find("id").text() + '.png';
            }
            $("#cards").append('<div class="card"><a class="link-branco" href="individual.html?id='+$(this).find("id").text()+'"><p class="procurado">blocos</p> <img class="foto"src="'+ imageSrc +'"><p class="vivo">tipo de bloco</p> <p class="nome">'+ $(this).find("nome").text() +'</p> <p>'+ $(this).find("resistência").text()+'<\p> <p class="rec"> <img class="berrys" src="Berrys.png">'+ $(this).find("tipo").text()+' </p><p>'+ $(this).find("tipo").text()+'</a> </p><\div>');
        });
    })
    .fail(function(){
        alert("Ocorreu um erro na leitura do arquivo XML.");
    });

function imageExists(imageUrl) {
    var http = new XMLHttpRequest();
    http.open('HEAD', imageUrl, false);
    http.send();
    return http.status != 404;
}

var url_string = window.location.href;
var url1 = new URL(url_string);
var id = parseInt(url1.searchParams.get("id"));

$.ajax(url)
    .done(function(xml){
        $(xml).find("opção").each(function(){
            var pos = parseInt($(this).find("id").text());
            if(id == pos){
                var imageSrc = $(this).find("id").text() + '.jpg'; // Default to JPG
                // Check if PNG exists, if not, use JPG
                if (!imageExists(imageSrc)) {
                    imageSrc = $(this).find("id").text() + '.png';
                }
                $("#individual").append('<div class="card"><p class="procurado">bloco</p> <img class="foto" src="'+ imageSrc +'"><p class="vivo">valor</p> <p class="nome">'+ $(this).find("nome").text() +'</p> <p>'+ $(this).find("preço").text() +'</p> <p class="rec"> <img class="berrys" src="Berrys.png">'+ $(this).find("velocidade").text() +'</p><p>'+ $(this).find("status").text() +'</p></div>');
            }
        });
    })
    .fail(function(){
        alert("Ocorreu um erro na leitura do arquivo XML.");
    });
