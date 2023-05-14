radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
})
input.onButtonPressed(Button.A, function () {
    getal = randint(1, 99)
    radio.sendNumber(getal)
    basic.showNumber(getal)
})
let getal = 0
radio.setGroup(112)
