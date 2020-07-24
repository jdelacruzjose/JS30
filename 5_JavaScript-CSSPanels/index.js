window.onload = function () {

  const panels = document.querySelectorAll('.panel');
  // console.log(panels)

  function toggleOpen() {
    this.classList.toggle('open');
  }

  function toggleActive(event) {
    if(event.propertyName.includes('flex')){
      this.classList.toggle('open-active');
    }
  }

  panels.forEach((panel) => {
    panel.addEventListener('click', toggleOpen)
  });

  panels.forEach((panel) => {
    panel.addEventListener('transitionend', toggleActive)
  });
  
};