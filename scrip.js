
let chave = "cebcd482eda57fa9a6714c1c2ba91885"

function Colocanatela(dados){

    console.log(dados)
    document.querySelector(".cidade").innerHTML = "Tempo em "  + dados.name
    document.querySelector(".tempo").innerHTML = Math.floor (dados.main.temp) + "°C"
    document.querySelector(".descricao").innerHTML = dados.weather[0].description
    document.querySelector(".nuvem").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
    document.querySelector(".umidade").innerHTML = " Umidade: " + Math.floor (dados.main.humidity,)+ "% "
} 

async function BuscarCidade(cidade){
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cidade + "&appid=" + chave + "&lang=pt_br" + "&units=metric" ).then(resposta => resposta.json())
    Colocanatela(dados)
    
}



function CliqueNoBotao(){
    let cidade = document.querySelector(".input-cidade").value

    BuscarCidade(cidade)
}