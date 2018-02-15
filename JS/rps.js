// load entire page before JS
$(document).ready(function() {
  
  // establish variables
  $('#game').on('change', function() {
    var imgSize = 'height="300" width="400">'

    // establish text changes when select option changes
    switch(this.value) {
      case 'bhn':
        $('#rock').text("Bear eats Ninja")
        $('#paper').text("Hunter shoots Bear")
        $('#scissors').text("Ninja slays Hunter")
        break
      case 'kpd':
        $('#rock').text("Knight slays Dragon")
        $('#paper').text("Princess charms Knight")
        $('#scissors').text("Dragon eats Princess")
        break
      default:
        $('#rock').text("Rock beats Scissors")
        $('#paper').text("Paper beats Rock")
        $('#scissors').text("Scissors beats Paper")
    }

    // establish image changes when select option changes
    switch(this.value) {
      case 'bhn':
        $('.images').html(
          '<img id="rock_img" src="images/unsplash-bear.jpg" alt="polar bear" ' + imgSize
          + '<img id="paper_img" src="images/unsplash-hunter.jpg" alt="hunters in camo" ' + imgSize
          + '<img id="scissors_img" src="images/open-ninja.jpg" alt="black and white ninja" ' + imgSize
        )
        break
      case 'kpd':
        $('.images').html(
          '<img id="rock_img" src="images/unsplash-knight.jpg" alt="medieval knight" ' + imgSize
          + '<img id="paper_img" src="images/unsplash-princess.jpg" alt="princess with flower crown" ' + imgSize
          + '<img id="scissors_img" src="images/unsplash-dragon.jpg" alt="Chinese dragon" ' + imgSize
        )
        break
      default:
        $('.images').html(
          '<img id="rock_img" src="images/unsplash-rock.jpg" alt="small shiny pebbles" ' + imgSize
          + '<img id="paper_img" src="images/unsplash-paper.jpg" alt="book with turning pages" ' + imgSize
          + '<img id="scissors_img" src="images/unsplash-scissors.jpg" alt="group of scissors" ' + imgSize
        )
    }
  })

  // need these 3 variable outside image click jQueries
  var winsTotal = 0
  var lossesTotal = 0
  var tiesTotal = 0
  var text = document.getElementById('choice-text')
  var whichGame = document.getElementById('game')

  // user picks rock
  $(document).on('click', '#rock_img', function() {
    var rndm_num = Math.floor(Math.random() * 3 + 1)
    switch(whichGame.value) {
      case 'bhn':
        dynRock = "Bear"
        dynPaper = "Hunter"
        dynScissors = "Ninja"
        break
      case 'kpd':
        dynRock = "Knight"
        dynPaper = "Princess"
        dynScissors = "Dragon"
        break
      default:
        dynRock = "Rock"
        dynPaper = "Paper"
        dynScissors = "Scissors"
    }
      
    if (rndm_num === 1) {
      text.innerHTML = `You tied! You chose ${dynRock} and the computer chose ${dynRock}.`
      $('#ties').html(++tiesTotal)
    }
    else if (rndm_num === 2) {
      text.innerHTML = `You lost! You chose ${dynRock} and the computer chose ${dynPaper}.`
      $('#losses').html(++lossesTotal)
    }
    else if (rndm_num === 3) {
      text.innerHTML = `You won! You chose ${dynRock} and the computer chose ${dynScissors}.`
      $('#wins').html(++winsTotal)
    }
  })
  
  // user picks paper
  $(document).on('click', '#paper_img', function() {
    var rndm_num = Math.floor(Math.random() * 3 + 1)
    switch(whichGame.value) {
      case 'bhn':
        dynRock = "Bear"
        dynPaper = "Hunter"
        dynScissors = "Ninja"
        break
      case 'kpd':
        dynRock = "Knight"
        dynPaper = "Princess"
        dynScissors = "Dragon"
        break
      default:
        dynRock = "Rock"
        dynPaper = "Paper"
        dynScissors = "Scissors"
    }
    
    if (rndm_num === 1) {
      text.innerHTML = `You won! You chose ${dynPaper} and the computer chose ${dynRock}.`
      $('#wins').html(++winsTotal)
    }
    else if (rndm_num === 2) {
      text.innerHTML = `You tied! You chose ${dynPaper} and the computer chose ${dynPaper}.`
      $('#ties').html(++tiesTotal)
    }
    else if (rndm_num === 3) {
      text.innerHTML = `You lost! You chose ${dynPaper} and the computer chose ${dynScissors}.`
      $('#losses').html(++lossesTotal)
    }
  })
  
  // user picks scissors
  $(document).on('click', '#scissors_img', function() {
    var rndm_num = Math.floor(Math.random() * 3 + 1)
    switch(whichGame.value) {
      case 'bhn':
        dynRock = "Bear"
        dynPaper = "Hunter"
        dynScissors = "Ninja"
        break
      case 'kpd':
        dynRock = "Knight"
        dynPaper = "Princess"
        dynScissors = "Dragon"
        break
      default:
        dynRock = "Rock"
        dynPaper = "Paper"
        dynScissors = "Scissors"
    }

    if (rndm_num === 1) {
      text.innerHTML = `You lost! You chose ${dynScissors} and the computer chose ${dynRock}.`
      $('#losses').html(++lossesTotal)
    }
    else if (rndm_num === 2) {
      text.innerHTML = `You won! You chose ${dynScissors} and the computer chose ${dynPaper}.`
      $('#wins').html(++winsTotal)
    }
    else if (rndm_num === 3) {
      text.innerHTML = `You tied! You chose ${dynScissors} and the computer chose ${dynScissors}.`
      $('#ties').html(++tiesTotal)
    }
  })  
})