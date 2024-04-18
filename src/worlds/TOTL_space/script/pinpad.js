'use strict';

// ---------------- PIN ENTRY SUCCESS VARIABLE --------------------------------
let challengeComplete = false;
// ----------------------------------------------------------------------------

// Operational Variables (No need to adjust these)
let pinAttempt = {a:'*', b:'*', c:'*', d:'*'};
let correctPin1 = {a:0, b:0, c:0, d:0};
let correctPin2 = {a:0, b:0, c:0, d:0};
let correctPin3 = {a:0, b:0, c:0, d:0};
let pinDigits = 4;
let pinCount = 1;
let currentDigit = 1;

let pin1Entered = false;
let pin2Entered = false;
let pin3Entered = false;

// ------------ PIN PAD CREATION FUNCTION ------------------------------------
function makePinpad(CONTEXT_AF) {
    const PIN_BUTTON_SIZE = 0.2;

    let aScene = document.querySelector('a-scene');

    // Setting up a wrapper entity for the pin pad to exist within
    CONTEXT_AF.pinPadWrapper = document.createElement('a-entity');
    CONTEXT_AF.pinPadWrapper.setAttribute('id', 'pinpad_wrapper');
    let wrapperPosX = 0;
    let wrapperPosY = 0;
    let wrapperPosZ = 0;
    switch(CONTEXT_AF.object3D.rotation.y * (180/Math.PI)) {
        case 0:
            wrapperPosX = CONTEXT_AF.object3D.position.x;
            wrapperPosY = CONTEXT_AF.object3D.position.y;
            wrapperPosZ = CONTEXT_AF.object3D.position.z + 0.2;
            break;
        case 90:
            wrapperPosX = CONTEXT_AF.object3D.position.x + 0.2;
            wrapperPosY = CONTEXT_AF.object3D.position.y;
            wrapperPosZ = CONTEXT_AF.object3D.position.z;
            break;
        case 180:
            wrapperPosX = CONTEXT_AF.object3D.position.x;
            wrapperPosY = CONTEXT_AF.object3D.position.y;
            wrapperPosZ = CONTEXT_AF.object3D.position.z - 0.2;
            break;
        case 270:
            wrapperPosX = CONTEXT_AF.object3D.position.x - 0.2;
            wrapperPosY = CONTEXT_AF.object3D.position.y;
            wrapperPosZ = CONTEXT_AF.object3D.position.z;
            break;
        case -90:
            wrapperPosX = CONTEXT_AF.object3D.position.x - 0.2;
            wrapperPosY = CONTEXT_AF.object3D.position.y;
            wrapperPosZ = CONTEXT_AF.object3D.position.z;
            break;
    }
    CONTEXT_AF.pinPadWrapper.setAttribute('position', {x:wrapperPosX, y:wrapperPosY, z:wrapperPosZ});
    let wrapperRotX = CONTEXT_AF.object3D.rotation.x * (180/Math.PI);
    let wrapperRotY = CONTEXT_AF.object3D.rotation.y * (180/Math.PI);
    let wrapperRotZ = CONTEXT_AF.object3D.rotation.z * (180/Math.PI);
    CONTEXT_AF.pinPadWrapper.setAttribute('rotation', {x:wrapperRotX, y:wrapperRotY, z:wrapperRotZ});
    aScene.appendChild(CONTEXT_AF.pinPadWrapper);

    // Initializing variables to put the buttons in a grid
    let buttonRowPos = 0;
    let buttonColPos = 0;
    let buttonX = (-1 * PIN_BUTTON_SIZE);
    let buttonY = PIN_BUTTON_SIZE;
    let btnPosX = 0;
    let btnPosY = 0;

    // Loop to create the 12 buttons in a grid
    for (let i = 1; i < 13; i++) {
        if (buttonRowPos == 3) {
            buttonRowPos = 0;
            buttonColPos += 1;
        }

        let buttonID = "pinBtn" + String(i);
        let textID = "btnText" + String(i);
        CONTEXT_AF.pinButton = document.createElement('a-entity');
        CONTEXT_AF.pinButton.setAttribute('id', buttonID);
        CONTEXT_AF.pinButton.setAttribute('class', 'button');
        btnPosX = (buttonX + (PIN_BUTTON_SIZE * buttonRowPos));
        btnPosY = (buttonY - (PIN_BUTTON_SIZE * buttonColPos));
        CONTEXT_AF.pinButton.setAttribute('position', {x:btnPosX, y:btnPosY, z:0});
        CONTEXT_AF.pinButton.setAttribute('geometry', {primitive:'plane', width:PIN_BUTTON_SIZE, height:PIN_BUTTON_SIZE});
        CONTEXT_AF.pinButton.setAttribute('material', {color:'rgba(255,255,255,200)'});
        CONTEXT_AF.pinButton.setAttribute('circles-interactive-object', {type:'scale'});
        CONTEXT_AF.pinPadWrapper.appendChild(CONTEXT_AF.pinButton);
        switch(i) {
            case 10:
                CONTEXT_AF.pinButton.addEventListener('click', function (){
                    modifyAttempt(-1);
                });
                break;
            case 12:
                CONTEXT_AF.pinButton.addEventListener('click', function (){
                    checkPin();
                });
                break;
            default:
                CONTEXT_AF.pinButton.addEventListener('click', function (){
                    switch(this.id) {
                        case 'pinBtn1':
                            modifyAttempt(1);
                            break;
                        case 'pinBtn2':
                            modifyAttempt(2);
                            break;
                        case 'pinBtn3':
                            modifyAttempt(3);
                            break;
                        case 'pinBtn4':
                            modifyAttempt(4);
                            break;
                        case 'pinBtn5':
                            modifyAttempt(5);
                            break;
                        case 'pinBtn6':
                            modifyAttempt(6);
                            break;
                        case 'pinBtn7':
                            modifyAttempt(7);
                            break;
                        case 'pinBtn8':
                            modifyAttempt(8);
                            break;
                        case 'pinBtn9':
                            modifyAttempt(9);
                            break;
                        case 'pinBtn11':
                            modifyAttempt(0);
                            break;
                    }
                });
        }

        // Adding text onto the buttons
        CONTEXT_AF.buttonText = document.createElement('a-entity');
        CONTEXT_AF.buttonText.setAttribute('id', textID);
        switch(i) {
            case 10:
                CONTEXT_AF.buttonText.setAttribute('position', {x:0.67, y:0, z:0.01});
                CONTEXT_AF.buttonText.setAttribute('text', {value:'Undo', color:'black', font:'roboto', width:1.5});
                break;
            case 11: 
                CONTEXT_AF.buttonText.setAttribute('position', {x:0.95, y:0, z:0.01});
                CONTEXT_AF.buttonText.setAttribute('text', {value:'0', color:'black', font:'roboto', width:2});
                break;
            case 12:
                CONTEXT_AF.buttonText.setAttribute('position', {x:0.65, y:0, z:0.01});
                CONTEXT_AF.buttonText.setAttribute('text', {value:'Enter', color:'black', font:'roboto', width:1.5});
                break;
            default:
                CONTEXT_AF.buttonText.setAttribute('position', {x:0.95, y:0, z:0.01});
                CONTEXT_AF.buttonText.setAttribute('text', {value:String(i), color:'black', font:'roboto', width:2});
        }
        CONTEXT_AF.pinButton.appendChild(CONTEXT_AF.buttonText);        

        buttonRowPos += 1;
    }

    // Creating the entry field at the top of the pin pad

    CONTEXT_AF.entryText = document.createElement('a-entity');
    CONTEXT_AF.entryText.setAttribute('id', 'padTextField');
    CONTEXT_AF.entryText.setAttribute('position', {x:1.3, y:0.5, z:0.1});
    let initialText = "";
    if (pinDigits == 3) {
        initialText = String(pinAttempt.a) + String(pinAttempt.b) + String(pinAttempt.c);
    }
    else if (pinDigits == 4)
    {
        initialText = String(pinAttempt.a) + String(pinAttempt.b) + String(pinAttempt.c) + String(pinAttempt.d);
    }
    CONTEXT_AF.entryText.setAttribute('text', {value:initialText, color:'white', font:'roboto', width:3});
    CONTEXT_AF.pinPadWrapper.appendChild(CONTEXT_AF.entryText);
}

