# Projects related to DOM

### Project Link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)
[Click here for my code link](https://stackblitz.com/edit/dom-project-chaiaurcode-thxh4tnn?file=index.html)

# Project 1

## Solution from him (Hitesh)

```javascript
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'purple') {
      body.style.backgroundColor = e.target.id;
    }

```

## Solution by me (Riya)

```javascript
switch (e.target.id) {
      case (body.style.backgroundColor = e.target.id):
        break;

```

# Project 2
## Solution from him (Hitesh)

```javascript
const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
});
```
## Solution by me (Riya)

```javascript
const form = document.querySelector('form');
//this usecase will give you empty
//const height = parseInt(document.querySelector('#height').value)
//const weight = parseInt(document.querySelector('#weight').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const BMI = (weight / ((height * height) / 10000)).toFixed(2);
    if (BMI < 18.6) {
      results.innerHTML = `<span>${BMI}</span> <br />under weight`;
    } else if (BMI > 24.9) {
      results.innerHTML = `<span>${BMI}</span> <br />Over weight`;
    }
    //show the result
    else results.innerHTML = `<span>${BMI}</span> <br />Normal weight`;
  }
});
```