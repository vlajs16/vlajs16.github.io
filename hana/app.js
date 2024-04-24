function initialize() {
  document
    .getElementById("horoskopForm")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the form from submitting normally

      const dateOfBirth = new Date(document.getElementById("date").value);
      const errMessage = document.getElementById("error-message");
      const zodiacSign = getZodiacSign(dateOfBirth);
      if (zodiacSign !== "unknown") {
        updateAndShowMessage("aries");
        errMessage.classList.add("hidden");
      } else {
        errMessage.classList.remove("hidden");
      }
    });

  document.addEventListener("click", function (event) {
    var messageDiv = document.getElementById("poruka");
    var overlay = document.getElementById("overlay");
    if (
      !messageDiv.contains(event.target) &&
      !messageDiv.classList.contains("hidden")
    ) {
      messageDiv.classList.add("hidden");
      overlay.classList.add("hidden");
    }
  });
}

var zodiacMessages = {
  1: {
    img: "1.jpg",
    msg: "Danas nije tvoj dan kravo",
  },
  2: {
    img: "2.jpg",
    msg: "No comment",
  },
  3: {
    img: "3.jpg",
    msg: "Desiće ti se lepe stvari, prespavaćeš u Njujorku",
  },
  4: {
    img: "4.jpg",
    msg: "Uspori malo sa životom, popij cedevitu!",
  },
  5: {
    img: "5.jpg",
    msg: "Danas ćeš upoznati osobu svog života",
  },
  6: {
    img: "6.jpg",
    msg: "Jasno ti je da će biti romantike večeras",
  },
  7: {
    img: "7.jpg",
    msg: "Danas je tvoj dan da čuvaš Kosovo",
  },
  8: {
    img: "8.jpg",
    msg: "Samo lagano i rasterećeno",
  },
};

function updateAndShowMessage(zodiacSign) {
  var messageDiv = document.getElementById("poruka");
  var overlay = document.getElementById("overlay");
  overlay.classList.remove("hidden");
  messageDiv.classList.remove("hidden");

  var zodiac = zodiacMessages[getRandomNumber(8)];

  var message = zodiac.msg;
  var img = zodiac.img;

  document.getElementById("image-sign").src =
    "assets/znakovi/" + zodiacSign + ".png";
  document.getElementById("img-hana").src = "assets/hana/" + img;
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

function getRandomNumber(max) {
  return Math.floor(Math.random() * max) + 1;
}

document.addEventListener("DOMContentLoaded", initialize);
