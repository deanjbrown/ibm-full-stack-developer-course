function compute() {
  const principal = document.getElementById("principal");
  const principalVal = parseInt(principal.value);
  const rateVal = document.getElementById("rate").value;
  const yearsVal = document.getElementById("years").value;
  const interestVal = (principalVal * rateVal * yearsVal) / 100;
  const amountVal = principalVal + interestVal;

  const result = document.getElementById("result");
  const year = new Date().getFullYear() + parseInt(yearsVal);

  if (principalVal <= 0) {
    alert("Enter a positive number");
    principal.focus();
  } else {
    result.innerHTML = `If you deposit: <mark>$${principalVal}</mark><br/>at an interest of <mark>${rateVal}%</mark>\nfor <mark>${yearsVal} years</mark>\nYou will receive an interst amount of <mark>$${amountVal}</mark>\nin the year: <mark>${year}</mark>`;
  }
}

function updateRate() {
  const rateVal = document.getElementById("rate").value;
  document.getElementById("rate_val").innerText = rateVal;
}
