radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 100) {
        if (input.isGesture(Gesture.TiltLeft) == true) {
            mbit_小車類.CarCtrlSpeed2(mbit_小車類.CarState.Car_Run, 80, 100)
        } else if (input.isGesture(Gesture.TiltRight) == true) {
            mbit_小車類.CarCtrlSpeed2(mbit_小車類.CarState.Car_Run, 100, 80)
        } else {
            mbit_小車類.CarCtrlSpeed(mbit_小車類.CarState.Car_Run, 100)
        }
    } else if (receivedNumber == -100) {
        if (input.isGesture(Gesture.TiltLeft) == true) {
            mbit_小車類.CarCtrlSpeed2(mbit_小車類.CarState.Car_Back, 80, 100)
        } else if (input.isGesture(Gesture.TiltRight) == true) {
            mbit_小車類.CarCtrlSpeed2(mbit_小車類.CarState.Car_Back, 100, 80)
        } else {
            mbit_小車類.CarCtrlSpeed(mbit_小車類.CarState.Car_Back, 100)
        }
    } else if (receivedNumber == 0) {
        mbit_小車類.CarCtrl(mbit_小車類.CarState.Car_Stop)
    } else if (receivedNumber == 50) {
        mbit_小車類.CarCtrl(mbit_小車類.CarState.Car_SpinLeft)
        mbit_小車類.RGB_Car_Big2(mbit_小車類.enColor.Cyan)
        if (input.isGesture(Gesture.ScreenDown) == true) {
            mbit_小車類.CarCtrl(mbit_小車類.CarState.Car_Stop)
        }
    } else if (receivedNumber == 5) {
        for (let index = 0; index < 1; index++) {
            car_speed = car_speed + 5
        }
    } else if (receivedNumber == -5) {
        for (let index = 0; index < 1; index++) {
            car_speed = car_speed - 5
        }
    } else {
    	
    }
})
let car_speed = 0
radio.setGroup(255)
radio.setTransmitPower(7)
car_speed = 100
mbit_小車類.CarCtrlSpeed(mbit_小車類.CarState.Car_Run, car_speed)
mbit_小車類.CarCtrlSpeed(mbit_小車類.CarState.Car_Back, car_speed)
if (mbit_小車類.Avoid_Sensor(mbit_小車類.enAvoidState.OBSTACLE)) {
    for (let index = 0; index < 4; index++) {
        music.playMelody("C5 C C5 C C5 C C5 C ", 300)
        mbit_小車類.CarCtrl(mbit_小車類.CarState.Car_Stop)
    }
}
