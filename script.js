
async function setupStream(){
    try{
        const stream = await navigator.mediaDevices.getDisplayMedia({
            video: {
                mediaSource: 'screen'
            },
            audio: {
                echoCancellation: false,  // Enable noise cancellation
                noiseSuppression: false, // Enable automatic noise suppression
                sampleRate: 18000,         // Set the audio sample rate to 48 kHz
                volume: 2.0               // Set the audio volume to maximum. Adjust as needed.
            }  // Enable audio capture as well. This might be a privacy concern. Adjust as needed.
        })
        const audioElement = document.querySelector('.audio');
        audioElement.srcObject = stream;
        audioElement.play();
    }catch(e){
        console.log(e);
    }
}

window.addEventListener("load",setupStream());