let fields, defaultTimeout = 3000;

Noty.overrideDefaults({
    theme: 'mint',
    layout: "topCenter",
    timeout: defaultTimeout
})

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
        new Input('name', 'Invalid name', charChecker),
        new Input('birthday', 'Invalid date', dateChecker),
        new Input('phone', 'Invalid phone number', phoneChecker),
        new Input('address', 'Invalid address', addressChecker),
        new Input('city', 'Invalid city', charChecker),
        new Input('province', 'Invalid province', charChecker),
        new Input('zip', 'Invalid zip code', zipChecker),
        new Input('country', 'Invalid country', charChecker),
        new Input('email', 'Invalid email', emailChecker)
    ]

    form.addEventListener("submit", formSubmission)

}

function charChecker(str) {
    let pattern = /^[a-z A-z-.]+$/
    if ( pattern.test(str) == false ) {
        return false;
    }
    return true;
}

function dateChecker(str, field) {
    let pattern = /^[0-9]{4}[-]{1}[0-9]{2}[-]{1}[0-9]{2}$/
    if ( pattern.test(str) == false ) {
        field.errorMessage = "Invalid date"
        return false;
    } else {
        let givenDate = new Date(Date.parse(str))

        if ( givenDate.getTime() > Date.now() ) {
            field.errorMessage = "Woah! It appears you are from the future."
            return false;
        } else if ( !ageGate(givenDate) ) {
            field.errorMessage = "Ahoy Buckaroo! Looks like you aren't old enough. Come back in a few years."
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
    let pattern = /^[A-Za-z]{1}[0-9]{1}[A-Za-z]{1}[0-9]{1}[A-Za-z]{1}[0-9]{1}$/
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

    if ( errorCount > 0 ) {
        let errorNoty = new Noty({
            type: 'error',
            text: 'Stop right there! You have some errors to fix.'
        }).show();
    } else {
        // all goodie-good!
        let successNoty = new Noty({
            type: 'success',
            text: 'Hold tight! Submitting your form.'
        }).show()

        successNoty.on("onClose", () => {
            document.querySelector("#successModal").classList.add("show");
        })
    }

    console.log(`Errors: ${errorCount}`);
}

function ageGate(dob, minAge = 16) {
    dob = new Date(dob)

    let currentDate = new Date(Date.now())

    if ( currentDate.getFullYear() - dob.getFullYear() > minAge ) {
        return true;
    } else if ( currentDate.getFullYear() - dob.getFullYear() == minAge ) {
        if ( currentDate.getMonth() - dob.getMonth() > 0 ) {
            return true;
        } else if ( currentDate.getMonth() - dob.getMonth() == 0 ) {
            if ( currentDate.getDate() - dob.getDate() > 0 ) {
                return true;
            }
        }
    }

    return false;
}

document.addEventListener("DOMContentLoaded", function() {
    initForm();
});