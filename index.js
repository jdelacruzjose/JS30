window.onload = function () {
  const dogs = [{
    name: 'Snickers',
    age: 2
  }, {
    name: 'hugo',
    age: 8
  }];


  const p = document.querySelector('p');
  console.log(p);
  p.addEventListener('click', function () {
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
  });

  // Regular
  console.log('hello')

  //Interpolated
  console.log("Hello I an a %s String", "Cool")

  //Style
  console.log("%c I am some great text", "font-size:20px; background:red")

  // warning!
  console.warn("NO");

  // Error :|
  console.error('ERROR!');

  // Info
  console.info("Please wear a Mask! :)");

  // Testing
  // console.assert(1 === 2, "Doesn't Equal");

  // clearing
  console.clear();

  // Viewing DOM Elements
  console.dir(p);

  // Grouping together
  dogs.forEach((dog) => {
    console.group(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`This is ${dog.age * 3}`);
    console.groupEnd(`${dog.name}`)
  })

  // counting
  console.count('dog');
  console.count('dog');
  console.count('dog');

  // timing
  console.time('fetching data');
  fetch('https://api.github.com/users/jdelacruz')
    .then(data => data.json())
    .then(data => {
      console.timeEnd('fetching data');
      console.log(data);
    });

    console.table(dogs);
};