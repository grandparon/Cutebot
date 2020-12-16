/**
 * Cutebot with color changing LEDs
 */
cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0x00ffff)
cuteBot.colorLight(cuteBot.RGBLights.RGB_R, 0x00ffff)
basic.pause(200)
cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0xff8000)
cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0xff8000)
basic.pause(200)
cuteBot.closeheadlights()
basic.forever(function () {
    basic.pause(50)
    cuteBot.moveTime(cuteBot.Direction.forward, 20, 0.2)
    cuteBot.motors(25, 10)
    basic.pause(4000)
    cuteBot.moveTime(cuteBot.Direction.forward, 20, 0.2)
    cuteBot.motors(10, 25)
    basic.pause(4000)
    cuteBot.moveTime(cuteBot.Direction.forward, 20, 0.2)
    cuteBot.moveTime(cuteBot.Direction.forward, 20, 0.19)
})
control.inBackground(function () {
    basic.pause(2000)
    while (true) {
        basic.pause(2000)
        if (input.lightLevel() <= 0) {
            cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0xffff00)
            cuteBot.colorLight(cuteBot.RGBLights.RGB_R, 0xff8000)
        } else {
            cuteBot.closeheadlights()
        }
        basic.pause(100)
    }
})
