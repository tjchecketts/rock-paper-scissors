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
        rockImg = '<img' + ' ' + 'id="rock_img"' + ' ' + 'src="rock.jpg"' + ' ' 
          + 'alt="Rock cartoon hand sign"' + ' ' + imgSize;
        paperImg = '<img' + ' ' + 'id="paper_img"' + ' ' + 'src="paper.jpg"' + ' ' 
          + 'alt="Paper cartoon hand sign"' + ' ' + imgSize;
        scissorsImg = '<img' + ' ' + 'id="scissors_img"' + ' ' + 'src="scissors.jpg"' + ' ' 
          + 'alt="Scissors cartoon hand sign"' + ' ' + imgSize;
        break;
      case 'bhn':
        rockImg = '<img' + ' ' + 'id="rock_img"' + ' ' + 'src="bear.jpg"' + ' ' 
          + 'alt="cartoon teddy bear"' + ' ' + imgSize;
        paperImg = '<img' + ' ' + 'id="paper_img"' + ' ' + 'src="hunter.jpg"' + ' ' 
          + 'alt="cartoon hunter Elmer Fudd"' + ' ' + imgSize;
        scissorsImg = '<img' + ' ' + 'id="scissors_img"' + ' ' + 'src="ninja.gif"' + ' ' 
          + 'alt="cartoon ninja"' + ' ' + imgSize;
        break;
      case 'dpk':
        rockImg = '<img' + ' ' + 'id="rock_img"' + ' ' + 'src="dragon.jpg"' + ' ' 
          + 'alt="cartoon dragon breathing fire"' + ' ' + imgSize;
        paperImg = '<img' + ' ' + 'id="paper_img"' + ' ' + 'src="princess.jpg"' + ' ' 
          + 'alt="cartoon princess Anna"' + ' ' + imgSize;
        scissorsImg = '<img' + ' ' + 'id="scissors_img"' + ' ' + 'src="knight.jpg"' + ' ' 
          + 'alt="cartoon knight on horse"' + ' ' + imgSize;
        break;

    };

    $('.images').html(rockImg + paperImg + scissorsImg);

  })

  ///MECAHNICES OF RPS

  $('#rock_img').on('click', function() {
    var rndm_num = Math.floor(Math.random() * 3 + 1)
    var yourChoice = 1;
    
    console.log(yourChoice);
    console.log(rndm_num)

  });

  $('#paper_img').on('click', function() {
    var rndm_num = Math.floor(Math.random() * 3 + 1)
    var yourChoice = 2;
    
    console.log(yourChoice);
    console.log(rndm_num)

  });

  $('#scissors_img').on('click', function() {
    var rndm_num = Math.floor(Math.random() * 3 + 1)
    var yourChoice = 3;
    
    console.log(yourChoice);
    console.log(rndm_num)

  }) ; 

});
