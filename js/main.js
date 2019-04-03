'use strict';

//select form
const form = document.querySelector('form');
const allInputs = document.querySelectorAll('input');

//submit is also input, can be changed to button

let valid = 0; //counts valid inputs

const checkEmpty = element => {
  if (element.value === '') {
    //not valid, set border red
    element.setAttribute('style', 'border: 1px solid red');
    console.log('CheckEmpty empty');
  } else {
    //add valid counter +1
    valid = valid +1;
    console.log('CheckEmpty not empty');
  }
};

//function checkPattern if patterns match (these 2 functions enough)
const checkPattern = element => {





  const regex = RegExp(element.getAttribute('pattern'));
  console.log(regex.toString())




  if (regex.test(element.value)===true) {
    //add valid counter +1
    valid = valid +1;
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
    console.log(` \nLoop num ${i+1}`);
    console.log(allInputs[i]);


    console.log(`Input was: ${allInputs[i].value}`);


    if (allInputs[i].hasAttribute('required')) {
      checkEmpty(allInputs[i]);
      console.log(`Loop num ${i}: if hasAttribute 'required': checkEmpty DONE`);
    }
    if (allInputs[i].hasAttribute('pattern')) {
      checkPattern(allInputs[i]);
      console.log(
          `Loop num ${i}: if hasAttribute 'pattern': checkPattern DONE`);
    }

  //when validation ok (valid = 8)
  if (valid === 8) {
    form.submit();
  } else {
    //default already prevented, do nothing
  }
  console.log(`Valid = ${valid}`);
}});