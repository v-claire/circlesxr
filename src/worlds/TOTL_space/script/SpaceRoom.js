AFRAME.registerComponent('rotate-dial', {
    schema: {
        dialPos: {type:'number', default:90}
    },

    init: function() {
        const data = this.data;
        this.el.addEventListener('click', function() {
            let dial = document.getElementById("radioDial");
            let currentChannel = data.dialPos;

            let staticSound = document.getElementById("staticSound");
            let musicSound = document.getElementById("musicSound");



            switch (currentChannel) {
                case 90:
                    dial.setAttribute('rotation', {x: 0, y:90, z: -20});
                    staticSound.setAttribute("circles-sound", "type:music; src:#music; autoplay:false; loop:true; volume:0.02; state:play;");
                    musicSound.setAttribute("circles-sound", "type:music; src:#music; autoplay:false; loop:true; volume:0.02; state:stop;");
                    currentChannel = 120;
                    dial.setAttribute("dialPos", 120);
                    break;

                case 120:
                    dial.setAttribute('rotation', {x: 0, y:90, z: -40});
                    staticSound.setAttribute("circles-sound", "type:music; src:#music; autoplay:false; loop:true; volume:0.02; state:play;");
                    musicSound.setAttribute("circles-sound", "type:music; src:#music; autoplay:false; loop:true; volume:0.02; state:stop;");
                    currentChannel = 140;
                    dial.setAttribute("dialPos", 140);
                    break;

                case 140:
                    dial.setAttribute('rotation', {x: 0, y:90, z: -60});
                    staticSound.setAttribute("circles-sound", "type:music; src:#music; autoplay:false; loop:true; volume:0.02; state:play;");
                    musicSound.setAttribute("circles-sound", "type:music; src:#music; autoplay:false; loop:true; volume:0.02; state:stop;");
                    currentChannel = 160;
                    dial.setAttribute("dialPos", 160);
                    break;

                case 160:
                    dial.setAttribute('rotation', {x: 0, y:90, z: 60});
                    staticSound.setAttribute("circles-sound", "type:music; src:#music; autoplay:false; loop:true; volume:0.02; state:play;");
                    musicSound.setAttribute("circles-sound", "type:music; src:#music; autoplay:false; loop:true; volume:0.02; state:stop;");
                    currentChannel = 55;
                    dial.setAttribute("dialPos", 55);
                    break;

                case 55:
                    dial.setAttribute('rotation', {x: 0, y:90, z: 40});
                    staticSound.setAttribute("circles-sound", "type:music; src:#music; autoplay:false; loop:true; volume:0.02; state:play;");
                    musicSound.setAttribute("circles-sound", "type:music; src:#music; autoplay:false; loop:true; volume:0.02; state:stop;");
                    currentChannel = 60;
                    dial.setAttribute("dialPos", 60);
                    break;

                case 60:
                    dial.setAttribute('rotation', {x: 0, y:90, z: 20});
                    staticSound.setAttribute("circles-sound", "type:music; src:#music; autoplay:false; loop:true; volume:0.02; state:true;");
                    musicSound.setAttribute("circles-sound", "type:music; src:#music; autoplay:false; loop:true; volume:0.02; state:play;");
                    currentChannel = 70;
                    dial.setAttribute("dialPos", 70);
                    break;

                case 70:
                    dial.setAttribute('rotation', {x: 0, y:90, z: -20});
                    staticSound.setAttribute("circles-sound", "type:music; src:#music; autoplay:false; loop:true; volume:0.02; state:play;");
                    musicSound.setAttribute("circles-sound", "type:music; src:#music; autoplay:false; loop:true; volume:0.02; state:stop;");
                    currentChannel = 120;
                    dial.setAttribute("dialPos", 120);
                    break;

                default:
                    break;



            }            
            
        });
    }
});

function lighton()
{
    let elPick = document.getElementById("lighthouse");
    elPick.removeAttribute("gltf-model");
    elPick.setAttribute('gltf-model', "#lighthouse_model");
}
/*function Dial(row, num)
{
    switch (num){
        case 1:
            //change display
            //emit number
            row.num.setAttribute('value', "1");
            break;
        case 2:
            row.num.setAttribute('value', "2");
            break;
        case 3:
            row.num.setAttribute('value', "3");
            break;
        case 4:
            row.num.setAttribute('value', "4");
            break;
        case 5:
            row.num.setAttribute('value', "5");
            break;
        case 6:
            row.num.setAttribute('value', "6");
            break;
        case 7:
            row.num.setAttribute('value', "7");
            break;
        case 8:
            row.num.setAttribute('value', "8");
            break;
        default:
            row.num.setAttribute('value', "9");
            break;
    }
}*/

/* 
    swich onclick
    {
        case: rotate to ## degrees
            set text-value = ####
            play audio

        case: rotate to ## degrees
            set text-value = ####
            play audio

        case: rotate to ## degrees
            set text-value = ####
            play audio

        case: rotate to ## degrees
            set text-value = ####
            play audio
    }
*/

/*
AFRAME.registerComponent('setupvp', {
    init: function () {
        let a = 0;
        let b = 0;
        let c = 0;
    },
    tick: function () {
        if (a = 2, b = 0, c = 8)
        {
            //activate finale
        }
    }
});*/
//world varible of array of numbers entered
// consistent check of 