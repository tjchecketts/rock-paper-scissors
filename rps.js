$(document).ready(function() {

  $('#game').on('change', function() {
    var rockChange;
    var paperChange;
    var scissorsChange;
    var rockImg;
    var paperImg;
    var scissorsImg;
    var imgSize = 'height="300"' + ' ' + 'width="300">'

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

    };

    $('#rock').text(rockChange);
    $('#paper').text(paperChange);
    $('#scissors').text(scissorsChange);

    switch(this.value) {
      case 'rps':
        rockImg = '<img' + ' ' + 'src="rock.jpg"' + ' ' + 'alt="Rock cartoon hand sign"' + ' ' + imgSize;
        paperImg = '<img' + ' ' + 'src="paper.jpg"' + ' ' + 'alt="Paper cartoon hand sign"' + ' ' + imgSize;
        scissorsImg = '<img' + ' ' + 'src="scissors.jpg"' + ' ' + 'alt="Scissors cartoon hand sign"' + ' ' + imgSize;
        break;
      case 'bhn':
        rockImg = '<img' + ' ' + 'src="bear.jpg"' + ' ' + 'alt="cartoon teddy bear"' + ' ' + imgSize;
        paperImg = '<img' + ' ' + 'src="hunter.jpg"' + ' ' + 'alt="cartoon hunter Elmer Fudd"' + ' ' + imgSize;
        scissorsImg = '<img' + ' ' + 'src="ninja.gif"' + ' ' + 'alt="cartoon ninja"' + ' ' + imgSize;
        break;
      case 'dpk':
        rockImg = '<img' + ' ' + 'src="dragon.jpg"' + ' ' + 'alt="cartoon dragon breathing fire"' + ' ' + imgSize;
        paperImg = '<img' + ' ' + 'src="princess.jpg"' + ' ' + 'alt="cartoon princess Anna"' + ' ' + imgSize;
        scissorsImg = '<img' + ' ' + 'src="knight.jpg"' + ' ' + 'alt="cartoon knight on horse"' + ' ' + imgSize;
        break;

    };

    $('.images').html(rockImg + paperImg + scissorsImg);

  })

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