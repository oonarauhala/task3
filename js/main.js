'use strict';

//select form
const form = document.querySelector('form');
const allInputs = document.querySelectorAll('input');


let valid = 0; //counts valid inputs

//checkEmpty checks if value is empty
const checkEmpty = element => {
  if (element.value === '') {
    //not valid, set border red
    element.setAttribute('style', 'border: 1px solid red');
    console.log('CheckEmpty empty');
  } else {
    //add valid counter +1
    valid = valid + 1;
    console.log('CheckEmpty not empty');
  }
};

//checkPattern checks if patterns match
const checkPattern = element => {

  const regex = RegExp(element.getAttribute('pattern'));

  if (regex.test(element.value) === true) {
    //add valid counter +1
    valid = valid + 1;
    console.log('CheckPattern pattern valid');
  } else {
    // not valid, set border red
    element.setAttribute('style', 'border: 1px solid red');
    console.log('CheckPattern pattern not valid');
  }
};

//when form is submitted, check validation
form.addEventListener('submit', (evt) => {
  //stop html element default action (submit)
  evt.preventDefault();
  console.log('Prevented submit default');

  for (let i = 0; i < allInputs.length; i++) {
    console.log(` \nLoop num ${i + 1}`);

    if (allInputs[i].hasAttribute('required')) {
      checkEmpty(allInputs[i]);
    }
    if (allInputs[i].hasAttribute('pattern')) {
      checkPattern(allInputs[i]);
    }

    //when validation ok (valid = 8)
    if (valid === 8) {
      form.submit();
    }
    console.log(`Valid = ${valid}`);
  }
});