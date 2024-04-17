/*
      AFRAME.registerComponent("eggtester", {
        init: function() {
            self.el.addEventListener('click', (e) => {
                
            });

        }
      });*/

function eggtester()
{
// gltf-model="#egg_model"
    //let  = document.getElementById('indicater');
                //console.log(PickUpObj);

                //document.getElementById('indicater')

            var elPick = PickUpObj; //CIRCLES.getPickedUpElement();

            if (elPick != null)
            {
                IDin = elPick.getAttribute('id');
                glb = elPick.getAttribute('gltf-model');
            }

                let thisegg = document.getElementById(glb);
                if (IDin == 'egg1')
                {
                    //elPick.setAttribute('gltf-model', '#goodegg_model');
                    elPick.removeAttribute("gltf-model");
                    elPick.setAttribute('gltf-model', "#goodegg_model");

                }
                else
                {
                    elPick.removeAttribute("gltf-model");
                    elPick.setAttribute('gltf-model', '#badegg_model');
                    //elPick.setAttribute('gltf-model', '#badegg_model');
                }
    

}

function nestplace() //done 
{
    var elPick = PickUpObj;
    let IDin = 'no';

    let chicken1 = document.getElementById('chickenOnSlides');
    let chicken2 = document.getElementById('chickenInCoop');
    let slides = document.getElementById('slideCaseClosed');
    //let nest = document.getElementById('nest');

    if (elPick)
    {
        IDin = elPick.getAttribute('id');
    }

    if (IDin == 'egg1')
    {
        chicken1.setAttribute('visible', false);
        chicken2.setAttribute('visible', true);
        drop(3.189, -0.32, -0.31, 0, 0, 0);
        
        slides.setAttribute('circles-interactive-object', {enabled:true}); //type:highlight
        //slides.setAttribute('pickupable', {enable:true});
        //elPick.setAttribute('pickupable', {enable:false});
        //nest.setAttribute('circles-interactive-object', {type:null}); //no work fix later
        //nest.setAttribute('circles-interactive-object', {enabled:false});
        
        //elPick.setAttribute('pickupable', {enabled:false});
    }
}

function slidesActive() 
{
    //let gDoor = document.getElementById('garageDoor');
    let slidesOpen = document.getElementById('slideCase');
    let slides1 = document.getElementById('slide1');
    let slides2 = document.getElementById('slide2');
    let slides3 = document.getElementById('slide3');
    let slides4 = document.getElementById('slide4');
    let slides5 = document.getElementById('slide5');
    let slides6 = document.getElementById('slide6');
    let slides7 = document.getElementById('slide7');
    let slides8 = document.getElementById('slide8');
    let slides9 = document.getElementById('slide9');
    let slides10 = document.getElementById('slide0');
    //let slides = document.getElementById('slideCaseClosed');
    let place = document.getElementById('placebox');
    var elPick = PickUpObj;

    let IDin = 'no';
    if (elPick)
    {
        IDin = elPick.getAttribute('id');
    }
    if (IDin == 'slideCaseClosed')
    {
        slidesOpen.setAttribute('visible', true);

        slides1.setAttribute('visible', true);
        slides2.setAttribute('visible', true);
        slides3.setAttribute('visible', true);
        slides4.setAttribute('visible', true);
        slides5.setAttribute('visible', true);
        slides6.setAttribute('visible', true);
        slides7.setAttribute('visible', true);
        slides8.setAttribute('visible', true);
        slides9.setAttribute('visible', true);
        slides10.setAttribute('visible', true);

        drop(-12.0, 0.1, -6.5, 0, 0, 0);
        elPick.removeObject3D('mesh');
        //gDoor.setAttribute('visible', false);
        //slides.setAttribute('visible', false);
        place.setAttribute('visible', false);

        //slides.removeAttribute('circles-interactive-object');
    }

}

AFRAME.registerComponent("slides", {
    init: function() {
        var self = this;
        let slidesDisp = document.getElementById('slide_screen');
        self.el.addEventListener('click', (e) => {

            slidenum = self.el.getAttribute('id');
            slidesDisp.setAttribute('visible', true);
            switch (slidenum)
            {
                case 'slide0':
                    slidesDisp.setAttribute('src', '#slide0_img');
                    break;
                case 'slide1':
                    slidesDisp.setAttribute('src', '#slide1_img');
                    break;
                case 'slide2':
                    slidesDisp.setAttribute('src', '#slide2_img');
                    break;
                case 'slide3':
                    slidesDisp.setAttribute('src', '#slide3_img');
                    break;
                case 'slide4':
                    slidesDisp.setAttribute('src', '#slide4_img');
                    break;
                case 'slide5':
                    slidesDisp.setAttribute('src', '#slide5_img');
                    break;
                    case 'slide6':
                    slidesDisp.setAttribute('src', '#slide6_img');
                    break;
                case 'slide7':
                    slidesDisp.setAttribute('src', '#slide7_img');
                    break;
                case 'slide8':
                    slidesDisp.setAttribute('src', '#slide8_img');
                    break;
                default:
                    slidesDisp.setAttribute('src', '#slide9_img');
                    break;
            }
        });
    }
});

//http://localhost:1111/w/TOTL_world/?group=explore

//localhost:1111/add-all-test-data