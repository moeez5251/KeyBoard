document.addEventListener('keydown', function (event) {
    // For class handling
    var element = document.getElementsByClassName(event.key);
    // for (var i = 0; i < element.length; i++) {
    //     element[i].style.color = 'cyan';
    //     element[i].style.borderColor = 'cyan';
    // }
    //For Id handling
    var elements = document.getElementById(event.key);

    //Caps Lock Alert
    if (event.getModifierState('CapsLock')) {
        confirm('Caps Lock is on.Turn off it.');
    }
    //For Prevent F1-F12 Behaviour
    if (event.keyCode >= 112 && event.keyCode <= 123) {
        event.preventDefault();
    }
    //For Prevent Tab Behaviour
    if (event.keyCode == 9) {
        event.preventDefault();
    }
    if (event.keyCode == 'Meta') {
        event.preventDefault();
    }
    // Alt Key Error
    if (event.keyCode == 18) {
        event.preventDefault();
    }
//Arrow Keys Handling
    if (event.keyCode>=37&&event.keyCode<=40||event.keyCode==33||event.keyCode==34) {
        event.preventDefault();
    }
    // Two keys in Keyboard handling
    if (event.key=="Alt"&&event.code=="AltRight") {
                document.getElementById("Alt-Right").style.color='cyan'
                document.getElementById("Alt-Right").style.borderColor='cyan'
            }
            else if (event.key=="Alt"&&event.code=="AltLeft") {
                document.getElementById("Alt-Left").style.color='cyan'
                document.getElementById("Alt-Left").style.borderColor='cyan'
            }
            else if (event.key=="Shift"&&event.code=="ShiftLeft") {
                document.getElementById("shift-left").style.color='cyan'
       document.getElementById("shift-left").style.borderColor='cyan'
   }
            else if (event.key=="Shift"&&event.code=="ShiftRight") {
                document.getElementById("shift-right").style.color='cyan'
       document.getElementById("shift-right").style.borderColor='cyan'
    }
    else if (event.key=="Control"&&event.code=="ControlLeft") {
       document.getElementById("Left-C").style.color='cyan'
   document.getElementById("Left-C").style.borderColor='cyan'

   }
    else if (event.key=="Control"&&event.code=="ControlRight") {
       document.getElementById("Right-C").style.color='cyan'
   document.getElementById("Right-C").style.borderColor='cyan'

   }
   else if (event.code=="IntlBackslash") {
    document.getElementById("Slash").style.color='cyan'
    document.getElementById("Slash").style.borderColor='cyan'
   }
   
   else{
    elements.style.color='cyan';
    elements.style.borderColor='cyan';
   }
});