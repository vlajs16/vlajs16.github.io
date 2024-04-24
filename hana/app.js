function initialize() {
  document
    .getElementById("horoskopForm")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the form from submitting normally

      const dateOfBirth = new Date(document.getElementById("date").value);
      const zodiacSign = getZodiacSign(dateOfBirth);
      updateAndShowMessage("aries");
    });

  document.addEventListener("click", function (event) {
    var messageDiv = document.getElementById("poruka");
    if (
      !messageDiv.contains(event.target) &&
      !messageDiv.classList.contains("hidden")
    ) {
      messageDiv.classList.add("hidden");
    }
  });
}

var zodiacMessages = {
  1: "Danas nije tvoj dan kravo",
};

var hanasPhotos = {
  1: "krava.jpg",
};

function updateAndShowMessage(zodiacSign) {
  var messageDiv = document.getElementById("poruka");
  messageDiv.classList.remove("hidden");
  var message = zodiacMessages[1];
  document.getElementById("image-sign").src =
    "assets/znakovi/" + zodiacSign + ".png";
  document.getElementById("img-hana").src = "assets/hana/" + hanasPhotos[1];
  document.getElementById("message").innerHTML = message;
}

function getZodiacSign(date) {
  const month = date.getMonth() + 1; // Months are zero-indexed in JavaScript
  const day = date.getDate();

  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
    return "aries";
  } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
    return "taurus";
  } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
    return "gemini";
  } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
    return "cancer";
  } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
    return "leo";
  } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
    return "virgo";
  } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
    return "libra";
  } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
    return "scorpio";
  } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
    return "sagittarius";
  } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
    return "capricorn";
  } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
    return "aquarius";
  } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
    return "pisces";
  } else {
    return "unknown"; // In case of an error
  }
}

document.addEventListener("DOMContentLoaded", initialize);
