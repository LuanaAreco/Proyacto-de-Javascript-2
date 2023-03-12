let productos = [
    {
    nombre: "Azucar",
    peso: "2 kg",
    precio: 149.99,
    },
    {
    nombre: "Yerba",
    peso: "2 kg",
    precio: 49.99,
    },
    {
    nombre: "Harina",
    peso: "2 kg",
    precio: 79.99,
    },
    {
    nombre: "Talco",
    peso: "1 kg",
    precio: 45.00,
    }
  ];

let carrito = []

let seleccion = prompt("Hola, Deseas Comprar algo?")

while (seleccion != "si" && seleccion != "no") {
    alert("Por favor ingrese su respuesta, solo si o no")
    seleccion = prompt("Hola, desea comprar algo?")
}

if (seleccion == "si") {
    alert("Aquí te enseñamos lo disponible")
    let todosLosProductos = productos.map((productos) => productos.nombre + " " + productos.peso + " " + productos.precio + "$")
    alert(todosLosProductos.join(" - "))
} else if (seleccion == "no"){
    alert("Gracias por Visitarnos")
}

while (seleccion != "no"){
    let productos = prompt ("Agrega un producto a tu carrito")
    let precio = 0

    if(productos == "Azucar" || productos == "Yerba" || productos == "Harina" || productos == "Talco"){
        switch(productos){
            case "Azucar":
             peso = "2 kg"
             precio = 149.99
             break
            case "Yerba":
             peso = "2 kg"
             precio = 49.99
             break
            case "Harina":
             peso = "2 kg"
             precio = 79.99
             break
            case "Talco":
             peso = "1 kg"
             precio = 45.00
             break
            default:
             break
        }
        let unidades = parseInt(prompt("Quieres llevar mas unidades? Por favor ingresa un númeto"))

        carrito.push({productos, unidades, precio})
        console.log(carrito)
    } else{
     alert("No Disponemos de ese producto ahora mismo")
    }
 seleccion = prompt("Desea seguir comprando?")

 while(seleccion == "no"){
    alert("Gracias por la compra, hasta pronto!")
    carrito.forEach((carritoFinal) => {
     console.log (` producto: ${carritoFinal.productos}, unidades: ${carritoFinal.unidades},
     total a pagar: ${carritoFinal.unidades * carritoFinal.precio}`)
    })
 break;
 }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0,)
console.log = alert(`el total a pagar por su compra es de: ${total} pesos`)
alert("Gracias Por comprar aquí.")