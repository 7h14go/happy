const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

//Criação do Mapa
const map = L.map('mapid', options).setView([-20.3629347,-40.3048321], 16);

//adiciona titulo
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//Cria o icone de pin
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170,2]
})

//Criar e marcar o pin
L.marker([-20.3629347,-40.3048321], {icon})
    .addTo(map)


    /* Image Galerry */

    function selectImage(event){
        const button = event.currentTarget

        //remover todas as classes .active
        const buttons = document.querySelectorAll(".images button")
        buttons.forEach(button => {
            button.classList.remove("active")
        });

        //Selecionar a imagem clicada
        const image = button.children[0]
        const imageContainer = document.querySelector(".orphanage-details > img")

        //Atualizar o container de imagem
        imageContainer.src = image.src

        //Adicionar a classe .active para este botão
        button.classList.add('active')
    }