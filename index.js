

const seats = document.querySelectorAll(".seat");
for(let i = 0; i < seats.length; i++){
    const seat = seats[i];
    
    seat.addEventListener('click', function(){
       seat.style.backgroundColor = "#1DD100";  
       
       const title = seat.innerText;
       const price = 550;
       
       const titleContainer = document.getElementById('title-container');
       
       const p = document.createElement('p');
       p.innerText = title + '        ' + 'economy' + price ;
       titleContainer.appendChild(p);
    })
}