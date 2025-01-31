//access element
let input = document.querySelector("#task-input-field");
let voiceBtn = document.getElementById("voice");

function voiceCommand() {
    if (("webkitSpeechRecognition" in window) || ("SpeechRecognition" in window)) {
        let voice = new (window.webkitSpeechRecognition || window.SpeechRecognition)()

        //set some setting for their voice command
        voice.continuous = false;
        voice.lang = "en-US";
        voice.interimResults = true;

        //start
        voice.start();

        //extract text from speech object
        voice.onresult = (e) => {
            input.value = e.results[0][0].transcript;

        }

        //speech end
        voice.onspeechend = () => {
            voice.stop();
        }
    }
    else {
        alert("Sorry, your browser does not support voice commands.")
    }
}

//event add on microphone button
voiceBtn.addEventListener("click", voiceCommand);