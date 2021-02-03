let fields;

class Input {
    constructor(id, errorMessage, checker) {
        this.field = document.querySelector(`#${id}`);
        this.errorObject = document.querySelector(`#${id}Error`);
        this.isValid = false;
        this.errorMessage = errorMessage;
        this.checkerFunction = checker;
    }

    validate() {
        this.isValid = this.checkerFunction(this.field.value, this);

        if ( !this.isValid ) {
            this.errorObject.innerText = this.errorMessage;
            this.field.classList.remove('is-valid');
            this.field.classList.add('is-invalid');
        } else {
            this.field.classList.remove('is-invalid')
            this.field.classList.add('is-valid')
        }

        return this.isValid;
    }
}

function initForm() {
    let form = document.querySelector("#form");

    fields = [
        new Input('name', 'Please enter a valid name', charChecker),
        new Input('birthday', 'Please enter a valid date', dateChecker),
        new Input('phone', 'Please enter a valid phone number', phoneChecker),
        new Input('address', 'Please enter a valid address', addressChecker),
        new Input('city', 'Please enter a valid city', charChecker),
        new Input('province', 'Please enter a valid province', charChecker),
        new Input('zip', 'Please enter a valid zip code', zipChecker),
        new Input('country', 'Please enter a valid country', charChecker),
        new Input('email', 'Please enter a valid email', emailChecker)
    ]

    form.addEventListener("submit", formSubmission)

}

function charChecker(str) {
    let pattern = /^[a-z A-z]+$/
    if ( pattern.test(str) == false ) {
        return false;
    }
    return true;
}

function dateChecker(str, field) {
    console.log(`String to check: ${str}`)

    let pattern = /^[0-9]{4}[-]{1}[0-9]{2}[-]{1}[0-9]{2}$/
    if ( pattern.test(str) == false ) {
        field.errorMessage = "Please enter a valid date."
        return false;
    } else {
        let givenDate = new Date(Date.parse(str))

        if ( givenDate.getTime() > Date.now() ) {
            field.errorMessage = "It appears you are from the future."
            return false;
        }
    }
    return true;
}

function phoneChecker(str) {
    let pattern = /^[0-9]{10}$/
    if ( pattern.test(str) == false ) {
        return false;
    }
    return true;
} 

function addressChecker(str) {
    let pattern = /^[a-zA-Z0-9 ,.]+$/
    if ( pattern.test(str) == false ) {
        return false;
    }
    return true;
}

function zipChecker(str) {
    let pattern = /^[A-Z]{1}[0-9]{1}[A-Z]{1}[0-9]{1}[A-Z]{1}[0-9]{1}$/
    if ( pattern.test(str) == false ) {
        return false;
    }
    return true;
}

function emailChecker(str) {
    let pattern = /^[a-z0-9.]+[@]{1}[a-z0-9]+[.]{1}[a-z]{2,}$/
    if ( pattern.test(str) == false ) {
        return false;
    }
    return true;
}

function formSubmission(event) {
    event.preventDefault();

    let errorCount = 0;
    fields.forEach(field => {
        if ( !field.validate() ) {
            errorCount++;
        }
    })

    console.log(`Errors: ${errorCount}`);
}

document.addEventListener("DOMContentLoaded", function() {
    initForm();
});