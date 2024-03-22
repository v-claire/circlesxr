//let pickupEnt;
/*
function pickupfunct()
{
    
    //let pickupEnt = this.el;
    this.el.setAttribute('id', {pickedup});

};
*/


function eggtester()
{
    //var sceneEl = document.querySelector('a-scene');
    //var entityEl = document.querySelector('a-entity');
    //var goodegg = sceneEl.entityEl.querySelector('#egg1');

    let can = 'no';
    var sceneEl = document.querySelector('a-scene');

    console.log(sceneEl.querySelector('#egg1'));
    let indy = sceneEl.querySelector('#indicater');

    var elPick = CIRCLES.getPickedUpElement();
   // document.querySelector('pickedup');
   /* var el = this.el;
    el.getAttribute('id');*/
    console.log(elPick);

    if (elPick)
    {
        can = elPick.getAttribute('id');
    }

    if (can == 'egg1')
    {
        console.log('yes');
        indy.setAttribute('material', {color:'rgb(0, 250, 0)'});
    }
    else
    {
        console.log('no');
        indy.setAttribute('material', {color:'rgb(250, 0, 0)'});
    }

}


//circles-pickup-object="pickupPosition: [object Object]; dropPosition: [object Object];"
//circles-artifact origPosition: 
//dropPosition
//"antenna"
//el.object3D.position.set(1, 2, 3);

function nestplace()
{
    var elPick = CIRCLES.getPickedUpElement();
    //releaseObjFunc
    let can = 'no';

    var sceneEl = document.querySelector('a-scene');
    let chicken1 = sceneEl.querySelector('#chickenOnSlides');
    let slides = sceneEl.querySelector('#slideCaseClosed');

    if (elPick)
    {
        can = elPick.getAttribute('id');
    }

    if (can == 'egg1')
    {
        //chicken1.setAttribute(visible,{"false"});
        //visible="false"
        //chicken2.setAttribute(visible,{"true"});
        chicken1.setAttribute('position', {x:-14, y:0, z:-6});
        elPick.setAttribute('circles-pickup-object', {dropPosition:'3.189 -0.32 -0.31'});
        //CONTEXT_AF.release(CONTEXT_AF);
        //CIRCLES.EVENTS.RELEASE_THIS_OBJECT
        //chicken1.emit(CIRCLES.EVENTS.RELEASE_THIS_OBJECT);
        //circles-interactive-object="type:highlight; enabled:false;"
        slides.setAttribute('circles-interactive-object', {enabled:true});
        slides.setAttribute('circles-pickup-object', {enabled:true});
        //CIRCLES.releaseObjFunc();
        
    }
}
//setAttribute('visible', true);
//<a-entity id="release_control" class="button interactive_toggle" position="0 -0.45 0" geometry="primitive: plane; width: 0.2; height: 0.2" material="src: /global/assets/textures/icons/Icon-Release.png; color: rgb(255,255,255); shader: flat; transparent: true" circles-interactive-visible="false" scale=""></a-entity>
//<a-entity id="egg1" position="-1.97838 -0.17264 -1.30793" rotation="-8.481479150569385e-16 -8.481479150569375e-15 -3.392591660227752e-15" scale="30.000000000000007 29.99999999999999 30" gltf-model="/worlds/TOTL_world/assets/models/egg.glb" circles-sphere-env-map="src: [object HTMLImageElement]" shadow="cast: false" circles-pickup-networked="className: and-and-dark-spread-cloths-silver" circles-artefact="inspectScale: 30 30 30; inspectPosition: 1 -0.5 1.3; label_on: false; description_on: false" circles-interactive-object="" class="interactive and-and-dark-spread-cloths-silver narrative circles_artefact" circles-material-extend-fresnel="fresnelOpacity: 0; fresnelPow: 2" sound="volume: 0.5" circles-pickup-object="pickupPosition: 1 -0.5 1.3; pickupScale: 30 30 30; dropPosition: 0 0.48 0.2; dropRotation: 0 90 90; dropScale: 30 30 30; animate: true" circles-object-world="world: TOTL_world; id: egg1; pickedup: true; timeCreated: 1711052868260" networked="template: #circles-interactive-object-template; synchWorldTransforms: true; networkId: egl4he2; owner: prR4DCtgk1qNQrWnAAAD; creator: prR4DCtgk1qNQrWnAAAD" animation__highlightanim="property: circles-material-extend-fresnel.fresnelOpacity; to: 0; dur: 100" animation__cpo_position="property: position; dur: 0; isRawProperty: true; to: [object Object]; easing: easeInOutQuad" animation__cpo_rotation="property: rotation; dur: 0; isRawProperty: true; to: [object Object]; easing: easeInOutQuad" animation__cpo_scale="property: scale; dur: 0; isRawProperty: true; to: [object Object]; easing: easeInOutQuad"></a-entity>

function slidesActive()
{
    var sceneEl = document.querySelector('a-scene');
    let gDoor = sceneEl.querySelector('#garageDoor');
    let slidesOpen = sceneEl.querySelector('#slideCase');
    let slides = sceneEl.querySelector('#slideCaseClosed');
    let place = sceneEl.querySelector('#placebox');
    var elPick = CIRCLES.getPickedUpElement();

    let can = 'no';
    if (elPick)
    {
        can = elPick.getAttribute('id');
    }
    if (can == 'slideCaseClosed')
    {
        slidesOpen.setAttribute('visible', true);
        gDoor.setAttribute('visible', false);
        slides.setAttribute('visible', false);
        place.setAttribute('visible', false);
    }
    
}