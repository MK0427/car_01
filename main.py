def on_received_number(receivedNumber):
    global car_speed
    if receivedNumber == 100:
        if input.is_gesture(Gesture.TILT_LEFT) == True:
            mbit_小車類.car_ctrl_speed2(mbit_小車類.CarState.CAR_RUN, 80, 100)
        elif input.is_gesture(Gesture.TILT_RIGHT) == True:
            mbit_小車類.car_ctrl_speed2(mbit_小車類.CarState.CAR_RUN, 100, 80)
        else:
            mbit_小車類.car_ctrl_speed(mbit_小車類.CarState.CAR_RUN, 100)
    elif receivedNumber == -100:
        if input.is_gesture(Gesture.TILT_LEFT) == True:
            mbit_小車類.car_ctrl_speed2(mbit_小車類.CarState.CAR_BACK, 80, 100)
        elif input.is_gesture(Gesture.TILT_RIGHT) == True:
            mbit_小車類.car_ctrl_speed2(mbit_小車類.CarState.CAR_BACK, 100, 80)
        else:
            mbit_小車類.car_ctrl_speed(mbit_小車類.CarState.CAR_BACK, 100)
    elif receivedNumber == 0:
        mbit_小車類.car_ctrl(mbit_小車類.CarState.CAR_STOP)
    elif receivedNumber == 50:
        mbit_小車類.car_ctrl(mbit_小車類.CarState.CAR_SPINLEFT)
        mbit_小車類.RGB_Car_Big2(mbit_小車類.enColor.CYAN)
        if input.is_gesture(Gesture.SCREEN_DOWN) == True:
            mbit_小車類.car_ctrl(mbit_小車類.CarState.CAR_STOP)
    elif receivedNumber == 5:
        for index in range(1):
            car_speed = car_speed + 5
    elif receivedNumber == -5:
        for index2 in range(1):
            car_speed = car_speed - 5
    else:
        pass
radio.on_received_number(on_received_number)

car_speed = 0
radio.set_group(255)
radio.set_transmit_power(7)
car_speed = 100
mbit_小車類.car_ctrl_speed(mbit_小車類.CarState.CAR_RUN, car_speed)
mbit_小車類.car_ctrl_speed(mbit_小車類.CarState.CAR_BACK, car_speed)