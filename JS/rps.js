// load entire page before JS
$(document).ready(function() {
  
  // establish variables
  $('#game').on('change', function() {
    var rockChange;
    var paperChange;
    var scissorsChange;
    var rockImg;
    var paperImg;
    var scissorsImg;
    var imgSize = 'height="300"' + ' ' + 'width="400">'

    // establish text changes when select option changes
    switch(this.value) {
      case 'rps':
        rockChange = "Rock beats Scissors";
        paperChange = "Paper beats Rock";
        scissorsChange = "Scissors beats Paper";
        break;
      case 'bhn':
        rockChange = "Bear beats Ninja";
        paperChange = "Hunter beats Bear";
        scissorsChange = "Ninja beats Hunter";
        break;
      case 'dpk':
        rockChange = "Dragon beats Princess";
        paperChange = "Princess beats Knight";
        scissorsChange = "Knight beats Dragon";
        break;

    };

    // change text
    $('#rock').text(rockChange);
    $('#paper').text(paperChange);
    $('#scissors').text(scissorsChange);

    // establish image changes when select option changes
    switch(this.value) {
      case 'rps':
        rockImg = '<img' + ' ' + 'id="rock_img"' + ' ' + 'src="images/unsplash-rock.jpg"' + ' ' 
          + 'alt="small shiny pebbles"' + ' ' + imgSize;
        paperImg = '<img' + ' ' + 'id="paper_img"' + ' ' + 'src="images/unsplash-paper.jpg"' + ' ' 
          + 'alt="book with turning pages"' + ' ' + imgSize;
        scissorsImg = '<img' + ' ' + 'id="scissors_img"' + ' ' + 'src="images/unsplash-scissors.jpg"' + ' ' 
          + 'alt="group of scissors"' + ' ' + imgSize;
        break;
      case 'bhn':
        rockImg = '<img' + ' ' + 'id="rock_img"' + ' ' + 'src="images/unsplash-bear.jpg"' + ' ' 
          + 'alt="polar bear"' + ' ' + imgSize;
        paperImg = '<img' + ' ' + 'id="paper_img"' + ' ' + 'src="images/unsplash-hunter.jpg"' + ' ' 
          + 'alt="hunters in camo"' + ' ' + imgSize;
        scissorsImg = '<img' + ' ' + 'id="scissors_img"' + ' ' + 'src="images/open-ninja.jpg"' + ' ' 
          + 'alt="black and white ninja"' + ' ' + imgSize;
        break;
      case 'dpk':
        rockImg = '<img' + ' ' + 'id="rock_img"' + ' ' + 'src="images/unsplash-dragon.jpg"' + ' ' 
          + 'alt="Chinese dragon"' + ' ' + imgSize;
        paperImg = '<img' + ' ' + 'id="paper_img"' + ' ' + 'src="images/unsplash-princess.jpg"' + ' ' 
          + 'alt="princess with flower crown"' + ' ' + imgSize;
        scissorsImg = '<img' + ' ' + 'id="scissors_img"' + ' ' + 'src="images/unsplash-knight.jpg"' + ' ' 
          + 'alt="medieval knight"' + ' ' + imgSize;
        break;

    };

    // change images
    $('.images').html(rockImg + ' ' + paperImg + ' ' + scissorsImg);

  })

  // need these 3 variable outside image click jQueries
  var plusOneWin = 0;
  var plusOneLoss = 0;
  var plusOneTie = 0;

  // user picks rock
  $(document).on('click', '#rock_img', function() {
    var rndm_num = Math.floor(Math.random() * 3 + 1)
    var yourChoice = 1;

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
  
  // user picks paper
  $(document).on('click', '#paper_img', function() {
    var rndm_num = Math.floor(Math.random() * 3 + 1)
    var yourChoice = 2;
    
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
  
  // user picks scissors
  $(document).on('click', '#scissors_img', function() {
    var rndm_num = Math.floor(Math.random() * 3 + 1)
    var yourChoice = 3;
    
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