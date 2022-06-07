const passwordBox1 = document.getElementById("password-box1")
const passwordBox2 = document.getElementById("password-box2")
const passwordBox3 = document.getElementById("password-box3")
const passwordBox4 = document.getElementById("password-box4")
const popup = document.getElementById("popup");

document.getElementById("generate-btn").addEventListener("click", function(event) {
    const passwordLength = Number(document.getElementById("quantity").value)
    
    if (passwordLength >= 4 && passwordLength <=15 && Number.isInteger(passwordLength)) {
        event.preventDefault()
        generateAllPasswords(passwordLength)
    } else {
        document.getElementById("generate-btn").submit()
    }
})


function generateAllPasswords(leng) {
    passwordBox1.innerText = generatePassword(leng)
    passwordBox2.innerText = generatePassword(leng)
    passwordBox3.innerText = generatePassword(leng)
    passwordBox4.innerText = generatePassword(leng)
}

function generatePassword(leng) {
    charset = String.fromCharCode(...Array(127).keys()).slice(33),
    generatedPassword = "";
for (let i = 0, n = charset.length; i < leng; ++i) {
    generatedPassword += charset.charAt(Math.floor(Math.random() * n));
}
return generatedPassword;
}

//////

passwordBox1.addEventListener("click", () => {
  popup.classList.add("active");
  copyToClipBoard(passwordBox1);
});

passwordBox2.addEventListener("click", () => {
    popup.classList.add("active");
    copyToClipBoard(passwordBox2);
  });

passwordBox3.addEventListener("click", () => {
    popup.classList.add("active");
    copyToClipBoard(passwordBox3);
  });

passwordBox4.addEventListener("click", () => {
    popup.classList.add("active");
    copyToClipBoard(passwordBox4);
  });

popup.addEventListener("animationend", () => {
  popup.classList.remove("active");
});

function copyToClipBoard(boxNum) {
  const textarea = document.createElement("textarea");
  textarea.setAttribute("readonly", "");
  textarea.value = boxNum.innerText;
  textarea.style.position = "absolute";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}