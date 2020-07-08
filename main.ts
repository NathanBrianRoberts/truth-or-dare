let arrowChoice = randint(1,8)
let previousChoice = 0

input.onButtonPressed(Button.AB, function (){
    if (arrowChoice == previousChoice){
        arrowChoice = randint(1,8)
    }
    for (let i = randint(1,8); i < 10; i++){
        basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
        basic.showLeds(`
        . . # # #
        . . . # #
        . . # . #
        . # . . .
        # . . . .
        `)
        basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `) 
        basic.showLeds(`
        # . . . .
        . # . . .
        . . # . #
        . . . # #
        . . # # #
        `)
        basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        `)
        basic.showLeds(`
        . . . . #
        . . . # .
        # . # . .
        # # . . .
        # # # . .
        `)
    }
    if (arrowChoice == 1){
        basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
    }
    else if (arrowChoice == 2){
        basic.showLeds(`
        . . # # #
        . . . # #
        . . # . #
        . # . . .
        # . . . .
        `)
        basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
        basic.showLeds(`
        # # # . .
        # # . . .
        # . # . .
        . . . # .
        . . . . #
        `)
    }
    else if (arrowChoice == 3){
       basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `) 
    }
    else if (arrowChoice == 4){
        basic.showLeds(`
        # . . . .
        . # . . .
        . . # . #
        . . . # #
        . . # # #
        `)
    }
    else if (arrowChoice == 5){
        basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        `)
    }
    else if (arrowChoice == 6){
        basic.showLeds(`
        . . . . #
        . . . # .
        # . # . .
        # # . . .
        # # # . .
        `)
    }
    else if (arrowChoice == 7){
        basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
    }
    else{
        basic.showLeds(`
        # # # . .
        # # . . .
        # . # . .
        . . . # .
        . . . . #
        `)
    }
    previousChoice = arrowChoice
    arrowChoice = randint(1,8)
})


input.onButtonPressed(Button.A, function (){
    basic.showString("Dare")
    let dare = randint(1,5)

    if (dare == 1){
        basic.showString("try and drink a glass of water with your eyes shut")
    }
    else if (dare == 2){
        basic.showString("Try and score a goal with a blindfold")
    }
    else if (dare == 3){
        basic.showString("stick a kick me note on someones back without them noticing")
    }
    else if (dare == 4){
        basic.showString("Play a game on the Xbox/console without looking")
    }
    else{
        basic.showString("Spin around for 20 secconds, then try and stand up for 30 seconds")
    }
})

input.onButtonPressed(Button.B, function (){
    basic.showString("Truth")
    let truth = randint(1,5)

    if (truth == 1){
        basic.showString("Who do you fancy?")
    }
    else if (truth == 2){
        basic.showString("Which console is better?")
    }
    else if (truth == 3){
        basic.showString("What was the cringiest thing you have said?")
    }
    else if (truth == 4){
        basic.showString("What is your favorite game")
    }
    else{
        basic.showString("What do you wish for")
    }
})