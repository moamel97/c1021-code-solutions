/* for the first functionality we need to query select each individual picture we have
then after selecting each picture we need to create a function that interact with the pictures we selected
inside the function we need to set timer where after 2 second or so it changes the display
of the first img to the second img in the process of it switch from the first picture to '
the second one it also needs to hide the first one and only display the second one then after it goes
through the full rotation it needs to restart and start from the first picture.. */

var $rightArrow = document.querySelector('.fa-angle-right');
$rightArrow.addEventListener('click', swipeRight);
var $leftArrow = document.querySelector('.fa-angle-left');
$leftArrow.addEventListener('click', swipeLeft);
var $img = document.querySelector('img');
var $dot = document.querySelectorAll('.fa-circle');
var $clickDiv = document.querySelector('.select');
$clickDiv.addEventListener('click', firstDotClick);
var timerId = null;
var count = 0;
var dotCount = 0;

function imgSwiper(event) {
  count++;
  if (count === 0) {
    $img.setAttribute('src', './images/001.png');
  } else if (count === 1) {
    $img.setAttribute('src', './images/004.png');
  } else if (count === 2) {
    $img.setAttribute('src', './images/007.png');
  } else if (count === 3) {
    $img.setAttribute('src', './images/025.png');
  } else if (count === 4) {
    $img.setAttribute('src', './images/039.png');
    count = -1;
  }
}
timerId = setInterval(function () {
  updateDot();
  imgSwiper();
}, 3000);

function updateDot(event) {
  dotCount++;
  for (var i = 0; i < $dot.length; i++) {
    if (dotCount === i) {
      $dot[i].className = 'fas fa-circle';
    } else {
      $dot[i].className = 'far fa-circle';
    }
  }
  if (dotCount === 4) {
    dotCount = -1;
  }
}

function swipeRight(event) {
  imgSwiper();
  updateDot();
  clearInterval(timerId);
  timerId = setInterval(function () {
    updateDot();
    imgSwiper();
  }, 3000);
}
function swipeLeft(event) {
  if (count === 0 && dotCount === 0) {
    count = 3;
    dotCount = 3;
  } else if (count === -1 && dotCount === -1) {
    count = 2;
    dotCount = 2;
  } else {
    count -= 2;
    dotCount -= 2;
  }
  imgSwiper();
  updateDot();
  clearInterval(timerId);
  timerId = setInterval(function () {
    updateDot();
    imgSwiper();
  }, 3000);
}

function firstDotClick(event) {
  if (event.target.matches('.fa-circle') === false) {
    return;
  }
  for (var i = 0; i < $dot.length; i++) {
    if ($dot[i] === event.target) {
      $dot[i].className = 'fas fa-circle';
    } else {
      $dot[i].className = 'far fa-circle';
    }
    // if (count === 0) {
    //   $img.setAttribute('src', './images/001.png');
    // } else if (count === 1) {
    //   $img.setAttribute('src', './images/004.png');
    // } else if (count === 2) {
    //   $img.setAttribute('src', './images/025.png');
    // }
    clearInterval(timerId);
    timerId = setInterval(function () {
      updateDot();
      imgSwiper();
    }, 3000);
  }
}