// ----------------- MODIFYING ENTRY FIELD TEXT --------------------------

function modifyAttempt(numToMod) {
    if (numToMod == -1) {
        switch(currentDigit) {
            case 1:
                break;
            case 2:
                currentDigit -= 1;
                pinAttempt.a = '*';
                break;
            case 3:
                currentDigit -= 1;
                pinAttempt.b = '*';
                break;
            case 4:
                currentDigit -= 1;
                pinAttempt.c = '*';
                break;
            case 5:
                currentDigit -= 1;
                pinAttempt.d = '*';
                break;
        }
    }
    else {
        switch(currentDigit) {
            case 1:
                pinAttempt.a = String(numToMod);
                currentDigit += 1;
                break;
            case 2:
                pinAttempt.b = String(numToMod);
                currentDigit += 1;
                break;
            case 3:
                pinAttempt.c = String(numToMod);
                currentDigit += 1;
                break;
            case 4:
                pinAttempt.d = String(numToMod);
                if (currentDigit < 5 && pinDigits == 4) {
                    currentDigit += 1;
                }
                break;
        }
    }
    let pinPadText = document.querySelector('#padTextField');
    let textToWrite = "";
    if (pinDigits == 3) {
        textToWrite = String(pinAttempt.a) + String(pinAttempt.b) + String(pinAttempt.c);
    }
    else if (pinDigits == 4)
    {
        textToWrite = String(pinAttempt.a) + String(pinAttempt.b) + String(pinAttempt.c) + String(pinAttempt.d);
    }
    pinPadText.setAttribute('text', {value:textToWrite, color:'white', font:'roboto', width:3});
}

