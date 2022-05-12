const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const link = document.querySelector("a");

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  console.log(username);
}

function linkClick(event) {
  event.preventDefault();
  alert("clicked!");
  console.log(event);
}
loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", linkClick);
