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
////////starting going down a bit of a rabbit hole...
////////just leaving this her for now, maybe come back to it
////////purpose was to switch out images for appropriate selector
////////similar to text above

  // $('#game').on('change', function() {
  //   var rockImg;
  //   var paperImg;
  //   var scissorsImg;
  //   var imgSize = 'height="250"' + ' ' + 'width="250">"'

  //   switch(this.value) {
  //     case 'rps':
  //       rockImg = '<img' + ' ' + 'src="rock.jpg"' + ' ' + 'alt="Rock cartoon hand sign"' + ' ' + imgSize;
  //       paperImg = '<img' + ' ' + 'paper.jpg"' + ' ' + 'alt="Paper cartoon hand sign"' + ' ' + imgSize;
  //       scissorsImg = '<img' + ' ' + 'src="scissors.jpg"' + ' ' + 'alt="Scissors cartoon hand sign"' + ' ' + imgSize;
  //       break;
  //     case 'bhn':
  //       rockImg = "Bear";
  //       paperImg = "Hunter";
  //       scissorsImg = '<img' + ' ' + 'src="ninja.jpg"' + ' ' + 'alt="cartoon ninja"' + ' ' + imgSize;
  //       break;
  //     case 'dpk':
  //       rockImg = "Dragon";
  //       paperImg = "Princess";
  //       scissorsImg = "Knight";
  //       break;

  //   };

  //   $('#rock_img').text('<img' + ' ' + 'src="ninja.jpg"' + ' ' + 'alt="cartoon ninja"' + ' ' + imgSize);
  //   $('#paper_img').text('<img' + ' ' + 'src="ninja.jpg"' + ' ' + 'alt="cartoon ninja"' + ' ' + imgSize);
  //   $('#scissors_img').text('<img' + ' ' + 'src="ninja.jpg"' + ' ' + 'alt="cartoon ninja"' + ' ' + imgSize);

  // });

})



///MECAHNICES OF RPS

var rndm_num = Math.floor(Math.random() * 3 + 1)
var oppenent = [];
switch(rndm_num) {
  case rndm_num === 1:
    opponent = 1
    break;
  case rndm_num === 2:
    opponent = 2
    break;
  case rndm_num === 3:
    opponent = 3
    break;

};

// console.log(opponent)