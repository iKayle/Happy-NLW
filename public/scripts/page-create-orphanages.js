// create map
const map = L.map("mapid").setView([-21.7756534, -43.3704398], 15);

// create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// creat icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

let marker;

//create and add markers
map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;

  // remove icon
  marker && map.removeLayer(marker);

  //add icon layer
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

// adicionar o campo fotos
function addPhotoField() {
  // pegar container fotos #images
  const container = document.querySelector("#images");
  // pegar container para duplicar .new-upload
  const fieldsContainer = document.querySelectorAll(".new-upload");
  // realizar clone da ultima imagem adicionada
  const newFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);
  // verificar se campo esta vazio, se sim, não add container images
  const input = newFieldContainer.children[0];

  if (input.value == "") {
    return;
  }
  // limpar o campo antes de add ao container images
  input.value = "";
  // adicionar clone ao container de #images
  container.appendChild(newFieldContainer);
}

function deleteField(event) {
  const span = event.currentTarget;

  const fieldsContainer = document.querySelectorAll(".new-upload");

  if (fieldsContainer.length < 2) {
    // limpar valor campo
    span.parentNode.children[0].value = "";
    return;
  }

  // deletar campo
  span.parentNode.remove();
}

// select yes or no
function toggleSelect(event) {
  // retirar a class .active (dos botoes)
  document
    .querySelectorAll(".button-select button")
    .forEach((button) => button.classList.remove("active"));

  // pegar botao clicado --------- colocar a class.active no botao clicado
  const button = event.currentTarget;
  button.classList.add("active");

  // atualizar input hidden com valor selecionado
  const input = document.querySelector('[name="open_on_weekends"]');

  //verificar se sim ou nao
  input.value = button.dataset.value;
}

// desafio: apos verificação tudo estiver preenchido envia relatorio

function validate(event) {
  // validar se lat e lng estão preenchidos
  const needsLatAndLng = true;
  if (needsLatAndLng) {
    event.preventDefalt();
    alert("Selecione um ponto no mapa");
  }
}
