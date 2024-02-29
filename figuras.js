var area
lado, base, altura , resultado
const pi=3.1416
radio

area=parseInt(prompt("de que figura desearia calcular el area: 1:cuadado  2:triangulo  3:circulo"))
switch (area) {
    case 1:
lado=parseInt(prompt("ingrese el valor d el lado en  cm"))
        resultado=lado*lado
        alert("el area del cuadrado es:"+ resultado+"cm")
        break;
        case 2:
            base=parseInt(prompt("ingrese el valor de la base en cm"))
            altura=parseInt(prompt("ingrese el valor de la altura cm"))
            resultado=(base*altura)/2
            alert("el area del triangulo es:"+ resultado+"cm^2")
            break
            case 3:
                radio=parseInt(prompt("ingrese el valor del radio"))
        resultado=radio*radio*pi
        alert("el area del circulo es:"+ resultado+"cm^2")
    default:
        alert("LA OPCIÓN ESCOGIGA NO ES VALIDA")
        break;
}
/*codigo para encontrar areas*/