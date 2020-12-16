let sonar = 0
/**
 * Cutebot with color changing LEDs
 */
basic.forever(function () {
    sonar = cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters)
    if (sonar > 1 && sonar < 30) {
        for (let index = 0; index < 4; index++) {
            music.playTone(880, music.beat(BeatFraction.Sixteenth))
        }
        basic.pause(1000)
        cuteBot.motors(randint(-50, -100), 0)
        basic.pause(500)
    } else {
        cuteBot.moveTime(cuteBot.Direction.forward, 20, 2)
    }
})
