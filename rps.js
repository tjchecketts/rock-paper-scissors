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

  // need to have it on whole document and with 2 parameters
  var plusOneWin = 0;
  var plusOneLoss = 0;
  var plusOneTie = 0;
  
  $(document).on('click', '#rock_img', function() {
    var rndm_num = Math.floor(Math.random() * 3 + 1)
    var yourChoice = 1;
    
    console.log("Your Choice: " + yourChoice);
    console.log("Opponent's Choice: " + rndm_num);

    if (rndm_num === 1) {
      console.log("You tied!")
      plusOneTie += 1;
      $('#ties').html(plusOneTie)
    }
    else if (rndm_num === 2) {
      console.log("You lose!")
      plusOneLoss += 1;
      $('#losses').html(plusOneLoss)
    }
    else if (rndm_num === 3) {
      console.log("You win!")
      plusOneWin += 1;
      $('#wins').html(plusOneWin)
    }
    
  });
  
  $(document).on('click', '#paper_img', function() {
    var rndm_num = Math.floor(Math.random() * 3 + 1)
    var yourChoice = 2;
    
    console.log("Your Choice: " + yourChoice);
    console.log("Opponent's Choice: " + rndm_num)
    
    if (rndm_num === 1) {
      console.log("You win!")
      plusOneWin += 1;
      $('#wins').html(plusOneWin)
    }
    else if (rndm_num === 2) {
      console.log("You tied!")
      plusOneTie += 1;
      $('#ties').html(plusOneTie)
    }
    else if (rndm_num === 3) {
      console.log("You lose!")
      plusOneLoss += 1;
      $('#losses').html(plusOneLoss)
    }
    
  });
  
  $(document).on('click', '#scissors_img', function() {
    var rndm_num = Math.floor(Math.random() * 3 + 1)
    var yourChoice = 3;
    
    console.log("Your Choice: " + yourChoice);
    console.log("Opponent's Choice: " + rndm_num)
    
    if (rndm_num === 1) {
      console.log("You lose!");
      plusOneLoss += 1;
      $('#losses').html(plusOneLoss)
    }
    else if (rndm_num === 2) {
      console.log("You win!");
      plusOneWin += 1;
      $('#wins').html(plusOneWin)
    }
    else if (rndm_num === 3) {
      console.log("You tied!");
      plusOneTie += 1;
      $('#ties').html(plusOneTie)
    }
    
  }) ; 
  
});