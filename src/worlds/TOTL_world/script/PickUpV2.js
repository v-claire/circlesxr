      "use strict";

      let PickUpObj = null;

      function drop(Tx, Ty, Tz, Rx, Ry, Rz)
      {
        PickUpObj.sceneEl.object3D.attach(PickUpObj.object3D); //using three's "attch" allows us to retain world transforms during pickup/release
        self.pickedUp = false;
                  
        PickUpObj.setAttribute('position', {x:Tx, y:Ty, z:Tz});
        PickUpObj.setAttribute('rotation', {x:Rx, y:Ry, z:Rz});
        PickUpObj = null;
      }
      
      AFRAME.registerComponent('pickupable', { 
        schema: {
            //pickupable="dropposition: -3.0 0.0 6.0; droprotation: 0 -15 0;"
            dropposition:     { type: "vec3", default:{x:0.0, y:0.0, z:0.0} },   
            droprotation:     { type: "vec3", default:{x:0.0, y:0.0, z:0.0} },
            enable:           { type: "boolean", default:true },
        },
        init: function() {
          var self = this;
          //player = CIRCLES.getMainCameraElement();
          self.pickedUp = false;

          if (!self.el.classList.contains('interactive')) {
          self.el.classList.add('interactive'); 
          }

          if (self.data.enable == true)
          {
            console.log("enabled");
            const Tx = self.data.dropposition.x; //ginette is the goat
            const Ty = self.data.dropposition.y;
            const Tz = self.data.dropposition.z;

            const Rx = self.data.droprotation.x; //ginette is the goat
            const Ry = self.data.droprotation.y;
            const Rz = self.data.droprotation.z;

            self.el.addEventListener('click', (e) => {
                if (self.pickedUp === true) {
                  //release
                  self.el.sceneEl.object3D.attach(self.el.object3D); //using three's "attch" allows us to retain world transforms during pickup/release
                  self.pickedUp = false;
                  
                  self.el.setAttribute('position', {x:Tx, y:Ty, z:Tz});
                  self.el.setAttribute('rotation', {x:Rx, y:Ry, z:Rz});
                  PickUpObj = null;
                }
                else {
                  //pick-up
                  CIRCLES.getMainCameraElement().object3D.attach(self.el.object3D);
                  self.pickedUp = true;

                  PickUpObj = self.el;
                }
            });

          }
        }
      });
/*
      AFRAME.registerComponent("startup", {
        schema: {},
        multiple: false,
        init: function() {
          console.log("starting up");
        }
      });*/