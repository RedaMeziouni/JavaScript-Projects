const form = document.getElementById("generate-form");
const qr = document.getElementById("qrcode");

// Generate submit function
const onGenerateSubmit = (e) => {
    e.preventDefault();

    const url = document.getElementById('url').value;
    const size = document.getElementById('size').value;

    if(url === '') {
        alert('Please enter a URL');
    } else {
        showSpinner();
    }
}

// Show spinner
const showSpinner= () => {
    document.getElementById('spinner').style.display = 'block';
}

// Hide spinner
const hideSpinner= () => {
    document.getElementById('spinner').style.display = 'none';
}

hideSpinner();

// eventListner to generate the qr code
form.addEventListener('submit', onGenerateSubmit);