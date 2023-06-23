const formContact = document.getElementById("form-contact");
const formName = document.getElementById("form-name");
const formLastName = document.getElementById("form-lastname");
const formCompany = document.getElementById("form-company");
const formEmail = document.getElementById("form-email");
const formSalary = document.getElementById("form-salary");
const formComment = document.getElementById("form-comment");
const formSubmit = document.getElementById("form-submit");

const errorClass = 'form-error';

formSubmit.addEventListener('click', () => {
    const allFieldsAreValid = validateFields();
    if (allFieldsAreValid) {
        //create comment container and append
        //clear inputs
    }
})


formName.addEventListener('focus', () => {
    cleanError(formName);
})

formLastName.addEventListener('focus', () => {
    cleanError(formLastName);
})

formCompany.addEventListener('focus', () => {
    cleanError(formCompany);
})

formEmail.addEventListener('focus', () => {
    cleanError(formEmail);
})

formSalary.addEventListener('focus', () => {
    cleanError(formSalary);
})

formComment.addEventListener('focus', () => {
    cleanError(formComment);
})

function cleanError(selector) {
    selector.classList.remove(errorClass);
}

function validateFields() {

    let allFieldsAreValid = true;
    let errorMessage = 'Se han producido los siguientes errores en el formulario:'

    if (!formName.value) {
        allFieldsAreValid = false;
        errorMessage += '\n    El campo Nombre está vacío'
        formName.classList.add(errorClass);
    }
    if (!formLastName.value) {
        allFieldsAreValid = false;
        errorMessage += '\n    El campo Apellido está vacío'
        formLastName.classList.add(errorClass);
    }
    if (!formCompany.value) {
        allFieldsAreValid = false;
        errorMessage += '\n    El campo Empresa está vacío'
        formCompany.classList.add(errorClass);
    }
    if (!formEmail.value) {
        allFieldsAreValid = false;
        errorMessage += '\n    El campo Email está vacío'
        formEmail.classList.add(errorClass);
    }
    if (formSalary.value === '0') {
        allFieldsAreValid = false;
        errorMessage += '\n    El campo Salario Mínimo es nulo'
        formSalary.classList.add(errorClass);
    }
    if (!formComment.value) {
        allFieldsAreValid = false;
        errorMessage += '\n    El campo Mensaje está vacío'
        formComment.classList.add(errorClass);
    }

    if (!allFieldsAreValid) {
        alert(errorMessage);
    }

    return allFieldsAreValid
}