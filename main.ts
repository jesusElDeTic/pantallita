input.onButtonPressed(Button.A, function () {
    I2C_LCD1602.BacklightOff()
    basic.pause(500)
    I2C_LCD1602.BacklightOn()
    basic.pause(500)
    I2C_LCD1602.ShowString("Hello", 0, 0)
})
I2C_LCD1602.LcdInit(39)
basic.forever(function () {
	
})
