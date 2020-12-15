let x = 1
basic.forever(function () {
    basic.pause(50)
    cuteBot.moveTime(cuteBot.Direction.forward, 20, 0.2)
    cuteBot.motors(25, 10)
    basic.pause(4000)
    cuteBot.moveTime(cuteBot.Direction.forward, 20, 0.19)
    cuteBot.moveTime(cuteBot.Direction.forward, 20, 0.2)
    cuteBot.motors(10, 25)
    basic.pause(4000)
    cuteBot.moveTime(cuteBot.Direction.forward, 20, 0.2)
    if (x) {
        x = 0
        cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0xff0000)
        cuteBot.colorLight(cuteBot.RGBLights.RGB_R, 0xff0000)
    } else {
        cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0x007fff)
        cuteBot.colorLight(cuteBot.RGBLights.RGB_R, 0x007fff)
        x = 1
    }
})
