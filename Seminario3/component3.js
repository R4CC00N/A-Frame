AFRAME.registerComponent('hello', {
    schema: {
        message: {type: 'string', default: 'Hello!'}
      },

    init: function () {
        console.log(this.data.message);
    }
  });
  AFRAME.registerComponent('msg', {
    schema: {
        message2: {type: 'string', default: 'probando...!'}
      },

    init: function () {
        console.log(this.data.message2);
    }
  });