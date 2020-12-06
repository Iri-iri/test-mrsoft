let response = {};
let api = new XMLHttpRequest();
api.open(
  'GET',
  'https://cors-anywhere.herokuapp.com/http://www.mrsoft.by/data.json',
  true
);
api.send();

api.onreadystatechange = function () {
  if (api.readyState != 4) return;

  if (api.status != 200) {
    console.log(`${api.status}:${api.statusText}`);
  } else {
    response = JSON.parse(api.responseText);
  }
};

document.querySelector('#sort-length').addEventListener(
  'click',
  () => {
    document.querySelector('.result-area').innerHTML = '';
    const inputValue = document.querySelector('.data-field').value;
    const result = response.data.filter((el) => {
      return el.length > inputValue;
    });
    document.querySelector('.result-area').innerHTML = result.join(', ');
  },
  false
);

document.querySelector('#sort-substring').addEventListener(
  'click',
  () => {
    document.querySelector('.result-area').innerHTML = '';
    const inputValue = document.querySelector('.data-field').value;
    const isChecked = document.querySelector('#lower-case').checked;
    const result = response.data.filter((el) => {
      return isChecked
        ? el.indexOf(inputValue) > -1
        : el.toLowerCase().indexOf(inputValue.toLowerCase()) > -1;
    });
    document.querySelector('.result-area').innerHTML = result.join(', ');
  },
  false
);
