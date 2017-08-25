$(document).ready(function() {
  $('#game').on('change', function() {
    var rockChange;
    var paperChange;
    var scissorsChange;
    
    switch(this.value) {
      case 'rps':
        rockChange = "Rock";
        paperChange = "Paper";
        scissorsChange = "Scissors";
        break;
      case 'bhn':
        rockChange = "Bear";
        paperChange = "Hunter";
        scissorsChange = "Ninja";
        break;
      case 'dpk':
        rockChange = "Dragon";
        paperChange = "Princess";
        scissorsChange = "Knight";
        break;

    }

    $('#rock').text(rockChange);
    $('#paper').text(paperChange);
    $('#scissors').text(scissorsChange);

  })
})