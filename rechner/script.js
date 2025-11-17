let calculation = '';

function updateCalculation(value) {
  calculation += `${value}`
  document.querySelector('input').value = calculation;

  return calculation;
} 

function calculateCalculation () {

  let result = eval(calculation);

  calculation = result;
  document.querySelector('input').value = result;

  return result;
}

function resetCalculation(){
  calculation = '';
  document.querySelector('input').value = '';
}

const input = document.querySelector('input');
  input.addEventListener('input', () => {
    input.scrollLeft = input.scrollWidth;
});