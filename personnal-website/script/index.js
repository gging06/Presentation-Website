var rev = "fwd";
function titlebar(val) {
    var msg = "Gabriel's Peronnal Website";
    var res = " ";
    var speed = 100;
    var pos = val;
    var le = msg.length;
    if (rev == "fwd") {
        if (pos < le) {
            pos = pos + 1;
            scroll = msg.substr(0, pos);
            document.title = scroll;
            timer = window.setTimeout("titlebar(" + pos + ")", speed);
        }
        else {
            rev = "bwd";
            timer = window.setTimeout("titlebar(" + pos + ")", speed);
        }
    }
    else {
        if (pos > 0) {
            pos = pos - 1;
            var ale = le - pos;
            scrol = msg.substr(ale, le);
            document.title = scrol;
            timer = window.setTimeout("titlebar(" + pos + ")", speed);
        }
        else {
            rev = "fwd";
            timer = window.setTimeout("titlebar(" + pos + ")", speed);
        }
    }
}
titlebar(0);


window.addEventListener('load', () => {
    const zoomContainer = document.querySelector('.zoom');
    const astronautImg = document.querySelector('.astronaut-img');
    const delayBeforeReset = 10000;

    astronautImg.classList.add('no-spin');

    zoomContainer.style.transform = 'scale(4)';

    setTimeout(() => {
        zoomContainer.style.transform = 'scale(1)';
        astronautImg.classList.remove('no-spin');
        astronautImg.style.animation = 'spin 10s linear infinite';
    }, delayBeforeReset);
});