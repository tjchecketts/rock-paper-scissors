// load entire page before JS
$(document).ready(function() {
  
  // establish variables
  $('#game').on('change', function() {
    var rockImg
    var paperImg
    var scissorsImg
    var imgSize = 'height="300" width="400">'

    // establish text changes when select option changes
    switch(this.value) {
      case 'bhn':
        $('#rock').text("Bear beats Ninja")
        $('#paper').text("Hunter beats Bear")
        $('#scissors').text("Ninja beats Hunter")
        break
      case 'dpk':
        $('#rock').text("Dragon beats Princess")
        $('#paper').text("Princess beats Knight")
        $('#scissors').text("Knight beats Dragon")
        break
      default:
        $('#rock').text("Rock beats Scissors")
        $('#paper').text("Paper beats Rock")
        $('#scissors').text("Scissors beats Paper")
    }

    // establish image changes when select option changes
    switch(this.value) {
      case 'bhn':
        rockImg = '<img id="rock_img" src="images/unsplash-bear.jpg" alt="polar bear" ' + imgSize
        paperImg = '<img id="paper_img" src="images/unsplash-hunter.jpg" alt="hunters in camo" ' + imgSize
        scissorsImg = '<img id="scissors_img" src="images/open-ninja.jpg" alt="black and white ninja" ' + imgSize
        break
      case 'dpk':
        rockImg = '<img id="rock_img" src="images/unsplash-dragon.jpg" alt="Chinese dragon" ' + imgSize
        paperImg = '<img id="paper_img" src="images/unsplash-princess.jpg" alt="princess with flower crown" ' + imgSize
        scissorsImg = '<img id="scissors_img" src="images/unsplash-knight.jpg" alt="medieval knight" ' + imgSize
        break
      default:
        rockImg = '<img id="rock_img" src="images/unsplash-rock.jpg" alt="small shiny pebbles" ' + imgSize
        paperImg = '<img id="paper_img" src="images/unsplash-paper.jpg" alt="book with turning pages" ' + imgSize
        scissorsImg = '<img id="scissors_img" src="images/unsplash-scissors.jpg" alt="group of scissors" ' + imgSize
    }

    // change images
    $('.images').html(rockImg + paperImg + scissorsImg)
  })

  // need these 3 variable outside image click jQueries
  var plusOneWin = 0
  var plusOneLoss = 0
  var plusOneTie = 0
  var text = document.getElementById('choice-text')

  // user picks rock
  $(document).on('click', '#rock_img', function() {
    var rndm_num = Math.floor(Math.random() * 3 + 1)

    if (rndm_num === 1) {
      text.innerHTML = "You tied! You chose Rock and the computer chose Rock."
      $('#ties').html(++plusOneTie)
    }
    else if (rndm_num === 2) {
      text.innerHTML = "You lost! You chose Rock and the computer chose Paper."
      $('#losses').html(++plusOneLoss)
    }
    else if (rndm_num === 3) {
      text.innerHTML = "You won! You chose Rock and the computer chose Scissors."
      $('#wins').html(++plusOneWin)
    }
  })
  
  // user picks paper
  $(document).on('click', '#paper_img', function() {
    var rndm_num = Math.floor(Math.random() * 3 + 1)
    
    if (rndm_num === 1) {
      text.innerHTML = "You won! You chose Paper and the computer chose Rock."
      $('#wins').html(++plusOneWin)
    }
    else if (rndm_num === 2) {
      text.innerHTML = "You tied! You chose Paper and the computer chose Paper."
      $('#ties').html(++plusOneTie)
    }
    else if (rndm_num === 3) {
      text.innerHTML = "You lost! You chose Paper and the computer chose Scissors."
      $('#losses').html(++plusOneLoss)
    }
  })
  
  // user picks scissors
  $(document).on('click', '#scissors_img', function() {
    var rndm_num = Math.floor(Math.random() * 3 + 1)
    
    if (rndm_num === 1) {
      text.innerHTML = "You lost! You chose Scissors and the computer chose Rock."
      $('#losses').html(++plusOneLoss)
    }
    else if (rndm_num === 2) {
      text.innerHTML = "You won! You chose Scissors and the computer chose Paper."
      $('#wins').html(++plusOneWin)
    }
    else if (rndm_num === 3) {
      text.innerHTML = "You tied! You chose Scissors and the computer chose Scissors."
      $('#ties').html(++plusOneTie)
    }
  })  
})