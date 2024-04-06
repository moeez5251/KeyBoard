document.addEventListener('keydown', function (event) {
    // For class handling
    var element = document.getElementsByClassName(event.key);
    for (var i = 0; i < element.length; i++) {
        element[i].style.color = 'cyan';
        element[i].style.borderColor = 'cyan';
    }
    //For Id handling
    var elements = document.getElementById(event.key);
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
    if (event.getModifierState('CapsLock')) {
        alert('Caps Lock is on.Turn off it.');
    }
    console.log(event.key);
    elements.style.color = 'cyan'
    elements.style.borderColor = 'cyan'
});
