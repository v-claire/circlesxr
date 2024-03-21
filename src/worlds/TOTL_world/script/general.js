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
    var sceneEl = document.querySelector('a-scene');
    var entityEl = document.querySelector('a-entity');
    var goodegg = sceneEl.entityEl.querySelector('#egg1');

    var elPick = Circles.getPickedUpElement();
   // document.querySelector('pickedup');
   /* var el = this.el;
    el.getAttribute('id');*/
    if (elPick == goodegg)
    {
        el.setAttribute('material', {color:'rgb(0, 50, 0)'});
    }
    else
    {
        el.setAttribute('material', {color:'rgb(50, 0, 0)'});
    }



}

function antennaplacedown()
{
    
}
//circles-pickup-object="pickupPosition: [object Object]; dropPosition: [object Object];"
//circles-artifact origPosition: 
//dropPosition
//"antenna"
//el.object3D.position.set(1, 2, 3);