const countdown = document.querySelector('.count__body');
const targetDate = new Date('2024-07-24T00:00:00');
 
function updateCountdown() {
  const now = new Date();
  const remainingTime = targetDate - now;
 
  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
 
  document.getElementById('days').innerText = days.toString().padStart(2, '0');
  document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
  document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
  document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');
}

setInterval(updateCountdown);
/*----------------------------------------------------*/
$(document).ready(function () {
    $("#form").on("submit", function (event) {
      event.preventDefault(); 
   
      const data = {
        email: $("#email").val(),
      };
   
      $.ajax({
        url: "/", 
        type: "post",
        data: data,
        success: function openPopup() {
            document.getElementById("popupOverlayTrue").style.display = "flex";
            document.body.style.overflow = "hidden";
        },
        error: function openPopup() {
            document.getElementById("popupOverlayFalse").style.display = "flex";
            document.body.style.overflow = "hidden";
        },
      });
    });
  });
    
function closePopup() {
    document.getElementById("popupOverlayTrue").style.display = "none";
    document.body.style.overflow = "auto";
}
function closePopup() {
    document.getElementById("popupOverlayFalse").style.display = "none";
    document.body.style.overflow = "auto";
}
/*---------------------------------------------------*/


document.querySelectorAll(".items-accordion-vertical__button").forEach((el) => {
  el.addEventListener('click', () => {
      let content = el.nextElementSibling;
      if (content.classList.contains('expanded')) {
        document.querySelectorAll(".items-accordion-vertical__content").forEach((el) => el.classList.remove('expanded'));
    }
      if (content.classList.contains('expanded')) {
          document.querySelectorAll(".items-accordion-vertical__content").forEach((el) => el.classList.remove('expanded'));
      } else {
          document.querySelectorAll(".items-accordion-vertical__content").forEach((el) => el.classList.remove('expanded'));
          content.classList.add('expanded');
      }
  });
})

document.querySelectorAll(".items-accordion-horisontal__button").forEach((el) => {
  el.addEventListener('click', () => {
      let content = el.nextElementSibling;
      if (content.classList.contains('active')) {
        document.querySelectorAll(".items-accordion-horisontal__content").forEach((el) => el.classList.remove('active'));
      }
      if (content.classList.contains('active')) {
          document.querySelectorAll(".items-accordion-horisontal__content").forEach((el) => el.classList.remove('active'));
      } else {
          document.querySelectorAll(".items-accordion-horisontal__content").forEach((el) => el.classList.remove('active'));
          content.classList.add('active');
      }
  });
})
/*---------------------------------------------------*/
document.getElementById('link').addEventListener('click', function(event) {
  event.preventDefault(); 
  var target = document.getElementById('accordion');
  if (target.classList.contains('active')) {
      target.classList.remove('active');
  } else {
      target.classList.add('active');
  }
});

