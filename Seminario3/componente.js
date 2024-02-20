AFRAME.registerComponent('hello', {
    schema: {
        message: {type: 'string', default: 'Hello!'},
        event: {type: 'string', default: ''},
        event2: {type: 'string', default: ''},
      },

    init: function () {
      let data = this.data;  // Component property values.
      let el = this.el;  // Reference to the component's entity. al mismo componente
      let other = document.getElementById("a-box")
      let pos_y = 0.75
      let rot_x = 0
      if (data.event) {
        // This will log the `message` when the entity emits the `event`.
        el.addEventListener(data.event, function () {
          console.log(data.message);
          var bolita = document.createElement("a-sphere");
          bolita.setAttribute('color', 'green');
          bolita.setAttribute('position', {x: 0, y: pos_y, z: 0});
          bolita.setAttribute('scale', {x: 0.5, y: 0.5, z: 0.5});

          el.appendChild(bolita);
          pos_y += 0.75;
        });
      } else if (data.event2){
        el.addEventListener(data.event2, function () { // cambiando "el" por "other" odemos agregar objetos

            console.log(data.message);
            var donut = document.createElement("a-torus");
            donut.setAttribute('color', 'red');
            donut.setAttribute('position', {x: pos_y+1, y: 0, z: 0});
            donut.setAttribute('scale', {x: 0.75, y: 0.75, z: 0.75});
            donut.setAttribute('rotation', {x: rot_x, y: 0, z: 0});
            
            other.appendChild(donut);
            pos_y += 0.75;
            rot_x += 90;
          });
      }
      else {
        // `event` not specified, just log the message.
        console.log(data.message);
      };

    }
  });