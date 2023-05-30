const btnEl = document.querySelector(".btn");
const inputEl = document.getElementById("input");
const copyIconEl = document.querySelector(".fa-copy");
const alertContainerEl = document.querySelector(".alert-container");

btnEl.addEventListener("click", () => {
  createPassword();
});

copyIconEl.addEventListener("click", () => {
  copyPassword();
  alertContainerEl.classList.remove("active");
  setTimeout(() => {
    alertContainerEl.classList.add("active");
  }, 2000);
});

function createPassword() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^?&*()_+";
  const passwordLength = 16;
  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    const randomNumber = Math.floor(Math.random() * characters.length);
    password += characters.substring(randomNumber, randomNumber + 1);
  }

  inputEl.value = password;
  alertContainerEl.innerText = "Password copied to clipboard";
}

function copyPassword() {
  inputEl.select();
  inputEl.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(inputEl.value);
  alertContainerEl.innerText = "Password copied to clipboard";
}
