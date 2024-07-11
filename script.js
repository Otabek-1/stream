async function setupStream(){
    try{
        const constraints = {
            video: {
                mediaSource: 'screen'
            },
            audio: {
                echoCancellation: false,
                noiseSuppression: false,
                sampleRate: 18000,
                volume: 2.0
            }
        };

        const stream = await navigator.mediaDevices.getDisplayMedia(constraints);

        const audioElement = document.querySelector('.audio');
        audioElement.srcObject = stream;
        audioElement.play();
    }catch(e){
        console.log(e);
    }
}

// Ensure setupStream is called when the window is fully loaded
window.addEventListener("load", setupStream);
