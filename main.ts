input.onPinPressed(TouchPin.P0, function () {
    Probabilidad_Contagio = 0.01
    Probabilidad_Contagio = 1.5
})
input.onButtonPressed(Button.A, function () {
    Probabilidad_Contagio = 0.05
})
input.onGesture(Gesture.Shake, function () {
    Probabilidad_Contagio = 0.1
    Probabilidad_Contagio = 2
})
input.onButtonPressed(Button.AB, function () {
    Probabilidad_Contagio = 0.1
    Probabilidad_Contagio = 1.5
})
input.onButtonPressed(Button.B, function () {
    Probabilidad_Contagio = 0.01
})
let Contagiados = 0
let Probabilidad_Contagio = 0
let susceptibles = 90000
let infectados = 10000
let recuperados = 0
let Tasa_Interación = 2
// 10%
Probabilidad_Contagio = 0.1
basic.forever(function () {
    Contagiados = (infectados * Tasa_Interación * susceptibles * susceptibles * infectados + recuperados) * Probabilidad_Contagio
    basic.showString("\"cont=\"")
    basic.showNumber(Contagiados)
})
