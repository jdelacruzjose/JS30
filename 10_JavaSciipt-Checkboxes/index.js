window.onload = function () {
  const checkBox = document.querySelectorAll('input');
  let lastChecked;

  const handleCheck = function(e) {
    let inBetween = false;

    if (e.shiftKey && this.checked) {
      checkBox.forEach((checkThisBox) => {
        if (checkThisBox === this || checkThisBox === lastChecked) {
          inBetween = !inBetween;
        }
        if (inBetween) {
          checkThisBox.checked = true;
        }
      });
    }
    lastChecked = this;
  }

  checkBox.forEach((check) => {
    check.addEventListener('click', handleCheck);
  });

}