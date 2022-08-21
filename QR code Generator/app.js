const form = document.getElementById("generate-form");
const qr = document.getElementById("qrcode");

// Submit button function
const onGenerateSubmit = (e) => {
    e.preventDefault();

    // Befor generating, we need to clear the UI 
    clearUI();

    const url = document.getElementById('url').value;
    const size = document.getElementById('size').value;

    if(url === '') {
        alert('Please enter a URL');
    } else {
        showSpinner();

        setTimeout(() => {
            hideSpinner();

            generateQrCode(url, size);
        }, 1000)
    }
    // console.log(url, size);
}

// Generate QR Code function
const generateQrCode = (url, size) => {
    const qrcode = new QRCode('qrcode', {
        text: url,
        width: size,
        height: size
    })
}

// Show spinner
const showSpinner = () => {
    document.getElementById('spinner').style.display = 'block';
}

// Hide spinner
const hideSpinner = () => {
    const spinner = document.getElementById('spinner');
    spinner.style.display = 'none';
};

// Clearing the UI function
const clearUI = () => {
    qr.innerHTML = '';
}

hideSpinner();

// eventListner to generate the qr code
form.addEventListener('submit', onGenerateSubmit);