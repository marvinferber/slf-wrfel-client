radio.onReceivedString(function (receivedString) {
    if (receivedString == "i") {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.showString(receivedString)
    }
})
radio.setGroup(173)
basic.forever(function () {
	
})
