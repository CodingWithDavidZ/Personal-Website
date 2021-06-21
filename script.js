
//function addingEventListener() {
//    const mouseOver = document.getElementById('mouseOverEvent');
//    function mouseOverAlert() { alert("Thank you for visiting our page!")}
//    mouseOver.addEventListener('mouseover', mouseOverAlert)
//}

//function showAlert() {
//    alert ("Thank you for visiting my page!");
//  }

function pageVisitCounter(){
    fetch('https://api.countapi.xyz/update/CodingWithDavidZ/JourneyOfUs/?amount=1')
    .then(function(res) {res.json()})
    .then(function(data) { counterElement.innerHTML = (data.value) }}
}

counterElement= document.getElementsByClassName('count')[0];