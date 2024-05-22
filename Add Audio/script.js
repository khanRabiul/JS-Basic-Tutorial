

/* for (i = 0; i < 3; i++) {
    document.querySelectorAll(".myButton")[i].addEventListener("click", function (){
        const text = this.innerHTML;
        console.log(text);

        let audioSrc;
        switch (text) {
            case "a":
                audioSrc = "../Audio/001.mp3";
                break;

            case "b" :
                audioSrc = "../Audio/113.mp3";
                break;
            
            case "c":
                audioSrc = "../Audio/114.mp3";
                break;
        }
        if (audioSrc) {
            let audio = new Audio(audioSrc);
            audio.play();
        }
    })
} */

// If we want to ensure single audio at a time

let currentAudio = null;
for (i = 0; i < 3; i++) {
    document.querySelectorAll(".myButton")[i].addEventListener("click", function (){
        const text = this.innerHTML;
        console.log(text);

        let audioSrc;
        switch (text) {
            case "a":
                audioSrc = "../Audio/001.mp3";
                break;

            case "b" :
                audioSrc = "../Audio/113.mp3";
                break;
            
            case "c":
                audioSrc = "../Audio/114.mp3";
                break;
        }
        if (audioSrc) {
            if(currentAudio) { //before playing a neew audio, this script checks  if there is a 'currentAudio' playing. If so, it pauses it.
                currentAudio.pause();
                currentAudio.currentTime = 0; //reset the audio to the beginning
            }
            currentAudio = new Audio (audioSrc);
            currentAudio.play();
        }
    })
}