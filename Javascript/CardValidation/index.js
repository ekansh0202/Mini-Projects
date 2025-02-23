const card = document.querySelector(".card");
const check = document.querySelector(".check");
const result = document.querySelector(".result");

let cardNumber;

let data = [
    { type: 'Visa', length: [16, 18], prefix: ["3", "4"]},
    { type: 'Amex', length: [13], prefix: ["3"]},
    { type: 'Mastercard', length: [16, 18, 19], prefix: ["36", "45"]},
    { type: 'Diners Club', length: [11], prefix: ["4"]}
]

card.addEventListener("input", (event) => {
    cardNumber = event.target.value;
})

check.addEventListener('click', () => {
    let newCardNumber = cardNumber.split(" ").join("");
    if(validateCardNumber(newCardNumber)){
        // If card has only digits
        let isValid = false;

        // console.log(newCardNumber.startsWith("3"));
        // console.log(newCardNumber.length);

        data.forEach((item) => {
            let lengthIsValid = item.length.includes(newCardNumber.length);
            let prefixIsValid = item.prefix.some((i) => newCardNumber.startsWith(i));

            if (lengthIsValid && prefixIsValid) {
                result.textContent = `Card is valid and of type ${item.type}`;
                isValid = true;  
                return;  
            }
        });

        if (!isValid) {
            result.textContent = `Card is invalid`;
        }
    }
})

const validateCardNumber = (card) => {
    return !isNaN(Number(card));
}