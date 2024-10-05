const form = document.getElementById('offerForm')
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const destination = document.getElementById('destination').value;
    const departureDate = new Date(document.getElementById('departureDate').value);
    const returnDate = new Date(document.getElementById('returnDate').value);
    const price = document.getElementById('price').value;
    const checkbox = document.getElementById('checkbox').checked;
    const category = document.getElementById('category').value

    document.getElementById('titleer').style.display = 'none';
    document.getElementById('deser').style.display = 'none';
    document.getElementById('depdater').style.display = 'none';
    document.getElementById('retdater').style.display = 'none';
    document.getElementById('prer').style.display = 'none';
    document.getElementById('checker').style.display = 'none';
    document.getElementById('cater').style.display = 'none';

    document.getElementById('titlesuccess').style.display = 'none';
    document.getElementById('destinationsuccess').style.display = 'none';
    document.getElementById('departuredatesuccess').style.display = 'none';
    document.getElementById('returndatesuccess').style.display = 'none';
    document.getElementById('pricesuccess').style.display = 'none';
    document.getElementById('checkboxsuccess').style.display = 'none';
    document.getElementById('categorysuccess').style.display = 'none';
    let isValid = true;

    if (title.length < 3) {
        document.getElementById('titleer').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('titlesuccess').style.display = 'block';
    }

    if (!/^[a-zA-Z\s]{3,}$/.test(destination)) {
        document.getElementById('deser').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('destinationsuccess').style.display = 'block';
    }

    if (isNaN(departureDate.getTime())) {
        document.getElementById('depdater').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('departuredatesuccess').style.display = 'block';
    }

    if (isNaN(returnDate.getTime()) || returnDate <= departureDate) {
        document.getElementById('retdater').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('returndatesuccess').style.display = 'block';
    }

    if (price <= 0 || isNaN(price)) {
        document.getElementById('prer').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('pricesuccess').style.display = 'block';
    }

    if (!checkbox) {
        document.getElementById('checker').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('checkboxsuccess').style.display = 'block';
    }

    if (category === "") {
        document.getElementById('cater').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('categorysuccess').style.display = 'block';
    }

    if (isValid) {
        alert('Form submitted successfully');
    }
});
