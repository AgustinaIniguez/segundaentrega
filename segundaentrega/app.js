
const productos = [
    { nombre: "Remera oficial", talle: "XL", color: "Negro", precio: 4500, genero: "Mujer" },
    { nombre: "Remera Tour 2017", talle: "L", color: "Lila", precio: 4200, genero: "Mujer" },
    { nombre: "Remera Tour 2022", talle: "M", color: "Blanco", precio: 3900, genero: "Mujer" },
    { nombre: "Remera Tour 2023", talle: "S", color: "Rosa", precio: 2800, genero: "Mujer" },

];

let carrito = [];

let seleccion = prompt("Bienvenido, ¿desea iniciar su compra? si/no")

while (seleccion != "si" && seleccion != "no") {
    alert("Ingresar si/no")
    seleccion = prompt("¿Desea realizar su compra? si/no");
}

if (seleccion == "si") {
    alert("Nuestra lista de productos")
    let todosLosProductos = productos.map(
        (producto) => producto.nombre + " "+ "talle: " + producto.talle + " " + " color : " + producto.color + " " + producto.precio + "$"
    );
    alert(todosLosProductos.join(" - "))
} else if (seleccion == "no") {
    alert("Muchas gracias, hasta pronto!")
}

while (seleccion != "no") {
    let producto = prompt("Agrega un producto al carrito")
    let precio = 0

    if (producto == "Remera oficial" || producto == "Remera Tour 2017" || producto == "Remera Tour 2022" || producto == "Remera Tour 2023") {
        switch (producto) {
            case "Remera oficial":
                precio = 4500;
                break;
            case "Remera Tour 2017":
                precio = 4200;
                break;
            case "Remera Tour 2022":
                precio = 3900;
                break;
            case "Remera Tour 2023":
                precio = 2800;
                break;
        }
        let unidades = parseInt(prompt("Cuantas unidades quiere llevar"))

        carrito.push({ producto, unidades, precio })
        console.log(carrito)

    } else {
        alert("No disponemos de ese producto en este momento")
    }

    seleccion = prompt("¿Desea seguir comprando?")

    while (seleccion === "no") {
        alert("Gracias por la compra!")
        carrito.forEach((carritoFinal) => {
            console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, 
            total a pagar por producto ${carritoFinal.unidades + carritoFinal.precio}`)
        })

        break;

    }
}


const total = carrito.reduce((acc,el) => acc + el.precio * el.unidades, 0)
console.log(`el total a pagar por su compra es: ${total}`)