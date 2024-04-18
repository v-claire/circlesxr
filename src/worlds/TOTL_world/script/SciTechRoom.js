//on click radio on play audio
//
//trunk code system
//
//when antenna are placed tv under it on
//
//radio set dials


AFRAME.registerComponent('tvplace', {
    init: function() {
        var self = this;
        let TvPos = null;
        self.el.addEventListener('click', (e) => {
            console.log(PickUpObj);
            let Tv = self.el;
    
            let IDin = 'no';
            if (PickUpObj)
            {
                IDin = PickUpObj.getAttribute('id');
                console.log("id set");
            }

            TvPos = Tv.getAttribute('position');
            TvID = Tv.getAttribute('id');
            
            if (IDin == 'antenna')
            {
                console.log("Tv drop");
                drop(TvPos.x, 1.6, TvPos.z, 0, -30, 0);
            }

            if (TvID == 'television1')
            {
                Tv.removeAttribute("gltf-model");
                Tv.setAttribute('gltf-model', "#television3_model");
            }
            else if (TvID == 'television2')
            {
                Tv.removeAttribute("gltf-model");
                Tv.setAttribute('gltf-model', "#television5_model");
            }
            else
            {
                Tv.removeAttribute("gltf-model");
                Tv.setAttribute('gltf-model', "#television7_model");
            }
            
        });
    },
    tick: function()
    {

    }
});

AFRAME.registerComponent("cameraari", {
    init: function() {
        var self = this;
        let IDin = null;
        let card = document.getElementById('keyCard');
        self.el.addEventListener('click', (e) => {   
            //PickUpObj
            if (PickUpObj)
            {
                IDin = PickUpObj.getAttribute('id');
            }

            if (IDin == 'cameraLens')
            {
                card.setAttribute('visible', true);
                drop(0.0, 0.0, 0.0, 0, 0, 0);
                let del = document.getElementById(IDin);
                del.removeObject3D('mesh');
            }
            
        });

    }
});