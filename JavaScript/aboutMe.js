let speech = new SpeechSynthesisUtterance();
let isSpeaking = false;

function toggleSpeech() {
    if (isSpeaking) {
        window.speechSynthesis.cancel(); // Stop speech
        document.getElementById("speak-btn").innerText = "🔊 Listen";
        isSpeaking = false;
    } else {
        let text = document.getElementById("about-text").innerText;
        speech.text = text;
        speech.lang = "en-US";
        speech.rate = 1;
        speech.volume = 1;
        speech.pitch = 1;

        window.speechSynthesis.speak(speech);
        document.getElementById("speak-btn").innerText = "🔇 Stop";
        isSpeaking = true;

        // Detect when speech finishes
        speech.onend = () => {
            document.getElementById("speak-btn").innerText = "🔊 Listen";
            isSpeaking = false;
        };
    }
}

document.getElementById("speak-btn").addEventListener("click", toggleSpeech);