const productName = document.querySelector(".container section:nth-child(1) h1");
const productImg = document.querySelector(".container section:nth-child(1) img");
const greenBTN = document.querySelector(".container section:nth-child(1) > p:nth-child(7) > label:nth-child(1) input");
const redBTN = document.querySelector(".container section:nth-child(1) > p:nth-child(7) > label:nth-child(2) input");
const blackBTN = document.querySelector(".container section:nth-child(1) > p:nth-child(7) > label:nth-child(3) input");
const blueBTN = document.querySelector(".container section:nth-child(1) > p:nth-child(7) > label:nth-child(4) input");
const smallBTN = document.querySelector(".container section:nth-child(1) div:nth-child(5) p:nth-child(1) input");
const mediumBTN = document.querySelector(".container section:nth-child(1) div:nth-child(5) p:nth-child(2) input");
const largeBTN = document.querySelector(".container section:nth-child(1) div:nth-child(5) p:nth-child(3) input");
const nameInput = document.querySelector("form input:nth-child(2)");
const emailInput = document.querySelector("form input:nth-child(4)");
const address1Input = document.querySelector("form div:nth-child(5) div:nth-child(1) input");
const address2Input = document.querySelector("form div:nth-child(5) div:nth-child(2) input");
const cityInput = document.querySelector("form div:nth-child(6) div:nth-child(1) input");
const stateInput = document.querySelector("form div:nth-child(6) div:nth-child(2) input");
const zipInput = document.querySelector("form div:nth-child(6) div:nth-child(3) input");
const countrySelect = document.querySelector("form fieldset select");
const productDesc = document.querySelector(".container section:nth-child(3) fieldset > div:nth-child(2) p:nth-child(1)");
const custName = document.querySelector(".container section:nth-child(3) fieldset ul:nth-child(6) li:nth-child(2)");
const custAddress1 = document.querySelector(".container section:nth-child(3) fieldset ul:nth-child(6) li:nth-child(3)");
const custAddress2 = document.querySelector(".container section:nth-child(3) fieldset ul:nth-child(6) li:nth-child(4)");
const custCityStateZip = document.querySelector(".container section:nth-child(3) fieldset ul:nth-child(6) li:nth-child(5)");
const custCountry = document.querySelector(".container section:nth-child(3) fieldset ul:nth-child(6) li:nth-child(6)");
const submitBTN = document.querySelector(".container section:nth-child(3) fieldset div:nth-child(7) input");



function changeProduct() {
    let size = document.querySelector('input[name="size"]:checked').value;
    let color = document.querySelector('input[name="color"]:checked').value;

    productName.innerHTML = size +" "+ color + " JLA Shirt";
    productImg.src = "../img/" + color + ".jpg";
    productDesc.innerHTML = size +" "+ color + " shirt";
}

greenBTN.addEventListener('change', function () {
    changeProduct();
    document.querySelector(".container section:nth-child(1) > p:nth-child(7) > label:nth-child(1) input").setAttribute('aria-checked','true');
    document.querySelector(".container section:nth-child(1) > p:nth-child(7) > label:nth-child(2) input").setAttribute('aria-checked','false');
    document.querySelector(".container section:nth-child(1) > p:nth-child(7) > label:nth-child(3) input").setAttribute('aria-checked','false');
    document.querySelector(".container section:nth-child(1) > p:nth-child(7) > label:nth-child(4) input").setAttribute('aria-checked','false');
}, false);

redBTN.addEventListener('change', function () {
    changeProduct();
    document.querySelector(".container section:nth-child(1) > p:nth-child(7) > label:nth-child(1) input").setAttribute('aria-checked','false');
    document.querySelector(".container section:nth-child(1) > p:nth-child(7) > label:nth-child(2) input").setAttribute('aria-checked','true');
    document.querySelector(".container section:nth-child(1) > p:nth-child(7) > label:nth-child(3) input").setAttribute('aria-checked','false');
    document.querySelector(".container section:nth-child(1) > p:nth-child(7) > label:nth-child(4) input").setAttribute('aria-checked','false');
}, false);

blackBTN.addEventListener('change', function () {
    changeProduct();
    document.querySelector(".container section:nth-child(1) > p:nth-child(7) > label:nth-child(1) input").setAttribute('aria-checked','false');
    document.querySelector(".container section:nth-child(1) > p:nth-child(7) > label:nth-child(2) input").setAttribute('aria-checked','false');
    document.querySelector(".container section:nth-child(1) > p:nth-child(7) > label:nth-child(3) input").setAttribute('aria-checked','true');
    document.querySelector(".container section:nth-child(1) > p:nth-child(7) > label:nth-child(4) input").setAttribute('aria-checked','false');
}, false);

blueBTN.addEventListener('change', function () {
    changeProduct();
    document.querySelector(".container section:nth-child(1) > p:nth-child(7) > label:nth-child(1) input").setAttribute('aria-checked','false');
    document.querySelector(".container section:nth-child(1) > p:nth-child(7) > label:nth-child(2) input").setAttribute('aria-checked','false');
    document.querySelector(".container section:nth-child(1) > p:nth-child(7) > label:nth-child(3) input").setAttribute('aria-checked','false');
    document.querySelector(".container section:nth-child(1) > p:nth-child(7) > label:nth-child(4) input").setAttribute('aria-checked','true');
}, false);

