const btn =document.querySelectorAll('.card a');
for(let b of btn){
  b.addEventListener('click',()=>{
      prompt("Courses will be updated,Leave a review")
  })
}

var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
var alertTrigger = document.getElementById('liveAlertBtn')

function alert(message, type) {
  var wrapper = document.createElement('div')
  wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

  alertPlaceholder.append(wrapper)
}

if (alertTrigger) {
  alertTrigger.addEventListener('click', function () {
    alert('MORE COURSES WILL BE UPDATED SOON . SORRY FOR THE DELAY', 'light')
  })
}