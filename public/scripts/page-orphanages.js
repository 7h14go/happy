//Criação do Mapa
const map = L.map('mapid').setView([-20.3629347,-40.3048321], 16);

//adiciona titulo
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//Cria o icone de pin
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29.68],
    popupAnchor: [170,70]
})

//Criar popup overlay
const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent('Lar das meninas <a href="orphanage.html?id=1" class="choose-orphanage"> <img src="./public/images/arrow-white.svg" /></a>')

//Criar e marcar o pin
L.marker([-20.3629347,-40.3048321], {icon})
    .addTo(map)
    .bindPopup(popup)