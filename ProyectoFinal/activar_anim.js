function getRandomColor() {
  // Genera componentes RGB aleatorios
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);

  // Construye el color en formato RGB
  var color = 'rgb(' + red + ',' + green + ',' + blue + ')';
  
  return color;
}



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
        var color=getRandomColor();
        var angle = (i / numEsferas) * Math.PI * 2; // Calcula el ángulo para distribuir las esferas uniformemente
        var x = padrePosition.x + Math.cos(angle) * radio; // Calcula la posición x en un círculo de radio 'radio'
        var z = padrePosition.z + Math.sin(angle) * radio; // Calcula la posición z en un círculo de radio 'radio'

        var child = document.createElement('a-sphere');
        child.setAttribute('class', 'child');
        child.setAttribute('radius', '0.1');
        child.setAttribute('color', color);
        child.setAttribute('opacity', '0.5');
        child.setAttribute('position', {x: x, y: padrePosition.y + 1, z: z}); // Establece la posición inicial de la esfera relativa al padre
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


AFRAME.registerComponent('orbit2', {
  init: function () {
    var padres = document.getElementsByClassName('center2'); // Obtiene una referencia a los objetos con la clase 'center'
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
        var color = getRandomColor();
        var angle = (i / numEsferas) * Math.PI * 2; // Calcula el ángulo para distribuir las esferas uniformemente
        var x = padrePosition.x + Math.cos(angle) * radio; // Calcula la posición x en un círculo de radio 'radio'
        var z = padrePosition.z + Math.sin(angle) * radio; // Calcula la posición z en un círculo de radio 'radio'

        var child = document.createElement('a-torus-knot');
        child.setAttribute('class', 'child2');
        child.setAttribute('radius', '0.08');
        child.setAttribute('radius-tubular', '0.008');
        child.setAttribute('p', '2');
        child.setAttribute('q', '5');
        child.setAttribute('arc', '180');
        child.setAttribute('color', color);
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
AFRAME.registerComponent('action1', {
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
        var child = document.getElementsByClassName('child');
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
AFRAME.registerComponent('desaction1', {
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
// Componente 'action' para mostrar las esferas cuando se active
AFRAME.registerComponent('action2', {
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
        var child = document.getElementsByClassName('child2');
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
AFRAME.registerComponent('desaction2', {
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
        var child = document.getElementsByClassName('child2');
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