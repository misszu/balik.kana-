let yesBtn = document.getElementById("yes-btn");
let noBtn = document.getElementById("no-btn");
let typingMessage = document.getElementById("typing-message");
let gif = document.getElementById("gif"); // Reference to the "No" GIF element
let yesGif = document.createElement("img"); // Create a new image element for the "Yes" GIF
yesGif.id = "yes-gif"; // Set the id for easy styling and reference
yesGif.src = "yes.gif"; // Use your "Yes" GIF path here
yesGif.style.display = "none"; // Initially hidden
document.body.appendChild(yesGif); // Append the "Yes" GIF to the body

// Load and preload audio
let audio = new Audio("ben&ben.mp3");

// Yes button action
yesBtn.addEventListener("click", function() {
  typingMessage.style.visibility = "visible";
  typingMessage.innerHTML = "yayy.. you are mine na ulitz kz niclick mo ang yes bawal bawian";

  // Show the "Yes" GIF below the No button's position
  yesGif.style.display = "block";
  yesGif.style.position = "absolute";
  yesGif.style.bottom = "10px"; // Position the GIF just below the No button's position
  yesGif.style.left = "50%";
  yesGif.style.transform = "translateX(-50%)";

  // Hide both buttons after clicking Yes
  yesBtn.style.display = "none";
  noBtn.style.display = "none";
});

// No button action (Typing effect + Instant Music)
noBtn.addEventListener("click", function() {
  // Change question instantly
  let question = "BUT, I MISS YOU SO BAD BAD NA";
  document.querySelector("h1").innerHTML = question; // Change the question text instantly

  let message1 = "Maaari ba tayong bumalik sa umpisa?";
  let message2 = "Upang di na umasa pusong nagiisa";
  let message3 = "Pasensya ka na";
  let message4 = "Sa mga kathang isip kong ito";
  let message5 = "Wari'y dala lang pagmamahal sa iyo";
  let message6 = "Ako'y gigising na";
  let message7 = "Sa panaginip kong ito";
  let message8 = "At sa wakas ay kusang lalayo sa iyo (lalayo sa)";

  typingMessage.innerHTML = ""; // Clear any previous message
  typingMessage.style.visibility = "visible"; // Show the message

  // Play music instantly
  audio.currentTime = 0;
  audio.play();

  let i = 0;
  // Typing effect function
  function typeMessage(message, delay, speed, stayTime, callback) {
    let messageIndex = 0;
    typingMessage.innerHTML = "";
    setTimeout(function() {
      function type() {
        if (messageIndex < message.length) {
          typingMessage.innerHTML += message.charAt(messageIndex);
          messageIndex++;
          setTimeout(type, speed);
        }
      }
      type();
      // After typing finishes, wait for the stay time, then hide the message
      setTimeout(function() {
        typingMessage.innerHTML = ""; // Hide message after the stay time
        if (callback) {
          callback();
        }
      }, message.length * speed + stayTime);
    }, delay);
  }

  // Start typing the first message with 3.56 seconds delay, stay for 1.39 seconds, and then disappear
  typeMessage(message1, 3560, 145, 1250, function() {
    // After the first message disappears, start typing the second message
    typeMessage(message2, 0, 195, 2646, function() { // Stay for 3.56 seconds for the second message
      typeMessage(message3, 0, 115, 1695, function() {
        typeMessage(message4, 0, 100, 1567, function() {
          typeMessage(message5, 0, 135, 2667, function() {
            typeMessage(message6, 0, 115, 2115, function() {
              typeMessage(message7, 0, 150, 0765, function() {
                typeMessage(message8, 0, 160, 10000);
              });
            });
          });
        });
      });
    });
  });

  // Show the GIF when "No" is clicked
  gif.style.display = "block";
  gif.style.position = "absolute";
  gif.style.bottom = "10px"; // Position the GIF just below the "Yes" button's GIF
  gif.style.left = "50%";
  gif.style.transform = "translateX(-50%)";

  // Disable the "No" button to make it unclickable after it's clicked
  noBtn.disabled = true;
  noBtn.style.backgroundColor = "#dcdcdc"; // Change color to show it's disabled
  noBtn.style.cursor = "not-allowed"; // Change the cursor to indicate it's not clickable

  // Hide Yes button and change the No button text and position
  yesBtn.style.display = "none";
  noBtn.innerHTML = " :( ";
  noBtn.style.position = "absolute";
  noBtn.style.top = "2%";
  noBtn.style.left = "50%";
  noBtn.style.transform = "translateX(-50%)";
});