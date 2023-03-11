
const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#0000FF';
  p.style.fontSize = '50px';
}

// Regular
console.log('hello');

// Interpolated
console.log('Hello I am a %s string', '❤️');

// Styled
console.log('%c I am some great text', 'font-size: 24px;');

// warning!
console.warn('Noooo!');

// Error :|
console.error('Error!');

// Info
console.info('Here is a fun fact')

// Testing
console.assert(1 === 1, 'That is wrong');
console.assert(1 === 2, 'That is wrong');

const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'That is wrong!');

// clearing
// console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);

// Grouping together
dogs.forEach(dog => {
    console.group(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old`);
    console.groupEnd(`${dog.name}`);
});

// counting

console.count('Andrea');
console.count('Andrea');
console.count('Andrea');

// timing

console.time('fetching data');
fetch('https://api.github.com/users/andreahergert')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
    });