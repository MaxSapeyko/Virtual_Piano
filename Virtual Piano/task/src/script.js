document.addEventListener("keydown", function (event) {
    if (event.code === "KeyA") {
        let audioA = new Audio("../sound/A.mp3");
        audioA.play();
        console.log("The 'A' key is pressed.");
    } else if (event.code === "KeyS") {
        let audioS = new Audio("../sound/S.mp3");
        audioS.play();
        console.log("The 'S' key is pressed.");
    } else if (event.code === "KeyD") {
        let audioD = new Audio("../sound/D.mp3");
        audioD.play();
        console.log("The 'D' key is pressed.");
    } else if (event.code === "KeyF") {
        let audioF = new Audio("../sound/F.mp3");
        audioF.play();
        console.log("The 'F' key is pressed.");
    } else if (event.code === "KeyG") {
        let audioG = new Audio("../sound/G.mp3");
        audioG.play();
        console.log("The 'G' key is pressed.");
    } else if (event.code === "KeyH") {
        let audioH = new Audio("../sound/H.mp3");
        audioH.play();
        console.log("The 'H' key is pressed.");
    } else if (event.code === "KeyJ") {
        let audioJ = new Audio("../sound/J.mp3");
        audioJ.play();
        console.log("The 'J' key is pressed.");
    } else if (event.code === "KeyW") {
        let audioW = new Audio("../sound/W.mp3");
        audioW.play();
        console.log("The 'W' key is pressed.");
    } else if (event.code === "KeyE") {
        let audioE = new Audio("../sound/E.mp3");
        audioE.play();
        console.log("The 'E' key is pressed.");
    } else if (event.code === "KeyT") {
        let audioT = new Audio("../sound/T.mp3");
        audioT.play();
        console.log("The 'T' key is pressed.");
    } else if (event.code === "KeyY") {
        let audioY = new Audio("../sound/Y.mp3");
        audioY.play();
        console.log("The 'Y' key is pressed.");
    } else if (event.code === "KeyU") {
        let audioU = new Audio("../sound/U.mp3");
        audioU.play();
        console.log("The 'U' key is pressed.");
    } else {
        console.log("This key does not exist!!!");
    }
});