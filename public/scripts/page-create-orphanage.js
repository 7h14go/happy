//Criação do Mapa
const map = L.map('mapid').setView([-20.3629347,-40.3048321], 15);

//adiciona titulo
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//Cria o icone de pin
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68] 
})

let marker

//criar e marcar
map.on('click', function(event){
    const lat = event.latlng.lat
    const lng = event.latlng.lng

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    //remover icone
    marker && map.removeLayer(marker)
    

    //adicionar icone
    marker = L.marker([lat, lng], {icon}).addTo(map)
})

//adicionar o campo de fotos
function addPhotoField(){
    //pegar o container de fotos #images
    const container = document.querySelector('#images')

    //pegar o container para duplicar .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')

    //realizar o clone da última imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)

    //verificar se o campo está vazio, se sim não adicionar ao container de imagens
    const input = newFieldContainer.children[0]

    if(input.value == ""){
        return
    }

    //limpar o campo antes de adicionar ao container de imagens
    newFieldContainer.children[0].value = ""

    //adicionar o clone ao container de #images
    container.appendChild(newFieldContainer)
}

function deleteField(event){
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length <= 1){
        //limpar valor do campo
        span.parentNode.children[0].value = ""
        return
    }

    //deletar o campo
    span.parentNode.remove()


}

//selecionar sim ou não
function toggleSelect(event){
    //retirar a class .active dos botões
    document.querySelectorAll('.button-select button').forEach((button) => button.classList.remove('active'))

    //colocar a class .active nesse botão clicado
    const button = event.currentTarget
    button.classList.add('active')
    
    //atualizar o meu input hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]')

    //pegar o botão clicado
    //Verificar se sim ou não
    input.value = button.dataset.value

}