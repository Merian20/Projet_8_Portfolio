let aText = new Array(
    "Bonjour, je suis Sophie Hallez, Développeuse Web front-end."
);
let iSpeed = 100;
let iIndex = 0;
let iArrLength = aText[0].length;
let iScrollAt = 20;

let iTextPos = 0;
let sContents = '';
let iRow;

function typewriter() {
    sContents = ' ';
    iRow = Math.max(0, iIndex - iScrollAt);
    let destination = document.getElementById("reveal-text");

    while (iRow < iIndex) {
        sContents += aText[iRow++] + '<br />';
    }
    destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos);

    if (iTextPos++ == iArrLength) {
        iTextPos = 0;
        iIndex++;
        if (iIndex != aText.length) {
            iArrLength = aText[iIndex].length;

            let voirSuite = document.getElementById("voir-suite");
            voirSuite.classList.add("visible");

            setTimeout(typewriter, 500);
        }
    } else {
        setTimeout(typewriter, iSpeed);
    }
}

typewriter();