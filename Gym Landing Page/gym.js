const displayOffer = document.querySelector(".offer-valid");
const showDate = document.querySelector(".date")


function offerTime() {

    const todaysDate = new Date();
    const endDate = new Date("December 30, 2026 23:59:59");
    showDate.innerHTML = `20% off Valid till ${endDate}`;
    const offer = (endDate - todaysDate) / 1000; //Time in Seconds
    
    const days = Math.floor(offer / 86400);
    // console.log(days);
    
    const hours = Math.floor((offer % 86400) / 3600);
    // console.log(hours);
    
    const mins = Math.floor((offer % 3600) / 60);
    // console.log(mins);
    
    const sec = Math.floor((offer % 60));
    // console.log(sec);
    if (offer <= 0){
        days = 0;   
        hours = 0;   
        mins = 0;   
        sec = 0;   
    }
    displayOffer.innerHTML = `${days} : ${hours} : ${mins} : ${sec}`;
}
offerTime();

setInterval(offerTime, 1000);