const pswEl = document.querySelector(".password");
const checkPswEl = document.querySelector(".password_checking");

checkPswEl.addEventListener("input", () => {
  if (pswEl.value === checkPswEl.value) {
    checkPswEl.style.border = "2px solid green";
    pswEl.style.border = "2px solid green";
  } else {
    checkPswEl.classList.add("error");
    checkPswEl.style.border = "2px solid red";
    pswEl.style.border = "2px solid red";
  }
});
