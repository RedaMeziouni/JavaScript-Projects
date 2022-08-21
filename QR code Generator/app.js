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

            // output the button
            setTimeout(() => {
                const saveUrl = qr.querySelector('img').src;
                createSaveBtn(saveUrl);
            }, 50);
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

    // Clear the buttons
    const saveLink = document.getElementById('save-link');
    if(saveLink) {
        saveLink.remove(); //remove it from the DOM completely
    }
}

// Create save button using JS
const createSaveBtn = (saveUrl) => {
    const link = document.createElement('a');
    link.id = 'save-link';
    link.classList = 'bg-green-500 hover:bg-red-700 text-white font-bold py-2 rounded w-1/3 m-auto my-5'
    link.href = saveUrl;
    link.download = 'qrcode';
    link.innerHTML = 'Save Image';
    document.getElementById('generated').appendChild(link);
}

hideSpinner();

// eventListner to generate the qr code
form.addEventListener('submit', onGenerateSubmit);