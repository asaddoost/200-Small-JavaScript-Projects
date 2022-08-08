
const country = document.getElementById('country');

country.onchange = ()=> {
    document.getElementById('select-country').innerHTML = country.value + ' :'
}