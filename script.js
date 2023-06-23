const sectionComments = document.getElementById("js-form-comments");

/***** FORM SECTION  *****/

const formName = document.getElementById("form-name");
const formLastName = document.getElementById("form-lastname");
const formCompany = document.getElementById("form-company");
const formEmail = document.getElementById("form-email");
const formSalary = document.getElementById("form-salary");
const formComment = document.getElementById("form-comment");
const formSubmit = document.getElementById("form-submit");

const errorClass = 'form-error';
const commentsList = []



/***** LISTENER Click botón submit  *****/
formSubmit.addEventListener('click', () => {
    const allFieldsAreValid = validateAllFields();
    if (allFieldsAreValid) {
        //create comment container and append
        const commentObj = {
            name: formName.value,
            lastName: formLastName.value,
            company: formCompany.value,
            email: formEmail.value,
            salary: Number(formSalary.value),
            comment: formComment.value,
        }

        commentsList.push(commentObj);

        

        //limpiar inputs
        clearAllFields();
    }
})



/***** EMPIEZA Listener Focus Inputs de ingreso de data *****/
formName.addEventListener('focus', () => {
    clearError(formName);
})

formLastName.addEventListener('focus', () => {
    clearError(formLastName);
})

formCompany.addEventListener('focus', () => {
    clearError(formCompany);
})

formEmail.addEventListener('focus', () => {
    clearError(formEmail);
})

formSalary.addEventListener('focus', () => {
    clearError(formSalary);
})

formComment.addEventListener('focus', () => {
    clearError(formComment);
})
/***** TERMINA Listener Inputs Individuales *****/


/***** FUNCIÓN limpiar error: remueve la clase 'form-error' del input  *****/
function clearError(selector) {
    selector.classList.remove(errorClass);
}

/***** FUNCIÓN limpiar campos: remueve el contenido (value) de todos los inputs de ingreso de data  *****/
function clearAllFields() {
    clearField(formName);
    clearField(formLastName);
    clearField(formCompany);
    clearField(formEmail);
    clearField(formSalary);
    clearField(formComment);
}

/***** FUNCIÓN limpiar campo: remueve el contenido (value) de un input de ingreso de data, según su tipo (type)  *****/
function clearField(selector) {
    if (selector.type === 'text' || selector.type === 'textarea' || selector.type === 'email' ) {
        selector.value = '';
    }

    if (selector.type === 'number') {
        selector.value = '200000';
    }
}

/***** FUNCIÓN validar campos: valida el contenido (value) de todos los inputs de ingreso de data  *****/
function validateAllFields() {

    let allFieldsAreValid = true;
    let errorMessage = 'Se han producido los siguientes errores en el formulario:'

    // Se chequea que el contenido (value) es un string vacío ('')
    // En el caso del salario, se chequea si el contenido (value) es menor a 200000
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
    if (Number(formSalary.value) < 200000) {
        allFieldsAreValid = false;
        errorMessage += '\n    El campo Salario Mínimo es nulo'
        formSalary.classList.add(errorClass);
    }
    if (!formComment.value) {
        allFieldsAreValid = false;
        errorMessage += '\n    El campo Mensaje está vacío'
        formComment.classList.add(errorClass);
    }

    // Si no todos los campos son válidos, se muestra una alerta con los mensajes de error concatenados
    if (!allFieldsAreValid) {
        alert(errorMessage);
    }

    // Se retorna el booleano, si es true, todos los campos son válidos y se realiza el submit, si es false, se muestra la alerta
    return allFieldsAreValid
}


/***** COMMENTS SECTION  *****/