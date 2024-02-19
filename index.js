
let totalPrice = 0;
let seatCount = 0;
const seats = document.querySelectorAll(".seat");
const applyBtn = document.getElementById('apply-btn');
applyBtn.disabled = true;

for(let i = 0; i < seats.length; i++){
    const seat = seats[i];
    
    seat.addEventListener('click', function(){
        if(seatCount >= 4 || seat.hasAttribute('data-clicked')){
            return;
        }
        
        seat.setAttribute('data-clicked', true);
        seat.style.backgroundColor = "#1DD100";  
        seatCount++;
        
        // available ticket
        const currentSeatsElement = document.getElementById('current-seats');
        const currentSeatsText = currentSeatsElement.innerText;
        const currentSeats = parseInt(currentSeatsText);
        const newSeat = currentSeats - 1;
        currentSeatsElement.innerText = newSeat;
        
        // ticket count
        const ticketCountElement = document.getElementById('ticket-count');
        const ticketCountText = ticketCountElement.innerText;
        const ticketCount = parseInt(ticketCountText);
        const newCount = ticketCount + 1;
        ticketCountElement.innerText = newCount;
        
        // show ticket and price
        const title = seat.innerText;
        const price = 550;
        const titleContainer = document.getElementById('title-container');
        
        // Create a new div element
        const newDiv = document.createElement("div");
        newDiv.classList.add("flex", "gap-60");
        
        const p1 = document.createElement("p");
        p1.innerText = title;
        
        const p2 = document.createElement("p");
        p2.innerText = "economy";
        
        const p3 = document.createElement("p");
        p3.textContent = price;
        
        newDiv.appendChild(p1);
        newDiv.appendChild(p2);
        newDiv.appendChild(p3);
        
        // Append the div element to the body of the document
        titleContainer.appendChild(newDiv);
        
        // price calculate
        totalPrice += price;
        document.getElementById('total-price').innerText = totalPrice;
        document.getElementById('grand-price').innerText = totalPrice;

        if(seatCount === 4) {
            applyBtn.disabled = false;
        }
    });
}

applyBtn.addEventListener('click', function(){
    const couponCode = document.getElementById('coupon-input').value;
    if(totalPrice >= 2200){
        if(couponCode === "NEW15"){
            const discountElement = document.getElementById('grand-price');
            const discountAmount = totalPrice * 0.15;
            const grandPrice = totalPrice - discountAmount;
            discountElement.innerText = grandPrice;
            const removeApply = document.getElementById('input-apply-area');
            removeApply.classList.add("hidden");
        }
        else if(couponCode === "Couple 20"){
            const discountElement = document.getElementById('grand-price');
            const discountAmount = totalPrice * 0.2;
            const grandPrice = totalPrice - discountAmount;
            discountElement.innerText = grandPrice;
            const removeApply = document.getElementById('input-apply-area');
            removeApply.classList.add("hidden");
        }
        else{
            alert("Invalid coupon")
        }
    }
});

const nextBtn = document.getElementById('next-btn');
nextBtn.addEventListener('click', function(){
    if(seatCount >= 1){
        const numberInput = document.getElementById('num-input');
        const numberInputText = numberInput.value;
        if(numberInputText === ''){
            alert("Please provide your phone number")
        }
        else{
            const firstPage = document.getElementById('first-page');
            firstPage.classList.add("hidden")
            const secondPage = document.getElementById('second-page');
            secondPage.classList.remove("hidden")
        }
    }
    else{
        alert("Please select a seat first")
    } 
})
const continueBtn = document.getElementById('continue-btn');
continueBtn.addEventListener('click', function(){
    const firstPage = document.getElementById('first-page');
    firstPage.classList.remove("hidden")
    const secondPage = document.getElementById('second-page');
    secondPage.classList.add("hidden")
})


