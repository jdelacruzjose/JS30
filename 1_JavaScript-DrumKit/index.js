window.onload = function () {
   function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    // console.log(key);
    if (!audio) return; // stops the function
    audio.currentTime = 0; // rewind to the beginning of the sound
    audio.play();
    key.classList.add("playing");
  }

  function removeTransition(e) {
    if (e.propertyName !== "transform") return;
    this.classList.remove('playing');
  }

  const keys = document.querySelectorAll(".key");
  keys.forEach((key) =>
    key.addEventListener("transitionend", removeTransition)
  );

  window.addEventListener("keydown", playSound);
};
