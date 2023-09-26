var input = document.querySelector('#nome-input')
var button = document.querySelector('#nome-button-con')

function validarInput() {
    if (input.value.length > 0) {
        button.removeAttribute('disabled');
        return
    }

    button.setAttribute('disabled', '')
}

function confirmarNome() {
    button.innerHTML = "CONFIRMADO"
}

input.addEventListener('input', validarInput);