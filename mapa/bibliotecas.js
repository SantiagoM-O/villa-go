const libroIcon = L.icon({
  iconUrl: './imagenes/libro.png', // Ruta de la imagen
  iconSize: [20,20], // Tamaño de la imagen
  iconAnchor: [12, 7], // Punto de anclaje de la imagen
});

const biblioteca_German_Arciniegas = L.marker([4.127171229733253, -73.63579511040098], {
  icon: libroIcon 
}).bindPopup('Biblioteca German Arciniegas');

const biblioteca_Publica_COFREM = L.marker([4.147576646483773, -73.62100142433079], {
  icon: libroIcon 
}).bindPopup('Biblioteca Publica COFREM');

const biblioteca_Banco_De_La_Republica = L.marker([4.151157711534779, -73.63771524276633], {
  icon: libroIcon 
}).bindPopup('Biblioteca Banco De La Republica');

const biblioteca_unimeta = L.marker([4.148749572483786, -73.63663661983905], {
  icon: libroIcon 
}).bindPopup('Biblioteca unimeta');

const biblioteca_USTA_Villavicencio = L.marker([4.122015232972782, -73.6147407400061], {
  icon: libroIcon 
}).bindPopup('Biblioteca USTA Villavicencio');

const biblioteca_Publica_Departamental_Eduardo_Carranza = L.marker([4.152737599912463, -73.63834926351255], {
  icon: libroIcon 
}).bindPopup('Biblioteca Publica Departamental Eduardo Carranza');

const biblioteca_SENA_CISM = L.marker([4.127252989266202, -73.63995598964443], {
  icon: libroIcon 
}).bindPopup('Biblioteca SENA CISM');

const biblioteca_Central_Universidad_Cooperativa_de_Colombia = L.marker([4.11604256799751, -73.60918418287785], {
  icon: libroIcon 
}).bindPopup('Biblioteca Central Universidad Cooperativa de Colombia');

const biblioteca_Jorge_Boschell_Manrique = L.marker([4.075290418451728, -73.58503952130899], {
  icon: libroIcon 
}).bindPopup('Biblioteca Jorge Boschell Manrique');

const biblioteca_AUNAD = L.marker([4.103141099485004, -73.59074242105645], {
  icon: libroIcon 
}).bindPopup('Biblioteca AUNAD');

const biblioteca_Unillanos_Sede_San_Antonio = L.marker([4.146479482777698, -73.64382205992291], {
  icon: libroIcon 
}).bindPopup('Biblioteca Unillanos Sede San Antonio');

const biblioteca_Bloque_Ciencias_de_la_Salud_Universidad_Cooperativa_de_Colombia = L.marker([4.148002773097766, -73.63891100217293], {
  icon: libroIcon 
}).bindPopup('Biblioteca Bloque Ciencias de la Salud Universidad Cooperativa de Colombia');

const biblioteca_Libreria_La_Sabiduria = L.marker([4.150881533143729, -73.63823870661791], {
  icon: libroIcon 
}).bindPopup('Biblioteca Libreria La Sabiduria');
