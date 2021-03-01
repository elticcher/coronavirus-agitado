radio.onReceivedNumber(function (receivedNumber) {
    contrario = receivedNumber
})
input.onButtonPressed(Button.A, function () {
    if (equipo < contrario) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
    }
    contrario = 0
    equipo = 0
    pillado = 0
    coronavirus = 0
})
input.onGesture(Gesture.Shake, function () {
    if (mostrado != 0) {
        equipo += input.runningTime() - mostrado
    }
    basic.clearScreen()
    basic.pause(randint(1000, 2000))
    radio.sendString("coronavirus")
})
radio.onReceivedString(function (receivedString) {
    if (coronavirus < 10) {
        mostrado = input.runningTime()
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
        coronavirus += 1
    } else {
        basic.showIcon(IconNames.No)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(Math.round(equipo / 100))
    radio.sendNumber(equipo)
})
let mostrado = 0
let coronavirus = 0
let pillado = 0
let equipo = 0
let contrario = 0
radio.setGroup(99)
