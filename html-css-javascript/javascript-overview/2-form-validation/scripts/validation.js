function validateForm(e) {
  e.preventDefault();
  console.log("[+] Validating the form");
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const errorMessage = document.getElementById("errors");

  if (name.value === "") {
    errorMessage.innerHTML = "<p>Name is required</p>";
    name.focus();
    return false;
  } else if (email.value === "") {
    errorMessage.innerHTML = "<p>Email is required</p>";
    email.focus();
    return false;
  }
  errorMessage.innerHTML = "";
  alert("Form submitted successfully!");
  return true;
}
