"use strict";
        
AFRAME.registerComponent('placeOnTop', {
    init: function() {

        //object:
        var child = this;
        var parent = child.parentNode;
        console.log(parent);
    }
});