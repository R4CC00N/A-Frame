AFRAME.registerComponent('orbit', {
  init: function () {
    var padres = document.getElementsByClassName('center'); // Obtiene una referencia a los objetos con la clase 'center'
    var numEsferas = 7;
    var radio = 0.5;

    // Función para generar coordenadas dentro de un círculo alrededor del centro
    function getRandomCirclePosition(centerX, centerZ, radius) {
      var angle2 = Math.random() * Math.PI * 2; // Ángulo aleatorio en radianes
      var x = centerX + Math.cos(angle2) * radius; // Coordenada x dentro del círculo
      var z = centerZ + Math.sin(angle2) * radius; // Coordenada z dentro del círculo
      return { x: x, z: z };
    }

    // Itera sobre todos los elementos con la clase 'center'
    Array.from(padres).forEach(function(padre) {
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
        child.setAttribute('visible','false');
        child.setAttribute('animation','loop','false');

        // Definir el centro y el radio del círculo
        var centerX = padrePosition.x; // Coordenada x del centro
        var centerZ = padrePosition.z; // Coordenada z del centro
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
            this.el.setAttribute('scale', '0.5 0.5 0.5');
          }
        };

        // Definir la animación de posición con movimiento aleatorio
        var positionAnimationData = {
          property: 'position',
          dur: 2000, // Duración de la animación de movimiento en milisegundos
          easing: 'linear', // Función de interpolación
          loop: 'true', // Repetir continuamente
          enable: 'false',
          to: getRandomCirclePosition(centerX, centerZ, radius), // Posición aleatoria dentro del círculo alrededor del centro
          onStart: function () {
            // Al inicio de la animación, establece la posición inicial del objeto en el centro
            this.el.setAttribute('position', { x: centerX, y: 2, z: centerZ });
          },
          onUpdate: function () {
            // En cada actualización de la animación, actualiza la posición con una nueva posición aleatoria dentro del círculo
            this.el.setAttribute('position', getRandomCirclePosition(centerX, centerZ, radius));
          }
        };

        // Aplicar ambas animaciones al objeto
        child.setAttribute('animation__scale', scaleAnimationData, 'stop');
        child.setAttribute('animation__position', positionAnimationData, 'stop');
      }
    });
  }
});




// Componente 'action' para mostrar las esferas cuando se active
AFRAME.registerComponent('action', {
  schema: {
    message: {type: 'string', default: 'desctivate!'},
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
          child[i].setAttribute('animation','loop','true');
        }
      });
    } 
    else {
      // Si el evento no está especificado, simplemente registra el mensaje.
      console.log(data.message);
    };

  }
});

// Componente 'action' para mostrar las esferas cuando se active
AFRAME.registerComponent('desaction', {
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
        var child = document.getElementsByClassName('child');
        var padre = document.getElementById("center");
        padre.setAttribute('animation','loop','false');
        for (var i = 0; i < child.length; i++) {
          child[i].setAttribute('visible','false');
          child[i].setAttribute('animation','loop','false');
        }
      });
    } 
    else {
      // Si el evento no está especificado, simplemente registra el mensaje.
      console.log(data.message);
    };

  }
});



//MODIFICAR



//AFRAME.registerComponent('orbit', {
 //init: function () {
 //  var padre = document.getElementById('center'); // Obtiene una referencia al objeto con la ID 'padre'
 //  var numEsferas = 7;
 //  var radio = 0.5;

 //  // Definir las nuevas coordenadas del centro
 //  var newCenterX = 1;
 //  var newCenterY = 0;
 //  var newCenterZ = 2;

 //  // Crea y posiciona las esferas alrededor del nuevo centro
 //  for (var i = 0; i < numEsferas; i++) {
 //    var angle = (i / numEsferas) * Math.PI * 2; // Calcula el ángulo para distribuir las esferas uniformemente
 //    var x = newCenterX + Math.cos(angle) * radio; // Calcula la posición x en un círculo de radio 'radio' respecto al nuevo centro
 //    var z = newCenterZ + Math.sin(angle) * radio; // Calcula la posición z en un círculo de radio 'radio' respecto al nuevo centro

 //    var child = document.createElement('a-sphere');
 //    child.setAttribute('class', 'child');
 //    child.setAttribute('radius', '0.1');
 //    child.setAttribute('color', 'yellow');
 //    child.setAttribute('opacity', '0.5');
 //    child.setAttribute('position', {x: x, y: newCenterY, z: z}); // Establece la posición inicial de la esfera relativa al nuevo centro
 //    document.querySelector('a-scene').appendChild(child); // Agrega la esfera al escenario
 //  }
  //}
//});



    // Componente 'random-orbit' para generar movimiento aleatorio alrededor del padre
//AFRAME.registerComponent('random-orbit', {
//  schema: {
//    radius: { type: 'number', default: 1 }, // Radio del círculo de movimiento
//    speed: { type: 'number', default: 0.1 } // Velocidad de movimiento
//  },//

//  init: function () {
//    var el = this.el; // Elemento al que se aplica el componente
//    var radius = this.data.radius; // Radio del círculo de movimiento
//    var speed = this.data.speed; // Velocidad de movimiento//

//    // Función para generar una posición aleatoria en el círculo de movimiento
//    function getRandomPosition() {
//      var angle = Math.random() * Math.PI * 2; // Ángulo aleatorio en radianes
//      var x = Math.cos(angle) * radius; // Coordenada x dentro del círculo
//      var z = Math.sin(angle) * radius; // Coordenada z dentro del círculo
//      return { x: x, y: 0, z: z }; // y: 0 asumiendo que el movimiento es en el plano horizontal
//    }//

//    // Actualizar la posición del elemento para moverse alrededor del padre
//    function updatePosition() {
//      var position = el.getAttribute('position');
//      var newPosition = getRandomPosition();
//      el.setAttribute('animation', {
//        property: 'position',
//        dur: 1000, // Duración de la animación en milisegundos
//        easing: 'linear',
//        to: newPosition
//      });
//    }//

//    // Llamar a la función updatePosition periódicamente para generar movimiento aleatorio
//    setInterval(updatePosition, 2000);
//  }
//});
