//Tipos de dados
//String ""
//Number 01
//Object {}
//Boolean true or false
// Array []

const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

// create map
const map = L.map('mapid', options).setView([-21.7756534,-43.3704398], 15);

// create and add tileLayer
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
).addTo(map);

// creat icon
const icon = L.icon({
    iconUrl:"/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})


// create and add marker
L.marker([-21.7756534,-43.3704398], {icon})
.addTo(map)

/* image gallery */

function selectImage(event){
    const button = event.currentTarget

    //remover todas as classes .active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button){
        button.classList.remove("active")
    }


   //button.forEach((button) => {}) -----outra opção


    //selecionar a image clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")


    //atualizar o container de image
    imageContainer.src = image.src    


    //adicionar a classe .active para este botao clicado
        button.classList.add('active')
}