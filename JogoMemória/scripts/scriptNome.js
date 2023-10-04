const input = document.querySelector('#nome-input')
const button = document.querySelector('#nome-button-con')
const form = document.querySelector('#nome-form')

const validarInput = ({ target }) => {
    if (target.value.length > 0) {
        button.removeAttribute('disabled');
        return
    }

    button.setAttribute('disabled', '')
}

function iniciarJogo(event) {
    event.preventDefault();

    window.location('telaJogo.html')
}

input.addEventListener('input', validarInput);
input.addEventListener('submit', iniciarJogo);