let set_countdown = 0
let set_number = 0
input.onButtonPressed(Button.A, function () {
    set_countdown = 10
    while (set_countdown > 0) {
        basic.showNumber(set_countdown)
        basic.pause(100)
        set_countdown += -1
    }
})
input.onButtonPressed(Button.AB, function () {
    set_countdown = 100
    while (set_countdown > -100) {
        basic.showNumber(set_countdown)
        basic.pause(100)
        set_countdown += -3
    }
})
input.onButtonPressed(Button.B, function () {
    set_number = 10
    while (set_number > 0) {
        basic.showNumber(set_number)
        basic.pause(100)
        set_number += -2
    }
})
