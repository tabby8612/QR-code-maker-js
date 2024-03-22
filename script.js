

const qrCode = new QRCode("qrcode");
const subBtn = document.querySelector(".generate-btn");


function makeQRCode() {
    const qrCodeDisplay = document.getElementById("qrcode");
    const userInput = document.querySelector(".user-input");

    if (userInput.value === "") {
        qrCodeDisplay.style.display = "none";
        alert("Input a text");
        userInput.focus();
        return;
    }
    qrCodeDisplay.style.display = "block";

    qrCode.makeCode(userInput.value);
}

subBtn.addEventListener("click", makeQRCode);