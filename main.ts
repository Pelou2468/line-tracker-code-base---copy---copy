function Turn_Right () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 100)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 100)
    basic.pause(250)
    maqueen.motorStop(maqueen.Motors.All)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 100)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 100)
    basic.pause(1)
    maqueen.motorStop(maqueen.Motors.All)
}
input.onButtonPressed(Button.A, function () {
    state2 = 1
})
function Turn_Left () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 100)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 100)
    basic.pause(200)
    maqueen.motorStop(maqueen.Motors.All)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 100)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 100)
    basic.pause(1)
    maqueen.motorStop(maqueen.Motors.All)
}
input.onButtonPressed(Button.B, function () {
    state2 = 0
    maqueen.motorStop(maqueen.Motors.All)
})
function Line_Tracking () {
    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 50)
    } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 50)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
    } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 50)
    } else if (maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0) {
    	
    }
}
let state2 = 0
basic.showIcon(IconNames.Yes)
let Run = 0
basic.forever(function () {
    if (state2 == 0) {
        maqueen.motorStop(maqueen.Motors.All)
    } else if (state2 == 1) {
        Line_Tracking()
        if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
            maqueen.motorStop(maqueen.Motors.All)
            basic.pause(100)
            Turn_Left()
            basic.pause(500)
            if (maqueen.Ultrasonic(PingUnit.Centimeters) < 12) {
                Turn_Right()
                basic.pause(200)
                maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 30)
                state2 = 2
            } else {
                state2 = 3
            }
        }
    } else if (state2 == 2) {
        Line_Tracking()
        if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 20)
            maqueen.motorStop(maqueen.Motors.All)
            basic.pause(100)
            Turn_Left()
            basic.pause(500)
            if (maqueen.Ultrasonic(PingUnit.Centimeters) < 12) {
                Turn_Right()
                maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 30)
                state2 = 4
            } else {
                state2 = 3
            }
        }
    } else if (state2 == 3) {
        Line_Tracking()
    } else if (state2 == 4) {
        Line_Tracking()
        if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 30)
            maqueen.motorStop(maqueen.Motors.All)
            basic.pause(100)
            state2 = 5
        }
    } else if (state2 == 5) {
        Line_Tracking()
        if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 30)
            maqueen.motorStop(maqueen.Motors.All)
            basic.pause(100)
            state2 = 6
        }
    } else if (state2 == 6) {
        Line_Tracking()
        if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 30)
            maqueen.motorStop(maqueen.Motors.All)
            Turn_Right()
            basic.pause(500)
            state2 = 7
        }
    } else if (state2 == 7) {
        Line_Tracking()
        if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 20)
            maqueen.motorStop(maqueen.Motors.All)
            basic.pause(100)
            if (maqueen.Ultrasonic(PingUnit.Centimeters) < 12) {
                basic.pause(500)
                Turn_Left()
                maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 30)
                Line_Tracking()
                state2 = 9
            } else {
                state2 = 8
            }
        }
    } else if (state2 == 8) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 30)
        Line_Tracking()
        if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 30)
            state2 = 10
        }
    } else if (state2 == 9) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 30)
        Line_Tracking()
        if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 30)
            maqueen.motorStop(maqueen.Motors.All)
            Turn_Right()
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 30)
            state2 = 10
        }
    } else if (state2 == 10) {
        Line_Tracking()
        if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
            maqueen.motorStop(maqueen.Motors.All)
        }
    } else {
        maqueen.motorStop(maqueen.Motors.All)
    }
})
