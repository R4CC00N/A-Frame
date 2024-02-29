// Componente 'orbit' para crear y posicionar las esferas alrededor del padre
AFRAME.registerComponent('orbit', {
  init: function () {
    var padre = document.getElementById('center'); // Obtiene una referencia al objeto con la ID 'padre'
    var numEsferas = 7;
    var radio = 0.5;

    // Obtener la posición del padre
    var padrePosition = padre.getAttribute('position');

    // Crea y posiciona las esferas alrededor del padre
    for (var i = 0; i < numEsferas; i++) {
      var angle = (i / numEsferas) * Math.PI * 2; // Calcula el ángulo para distribuir las esferas uniformemente
      var x = padrePosition.x + Math.cos(angle) * radio; // Calcula la posición x en un círculo de radio 'radio'
      var z = padrePosition.z + Math.sin(angle) * radio; // Calcula la posición z en un círculo de radio 'radio'

      var child = document.createElement('a-sphere');
      child.setAttribute('class', 'child');
      child.setAttribute('radius', '0.1');
      child.setAttribute('color', 'yellow');
      child.setAttribute('opacity', '0.5');
      child.setAttribute('position', {x: x, y: padrePosition.y, z: z}); // Establece la posición inicial de la esfera relativa al padre
      document.querySelector('a-scene').appendChild(child); // Agrega la esfera al escenario
      padre.setAttribute('visible','false');
      child.setAttribute('visible','false');
      
      
 // Función para generar un valor aleatorio dentro de un rango
function getRandomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

// Función para generar coordenadas dentro de un círculo alrededor del centro
function getRandomCirclePosition(centerX, centerZ, radius) {
  var angle = Math.random() * Math.PI * 2; // Ángulo aleatorio en radianes
  var x = centerX + Math.cos(angle) * radius; // Coordenada x dentro del círculo
  var z = centerZ + Math.sin(angle) * radius; // Coordenada z dentro del círculo
  return { x: x, z: z };
}

// Definir el centro y el radio del círculo
var centerX = 0; // Coordenada x del centro
var centerZ = 0; // Coordenada z del centro
var radius = 5; // Radio del círculo

// Definir la animación de escala con valores aleatorios
var scaleAnimationData = {
  property: 'scale',
  to: '0.1 0.1 0.1', // Escala final más pequeña
  dur: 800, // Duración de la animación en milisegundos (más corta)
  easing: 'linear', // Función de interpolación
  loop: 'true', // Repetir continuamente
  dir: 'alternate', // Alternar la dirección de la animación
  onStart: function () {
    // Al inicio de la animación, establece la escala del objeto en 1 (tamaño original)
    this.el.setAttribute('scale', '1 1 1');
  }
};

// Definir la animación de posición con movimiento aleatorio
var positionAnimationData = {
  property: 'position',
  dur: 5000, // Duración de la animación de movimiento en milisegundos
  easing: 'linear', // Función de interpolación
  loop: 'true', // Repetir continuamente
  to: getRandomCirclePosition(centerX, centerZ, radius), // Posición aleatoria dentro del círculo alrededor del centro
  onStart: function () {
    // Al inicio de la animación, establece la posición inicial del objeto en el centro
    this.el.setAttribute('position', { x: centerX, y: 1, z: centerZ });
  },
  onUpdate: function () {
    // En cada actualización de la animación, actualiza la posición con una nueva posición aleatoria dentro del círculo
    this.el.setAttribute('position', getRandomCirclePosition(centerX, centerZ, radius));
  }
};

// Aplicar ambas animaciones al objeto
child.setAttribute('animation__scale', scaleAnimationData);
child.setAttribute('animation__position', positionAnimationData);

      

    }
  }
});





// Componente 'action' para mostrar las esferas cuando se active
AFRAME.registerComponent('action', {
  schema: {
    message: {type: 'string', default: 'Hello!'},
    event: {type: 'string', default: ''},
  },

  init: function () {
    let data = this.data;  // Component property values.
    let el = this.el;  // Reference to the component's entity. al mismo componente
    if (data.event) {
      // Este evento escucha el evento especificado ('click' en este caso)
      // y muestra las esferas cuando se activa.
      el.addEventListener(data.event, function () {
        console.log(data.message);
        var padre = document.getElementById("center");
        var child = document.getElementsByClassName('child');
        padre.setAttribute('visible','true');
        for (var i = 0; i < child.length; i++) {
          child[i].setAttribute('visible','true');
        }
      });
    } 
    else {
      // Si el evento no está especificado, simplemente registra el mensaje.
      console.log(data.message);
    };

  }
});
