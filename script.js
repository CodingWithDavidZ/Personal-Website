
function addingEventListener() {
    const mouseOver = document.getElementById('mouseOverEvent');
    function mouseOverAlert() { alert("Thank you for visiting our page!")}
    mouseOver.addEventListener('mouseover', mouseOverAlert)
}

function showAlert() {
    alert ("Thank you for visiting my page!");
  }