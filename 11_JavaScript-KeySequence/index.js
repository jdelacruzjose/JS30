window.onload = function () {

  const pressed = []; //empty array
  const secretCode = 'joes'; // secret message


  window.addEventListener('keyup', (e) => {
    console.log(e.key);
    pressed.push(e.key);
    pressed.slice(-secretCode.length -1, pressed.length - secretCode.length);

    if(pressed.join('').includes(secretCode)){ //.join to merge array
      console.log("Ding!");
      cornify_add();
    }

    console.log(pressed);
  });

};