smallBTN.addEventListener('change', function () {
    changeProduct();
    document.querySelector(".container section:nth-child(1) div:nth-child(5) p:nth-child(1) input").setAttribute('aria-checked','true');
    document.querySelector(".container section:nth-child(1) div:nth-child(5) p:nth-child(2) input").setAttribute('aria-checked','false');
    document.querySelector(".container section:nth-child(1) div:nth-child(5) p:nth-child(3) input").setAttribute('aria-checked','false');
}, false);

mediumBTN.addEventListener('change', function () {
    changeProduct();
    document.querySelector(".container section:nth-child(1) div:nth-child(5) p:nth-child(1) input").setAttribute('aria-checked','false');
    document.querySelector(".container section:nth-child(1) div:nth-child(5) p:nth-child(2) input").setAttribute('aria-checked','true');
    document.querySelector(".container section:nth-child(1) div:nth-child(5) p:nth-child(3) input").setAttribute('aria-checked','false');
}, false);

largeBTN.addEventListener('change', function () {
    changeProduct();
    document.querySelector(".container section:nth-child(1) div:nth-child(5) p:nth-child(1) input").setAttribute('aria-checked','false');
    document.querySelector(".container section:nth-child(1) div:nth-child(5) p:nth-child(2) input").setAttribute('aria-checked','true');
    document.querySelector(".container section:nth-child(1) div:nth-child(5) p:nth-child(3) input").setAttribute('aria-checked','false');

}, false);



function cityStateZip() {
    custCityStateZip.innerHTML = cityInput.value + ", " + stateInput.value + " " + zipInput.value;
}

function getCountryName() {
    let countryvalue = countrySelect.value;
    if (countryvalue === "US") {
        return "";
    } else {
        return document.querySelector("option[value='" + countryvalue + "']").innerHTML
    }
}

function removeErrors() {
    let allErrors = document.getElementsByClassName("error");
    while (allErrors[0]) {
        allErrors[0].parentElement.removeChild(allErrors[0]);
    }
}

class Validator {
    constructor(input, type) {
        this.input = input;
        this.type = type;
        this.errors = [];
    }

    addError(message) {
        this.errors.push(message);
    }

    errorMessages() {
        const status = this.input.validity;
        const fieldValue = this.input.value;
        if (status.typeMismatch && this.type === "email") {
            this.addError("Please use a valid email address.");
        }

        if (fieldValue.length === 0) {
            this.addError("This field is required.");
        }

        if (status.patternMismatch && this.type === "state") {
            this.addError("Please use 2 or 3 letter abbreviations for your state or province.");
        }

        if (status.patternMismatch && this.type === "zip") {
            this.addError("Your zipcode must be 5 or 9 digits.");
        }

        return this.errors;
    }
}

submitBTN.addEventListener("click", (event) => {
  let errorcount = 0;
  event.preventDefault();
  removeErrors();
    let validateName = new Validator(nameInput, "name");
  let nameErrors = validateName.errorMessages();

  if (nameErrors.length > 0) {
      errorcount++;
      nameErrors.forEach((err) => {
          nameInput.insertAdjacentHTML('afterend', "<p class='error'>" + err + "</p>")
      })
  }

  let validateEmail = new Validator(emailInput, "email");
  let emailErrors = validateEmail.errorMessages();

  if (emailErrors.length > 0) {
      errorcount++;
      emailErrors.forEach((err) => {
          emailInput.insertAdjacentHTML('afterend', "<p class='error'>" + err + "</p>")
      })
  }

  let validateAddress = new Validator(address1Input, "address");
  let addressErrors = validateAddress.errorMessages();

  if (addressErrors.length > 0) {
      errorcount++;
      addressErrors.forEach((err) => {
          address1Input.insertAdjacentHTML('afterend', "<p class='error'>" + err + "</p>")
      })
  }

  let validateCity = new Validator(cityInput, "city");
  let cityErrors = validateCity.errorMessages();

  if (cityErrors.length > 0) {
      errorcount++;
      cityErrors.forEach((err) => {
          cityInput.insertAdjacentHTML('afterend', "<p class='error'>" + err + "</p>")
      })
  }

  let validateState = new Validator(stateInput, "state");
  let stateErrors = validateState.errorMessages();

  if (stateErrors.length > 0) {
      errorcount++;
      stateErrors.forEach((err) => {
          stateInput.insertAdjacentHTML('afterend', "<p class='error'>" + err + "</p>")
      })
  }

  let validateZip = new Validator(zipInput, "zip");
  let zipErrors = validateZip.errorMessages();

  if (zipErrors.length > 0) {
      errorcount++;
      zipErrors.forEach((err) => {
          zipInput.insertAdjacentHTML('afterend', "<p class='error'>" + err + "</p>")
      })
  }

  if(errorcount === 0){
      orderComplete();
  }
});

function orderComplete(){
  document.querySelector(".container section:nth-child(3)").style.width = "100%";
  document.querySelector(".container section:nth-child(3)").style.zIndex = "999";
}

nameInput.addEventListener('keyup', function () {
  custName.innerHTML = nameInput.value;
}, false);

address1Input.addEventListener('keyup', function () {
  custAddress1.innerHTML = address1Input.value;
}, false);

address2Input.addEventListener('keyup', function () {
  custAddress2.innerHTML = address2Input.value;
}, false);

cityInput.addEventListener('keyup', function () {
  cityStateZip();
}, false);

stateInput.addEventListener('keyup', function () {
  cityStateZip();
}, false);

zipInput.addEventListener('keyup', function () {
  cityStateZip();
}, false);

countrySelect.addEventListener('change', function () {
  custCountry.innerHTML = getCountryName();
}, false);
