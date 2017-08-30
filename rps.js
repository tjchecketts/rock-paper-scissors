$(document).ready(function() {

  $('#game').on('change', function() {
    var rockChange;
    var paperChange;
    var scissorsChange;
    var rockImg;
    var paperImg;
    var scissorsImg;
    var imgSize = 'height="300"' + ' ' + 'width="300">'

    // change the text
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

    // change the image
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

    $('.images').html(rockImg + ' ' + paperImg + ' ' + scissorsImg);

  })

  ///MECAHNICES OF RPS

  // function tie() {
  //   ties += 1;
  //   updateUi('#ties');
  // }

  // function win() {
  //   wins += 1;
  //   updateUi('#wins');
  // }

  // function lose() {
  //   loses += 1;
  //   updateUi('#loses');
  // }

  $('#rock_img').on('click', function() {
    var rndm_num = Math.floor(Math.random() * 3 + 1)
    var yourChoice = 1;
    
    console.log("Your Choice: " + yourChoice);
    console.log("Opponent's Choice: " + rndm_num)

    if (rndm_num === 1) {
      console.log("You tied!");

      // attempt to count up winners class
      // var i=0;
      // $('.winners').each(function(){
      //     i++;
      //     var newID='winners'+i;
      //     $(this).attr('#ties',newID);
      //     $(this).val(i);
      // });
    }
    else if (rndm_num === 2) {
      console.log("You lose!")
    }
    else if (rndm_num === 3) {
      console.log("You win!")
    }

  });

  $('#paper_img').on('click', function() {
    var rndm_num = Math.floor(Math.random() * 3 + 1)
    var yourChoice = 2;
    
    console.log("Your Choice: " + yourChoice);
    console.log("Opponent's Choice: " + rndm_num)

    if (rndm_num === 1) {
      console.log("You win!")
    }
    else if (rndm_num === 2) {
      console.log("You tied!")
    }
    else if (rndm_num === 3) {
      console.log("You lose!")
    }

  });

  $('#scissors_img').on('click', function() {
    var rndm_num = Math.floor(Math.random() * 3 + 1)
    var yourChoice = 3;
    
    console.log("Your Choice: " + yourChoice);
    console.log("Opponent's Choice: " + rndm_num)

    if (rndm_num === 1) {
      console.log("You lose!");
    }
    else if (rndm_num === 2) {
      console.log("You win!");
    }
    else if (rndm_num === 3) {
      console.log("You tied!");
    }

  }) ; 

});
