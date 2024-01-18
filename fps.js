(function () {
    let previousTime = Date.now();
    let frames = 0;
    let refreshRate = 1000;

    let fpsMeter = document.createElement('div');
    fpsMeter.id = 'fpsMeter';
    document.body.appendChild(fpsMeter);

    requestAnimationFrame(function loop() {
        const TIME = Date.now();
        frames++;
        if (TIME > previousTime + refreshRate) {
            let fps = Math.round((frames * refreshRate) / (TIME - previousTime));
            previousTime = TIME;
            frames = 0;
            fpsMeter.innerHTML = 'FPS: ' + fps * (1000 / refreshRate);
        }
        requestAnimationFrame(loop);
    });

    fpsMeter.style.position = 'fixed';
    fpsMeter.style.top = '2.5%';
    fpsMeter.style.right = '1%';
    fpsMeter.style.zIndex = '50';
    fpsMeter.style.background = 'Red';
    fpsMeter.style.opacity = '0.5';
    fpsMeter.style.padding = '10px';
    fpsMeter.style.color = 'Black';
    fpsMeter.style.fontFamily = "'Flexi IBM VGA True (437', monospace";
    fpsMeter.style.fontSize = '24px';
    fpsMeter.style.zIndex = '10000';
    fpsMeter.style.pointerEvents = 'none';
})();
