var onAndOff = true;
var $button = document.querySelector('button');
var $overlay = document.querySelector('div');
var $positionSurvey = document.querySelector('div.column-hidden');
var $surveyButton = document.querySelector('.survey-button-styling');

function survey(event) {
  if (onAndOff === true) {
    $button.className = 'button-style';
    $positionSurvey.className = 'position-survey';
    $overlay.className = 'overlay';
    onAndOff = false;
  }
}

function noSurvey(event) {
  if (onAndOff === false) {
    $surveyButton = 'survey-button-styling';
    $positionSurvey.className = 'column-hidden';
    $overlay.className = '';
    onAndOff = true;
  }
}

$button.addEventListener('click', survey);
$surveyButton.addEventListener('click', noSurvey);
