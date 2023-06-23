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
let currentFilter = 'name'; // name - company - salary

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

        appendAllCards(currentFilter);

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

const filterName = document.getElementById("btnradio1");
const filterCompany = document.getElementById("btnradio2");
const filterSalary = document.getElementById("btnradio3");


filterName.addEventListener('click', () => {
    currentFilter = 'name';
    appendAllCards(currentFilter);
})

filterCompany.addEventListener('click', () => {
    currentFilter = 'company';
    appendAllCards(currentFilter);
})

filterSalary.addEventListener('click', () => {
    currentFilter = 'salary';
    appendAllCards(currentFilter);
})

/***** FUNCIÓN crear Card de comentarios: crea una card con los datos ingresados y validados en el formulario  *****/
function createCard(commentObj) {
    const cardContainer = document.createElement('div');
    const cardBody = document.createElement('div');
    const h4 = document.createElement('h4');
    const h5 = document.createElement('h5');
    const pComment = document.createElement('p');
    const spanSalaryPesosArg = document.createElement('span');
    const spanSalaryDolarsUS = document.createElement('span');
    const spanSalaryEuros = document.createElement('span');

    cardContainer.classList.add('card', 'col-4', 'me-4', 'mb-3');
    cardContainer.style.width = '18rem';

    cardBody.classList.add('card-body');

    h4.classList.add('card-title');
    h4.innerText = commentObj.name;

    h5.classList.add('card-subtitle', 'mb-2', 'text-body-secondary');
    h5.innerText = commentObj.company;

    pComment.classList.add('card-text');
    pComment.innerText = commentObj.comment;

    spanSalaryPesosArg.classList.add('card-text');
    const pesosArg = commentObj.salary.toFixed(2).toLocaleString("arg");
    spanSalaryPesosArg.innerText = `AR$ ${pesosArg}`;

    spanSalaryDolarsUS.classList.add('card-text');
    const dolarsUS = (commentObj.salary / 264.50).toFixed(2).toLocaleString();
    spanSalaryDolarsUS.innerText = `U$D ${dolarsUS}`;

    spanSalaryEuros.classList.add('card-text');
    const euros = (commentObj.salary / 289.28).toFixed(2).toLocaleString("de-DE");
    spanSalaryEuros.innerText = `€ ${euros}`;

    cardBody.appendChild(h4);
    cardBody.appendChild(h5);
    cardBody.appendChild(pComment);
    cardBody.appendChild(spanSalaryPesosArg);
    cardBody.appendChild(document.createElement('br'));
    cardBody.appendChild(spanSalaryDolarsUS);
    cardBody.appendChild(document.createElement('br'));
    cardBody.appendChild(spanSalaryEuros);
    cardContainer.appendChild(cardBody);

    return cardContainer;
}

/***** FUNCIÓN append de Cards de comentarios  *****/
function appendAllCards(filter) {

    if (commentsList.length === 0) {
        return
    }

    while(sectionComments.firstChild) {
        sectionComments.removeChild(sectionComments.firstChild);
    }

    commentsList.sort((commentA, commentB) => {
        if (filter === 'salary') {
            return commentB.salary - commentA.salary;
        } 
        if (filter === 'name') {
            if (commentA.name < commentB.name) {
                return -1;
            }
            if (commentB.name < commentA.name) {
                return 1;
            }
            return 0;
        }
        if (filter === 'company') {
            if (commentA.company < commentB.company) {
                return -1;
            }
            if (commentB.company < commentA.company) {
                return 1;
            }
            return 0;
        }
    }).forEach(comment => {
        const cardElement = createCard(comment);
        sectionComments.appendChild(cardElement);
    });
}