// ---------- CHECKING PIN TO SEE IF CORRECT -----------------------

function checkPin() {
    if (pinDigits == 3) {
        pinAttempt.d = pinAttempt.c;
        pinAttempt.c = pinAttempt.b;
        pinAttempt.b = pinAttempt.a;
        pinAttempt.a = 0;
    }
    
    if (pinCount == 1) {
        if (pinAttempt.a == correctPin1.a && pinAttempt.b == correctPin1.b && pinAttempt.c == correctPin1.c && pinAttempt.d == correctPin1.d) {
            challengeComplete = true;
            deletePinPad();
        }
        else {
            console.log("Incorrect pin, please try again.");
        }
    }
    else if (pinCount == 2) {
        if (pinAttempt.a == correctPin1.a && pinAttempt.b == correctPin1.b && pinAttempt.c == correctPin1.c && pinAttempt.d == correctPin1.d) {
            console.log("First correct pin recieved!");
            pin1Entered = true;
            if (pin1Entered == true && pin2Entered == true) {
                challengeComplete = true;
                deletePinPad();
            }
        }
        else if (pinAttempt.a == correctPin2.a && pinAttempt.b == correctPin2.b && pinAttempt.c == correctPin2.c && pinAttempt.d == correctPin2.d) {
            console.log("Second correct pin received!");
            pin2Entered = true;
            if (pin1Entered == true && pin2Entered == true) {
                challengeComplete = true;
                deletePinPad();
            }
        }
        else {
            console.log("Incorrect pin, please try again.");
        }
    }
    else if (pinCount == 3) {
        if (pinAttempt.a == correctPin1.a && pinAttempt.b == correctPin1.b && pinAttempt.c == correctPin1.c && pinAttempt.d == correctPin1.d) {
            console.log("First correct pin recieved!");
            pin1Entered = true;
            if (pin1Entered == true && pin2Entered == true && pin3Entered == true) {
                challengeComplete = true;
                deletePinPad();
            }
        }
        else if (pinAttempt.a == correctPin2.a && pinAttempt.b == correctPin2.b && pinAttempt.c == correctPin2.c && pinAttempt.d == correctPin2.d) {
            console.log("Second correct pin received!");
            pin2Entered = true;
            if (pin1Entered == true && pin2Entered == true && pin3Entered == true) {
                challengeComplete = true;
                deletePinPad();
            }
        }
        else if (pinAttempt.a == correctPin3.a && pinAttempt.b == correctPin3.b && pinAttempt.c == correctPin3.c && pinAttempt.d == correctPin3.d) {
            console.log("Third correct pin received!");
            pin3Entered = true;
            if (pin1Entered == true && pin2Entered == true && pin3Entered == true) {
                challengeComplete = true;
                deletePinPad();
            }
        }
        else {
            console.log("Incorrect pin, please try again.");
        }
    }

    pinAttempt = {a:'*', b:'*', c:'*', d:'*'};
    let pinPadText = document.querySelector('#padTextField');
    let resetPinText = "";
    if (pinDigits == 3) {
        resetPinText = pinAttempt.a + pinAttempt.b + pinAttempt.c;
    }
    else if (pinDigits == 4)
    {
        resetPinText = pinAttempt.a + pinAttempt.b + pinAttempt.c + pinAttempt.d;
    }
    pinPadText.setAttribute('text', {value:resetPinText, color:'white', font:'roboto', width:3});
    currentDigit = 1;
}

