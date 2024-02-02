let timer;
let initialDuration;
let remainingTime;
let startTime;
let hoursInput = document.getElementById('hoursInput');
let minutesInput = document.getElementById('minutesInput');
let timerDisplay = document.getElementById('timerDisplay');

function startTimer() {
  initialDuration = getInitialDuration();

  if (remainingTime === undefined) {
    remainingTime = initialDuration;
    startTime = Date.now();
  }

  timer = setInterval(() => {
    let currentTime = Date.now();
    let elapsedTime = Math.floor((currentTime - startTime) / 1000);

    remainingTime = Math.max(0, initialDuration - elapsedTime);

    if (remainingTime > 0) {
      updateTimerDisplay(remainingTime);
    } else {
      stopTimer();
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
}

function restartTimer() {
  stopTimer();
  remainingTime = undefined;
  updateTimerDisplay(0);
}

function startPomodoro() {
  restartTimer();
  setTimerInput(0, 25);
  startTimer();
}

function startShortBreak() {
  restartTimer();
  setTimerInput(0, 5);
  startTimer();
}

function startLongBreak() {
  restartTimer();
  setTimerInput(0, 15);
  startTimer();
}

function setTimerInput(hours, minutes) {
  hoursInput.value = hours;
  minutesInput.value = minutes;
}

function getInitialDuration() {
  let hours = parseInt(hoursInput.value) || 0;
  let minutes = parseInt(minutesInput.value) || 0;
  return hours * 3600 + minutes * 60;
}

function updateTimerDisplay(seconds) {
  let hours = Math.floor(seconds / 3600);
  let minutes = Math.floor((seconds % 3600) / 60);
  let display = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`;
  timerDisplay.textContent = display;
}
 

// Additional functions for Motivation Quotes
let currentQuoteIndex = 0;

function showMotivation() {
  displayMotivationQuote();
  document.getElementById('motivationContainer').style.display = 'flex';
}

function hideMotivation() {
  document.getElementById('motivationContainer').style.display = 'none';
}

function displayMotivationQuote() {
  const motivationQuotes = [
    "Believe you can and you're halfway there. - Einstien",
    "Don't watch the clock do what it does. Keep going.-Thomas A. Edison",
    "The only way to do great work is to love what you do.- Thomas A. Edison ",
     
     // It will Increement Till the last Quote

    "It always seems impossible until it's done. -Nelson Mandela",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. -Winston Churchill",
    "Your time is limited, don't waste it living someone else's life. -Steve Jobs"
  ];

  const quotesContainer = document.getElementById('motivationQuotes');
  quotesContainer.innerHTML = ""; // Clear previous quote

  const quoteElement = document.createElement('p');
  quoteElement.textContent = motivationQuotes[currentQuoteIndex];
  quotesContainer.appendChild(quoteElement);

  // Increment the index for the next click
  currentQuoteIndex = (currentQuoteIndex + 1) % motivationQuotes.length;
}

// Add this function to your existing JavaScript code
function toggleFullscreen() {
  const element = document.documentElement;

  if (!document.fullscreenElement) {
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  }
}


let currentStickerIndex = 0;

function showStickers() {
  displaySticker(currentStickerIndex);
  document.getElementById('stickersContainer').style.display = 'block';
  // Increment the sticker index for the next time it is opened
  currentStickerIndex++;
}

function hideStickers() {
  document.getElementById('stickersContainer').style.display = 'none';
}

function displaySticker(index) {
  const stickers = [
     'C:\\Users\\PRANAV\\Downloads\\img1.png',
     'C:\\Users\\PRANAV\\Downloads\\img2.png',
     'C:\\Users\\PRANAV\\Downloads\\img3.png',
     'C:\\Users\\PRANAV\\Downloads\\img4.jpg',
    // Add more stickers as needed
  ];

  const stickersContainer = document.getElementById('stickers');
  // Check if there are more stickers to display
  if (index < stickers.length) {
    stickersContainer.innerHTML = `<img src="${stickers[index]}" alt="Sticker" class="sticker">`;
  } else {
    // If no more stickers, reset the index for the next time it is opened
    currentStickerIndex = 0;
    hideStickers();
  }
}