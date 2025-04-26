function changeFontSize() {
    const size = document.getElementById("fontSize").value;
    document.getElementById("text").style.fontSize = size + "px";
  }
  
  function changeFontFamily() {
    const family = document.getElementById("fontFamily").value;
    document.getElementById("text").style.fontFamily = family;
  }
  
  function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
  }
  
  function readText() {
    const text = document.getElementById("text").innerText;
    const speech = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(speech);
  }
  