// ---------------- DELETING THE PIN PAD ----------------------------------

function deletePinPad() {
    let pinPadWrap = document.querySelector('#pinpad_wrapper');
    pinPadWrap.parentNode.removeChild(pinPadWrap);
}

// ---------------------- COMPONENT -----------------------------------------

AFRAME.registerComponent('create-pinpad', {
    schema: {
        digits: {type:'number', default:4},
        numPins: {type:'number', default:1},
        firstAnswer: {type:'number', default:1111},
        secondAnswer: {type:'number', default:1111},
        thirdAnswer: {type:'number', default:1111}
    },

    init: function() {
        const data = this.data;
        this.el.addEventListener('click', function() {
            pinDigits = data.digits;
            pinCount = data.numPins;
            let pin1a = Math.floor(data.firstAnswer/1000);
            let pin1b = (Math.floor(data.firstAnswer/100) - (pin1a * 10));
            let pin1c = (Math.floor(data.firstAnswer/10) - ((pin1a * 100) + (pin1b * 10)));
            let pin1d = (data.firstAnswer - ((pin1a * 1000) + (pin1b * 100) + (pin1c * 10))); 
            correctPin1 = {a:pin1a, b:pin1b, c:pin1c, d:pin1d};
            console.log(correctPin1);

            if (pinCount > 1) {
                let pin2a = Math.floor(data.secondAnswer/1000);
                let pin2b = (Math.floor(data.secondAnswer/100) - (pin2a * 10));
                let pin2c = (Math.floor(data.secondAnswer/10) - ((pin2a * 100) + (pin2b * 10)));
                let pin2d = (data.secondAnswer - ((pin2a * 1000) + (pin2b * 100) + (pin2c * 10))); 
                correctPin2 = {a:pin2a, b:pin2b, c:pin2c, d:pin2d};

                let pin3a = Math.floor(data.thirdAnswer/1000);
                let pin3b = (Math.floor(data.thirdAnswer/100) - (pin3a * 10));
                let pin3c = (Math.floor(data.thirdAnswer/10) - ((pin3a * 100) + (pin3b * 10)));
                let pin3d = (data.thirdAnswer - ((pin3a * 1000) + (pin3b * 100) + (pin3c * 10))); 
                correctPin3 = {a:pin3a, b:pin3b, c:pin3c, d:pin3d};
            }

            makePinpad(this);
        });
    },
    tick: function() {
        if (challengeComplete == true)
        {
            
        }
    }
});