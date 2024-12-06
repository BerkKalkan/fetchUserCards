
async function render() {
    container.innerHTML = `<h1>Loading</h1>`;
    const cards = await fetch("https://dummyjson.com/users").then(res => res.json());
    container.innerHTML = ``;
    let userAge = "";
    for (const card of cards.users) {
        if (card.age >= 18 && card.age <= 25) {
            userAge = "young";
        }else if(card.age >= 26 && card.age <= 40) {
            userAge = "age";
        }else{
            userAge = "old";
        }
        container.innerHTML += `<div class="user-card ${userAge}">
    <img src="${card.image}" alt="user photo"> <br>
        username: ${card.firstName} ${card.lastName} <br>
        age: ${card.age} <br>
        user mail: ${card.email} <br>
        phone number: ${card.phone} <br>
        company name: ${card.company.name} <br>
        company department: ${card.company.department} <br>
        adress: ${card.address.address} ${card.address.city} ${card.address.state} <br>
        postal code: ${card.address.postalCode}
        </div>`;
    }
}
const userCard = document.querySelectorAll(".user-card")
for (const ageCard of userCard) {
    if (ageCard.age >= 18 && ageCard.age <= 25) {
        ageCard.classList.add("young")
    }
}

btnShow.addEventListener("click", render);