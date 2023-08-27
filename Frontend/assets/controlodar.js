//Josue Salomon
//Erick Escoto 

var imgLibro = "https://i.pinimg.com/originals/a8/c2/16/a8c216198a1658bce4c0f224ed8ca151.png"

function ConfirmarCompra(){
    document.getElementById('detallesCompra').style.display='none'
    document.getElementById('confirmarCompra').style.display='block'
}

function regresarConfirmacion(){
    document.getElementById('detallesCompra').style.display='flex'
    document.getElementById('confirmarCompra').style.display='none'
}

function inicioSesion(){
    document.getElementById('InicioSesionCliente').style.display='block'
    document.getElementById('Landing-page-clientes').style.display='none'
}

function regresoLanding(){
    document.getElementById('InicioSesionCliente').style.display='none'
    document.getElementById('Landing-page-clientes').style.display='block'
    document.getElementById('RegistroCliente').style.display='none'
}

function RegistroSesion(){
    document.getElementById('InicioSesionCliente').style.display='none'
    document.getElementById('Landing-page-clientes').style.display='none'
    document.getElementById('RegistroCliente').style.display='block'

}

function accederTienda(){
    document.getElementById('clientes1').style.display ="none";
    document.getElementById('clientes2').style.display ="flex";
    document.getElementById('clientes2_productos').style.display ="none";
    document.getElementById('detallesCompra').style.display ="none";
    document.getElementById('Factura').style.display ="none";
    document.getElementById('confirmarCompra').style.display='none'
}

function mostrarCarrito(){
    document.getElementById('carritoDeCompras').style.display ="flex";
}

function escondercarrito(){
    document.getElementById('carritoDeCompras').style.display ="none";
}

function accederLocales(){
    document.getElementById('clientes1').style.display ="flex";
    document.getElementById('clientes2').style.display ="none";
    document.getElementById('clientes2_productos').style.display ="none";
}

function mostrarProducto(){
    document.getElementById('clientes1').style.display ="none";
    document.getElementById('clientes2').style.display ="none";
    document.getElementById('clientes2_productos').style.display ="none";
    document.getElementById('detallesCompra').style.display ="flex";
}

function mostrarProductoCategorias(){
    document.getElementById('clientes1').style.display ="none";
    document.getElementById('clientes2').style.display ="none";
    document.getElementById('clientes2_productos').style.display ="flex";
}

function mostrarFactura(){
    document.getElementById('Factura').style.display ="flex";
    document.getElementById('clientes1').style.display ="none";
    document.getElementById('clientes2').style.display ="none";
    document.getElementById('clientes2_productos').style.display ="none";
    document.getElementById('detallesCompra').style.display ="none";
    document.getElementById('carritoDeCompras').style.display ="none";
    document.getElementById('confirmarCompra').style.display='none'

}
async function mostrarProductos(id){
    document.getElementById('empresasAdministradores').style.display ="none";
    document.getElementById('ordenesAdministradores').style.display ="none";
    document.getElementById('productosAdministradores').style.display ="flex";
    document.getElementById('indexAdministradores').style.display ="none";
    document.getElementById('motoristasAdministradores').style.display ="none";


    localStorage.setItem('idEmpresa', id)
    await ObtenerUnaLibreria(id);


}

function renderizadarProductosEmpresa(){

    document.getElementById('listaProductosEmpresasAdmin').innerHTML=""
    libreria.resultado.Libros.forEach(libro => {
    document.getElementById('listaProductosEmpresasAdmin').innerHTML+=`
    <div class="divHistorialEntrega" id="${libro._id}" >
    <div style=" width: 7%; overflow: hidden;" ><img style="height: 100%; object-fit: contain;" src="${libro.imagen}" alt=""></div>
    <div style=" width: 25%; margin: 0px; display: flex; align-items: center; overflow: hidden;"><h4 style="margin: 0 2px;">${libro.nombre}</h4></div>
    <div style="width: 25%; text-align: center; margin: 0 2px; display: flex; align-items: center;"><h4>${libro.categoria}</h4></div>
    <div style="width: 18%; text-align: center; margin: 0 2px; display: flex; align-items: center;"><h4>${libro.precio}$</h4></div>
    <div style="width: 18%; text-align: end;margin: 0 4px; display: flex; align-items: center;"></div>
    <div style="width: 7%;; margin-right: 4px; display: flex; justify-content: space-around; align-items: center;">
        <i onclick="editarProductoAdmin('${libro._id}')" class="fa-solid fa-pen" style="color:#06283D; font-size: 15px;"></i>
        <i onclick="borrarLibroAdmin('${libro._id}')" class="fa-solid fa-trash" style="color:#06283D; font-size: 15px;"></i>
    </div>
    </div>
`
    });

}



function mostrarInfoPedidoAdmin(id){
    if (document.getElementById(id).style.display ==`flex`) {
        document.getElementById(id).style.display =`none`;
    }
    else document.getElementById(id).style.display =`flex`;
}

function mostrarIndexAdmin(){
    document.getElementById('empresasAdministradores').style.display ="none";
    document.getElementById('ordenesAdministradores').style.display ="none";
    document.getElementById('productosAdministradores').style.display ="none";
    document.getElementById('indexAdministradores').style.display ="flex";
    document.getElementById('motoristasAdministradores').style.display ="none";
    document.getElementById('loginAdministradores').style.display ="none";
    document.getElementById('administradores').style.display ="none";
    document.getElementById('administradores_productos').style.display ="none";
}
function mostrarEmpresas(){
    document.getElementById('empresasAdministradores').style.display ="flex";
    document.getElementById('ordenesAdministradores').style.display ="none";
    document.getElementById('productosAdministradores').style.display ="none";
    document.getElementById('indexAdministradores').style.display ="none";
    document.getElementById('motoristasAdministradores').style.display ="none";
    document.getElementById('administradores').style.display ="none";
    document.getElementById('administradores_productos').style.display ="none";
}

function mostrarMotoristas(){
    document.getElementById('empresasAdministradores').style.display ="none";
    document.getElementById('ordenesAdministradores').style.display ="none";
    document.getElementById('productosAdministradores').style.display ="none";
    document.getElementById('indexAdministradores').style.display ="none";
    document.getElementById('motoristasAdministradores').style.display ="flex";
    document.getElementById('administradores').style.display ="none";
    document.getElementById('administradores_productos').style.display ="none";
}

function mostrarOrdenes(){
    document.getElementById('empresasAdministradores').style.display ="none";
    document.getElementById('ordenesAdministradores').style.display ="flex";
    document.getElementById('productosAdministradores').style.display ="none";
    document.getElementById('indexAdministradores').style.display ="none";
    document.getElementById('motoristasAdministradores').style.display ="none";
    document.getElementById('administradores').style.display ="none";
    document.getElementById('administradores_productos').style.display ="none";
}
function editarmotoristaAdmin(id){
    document.getElementById(id).innerHTML =`
    <div style=" width: 7%; display: inline-block; border-radius: 50%; overflow: hidden;" ><img style="height: 100%; object-fit: contain;" src="/Frontend/assets/img/adminJosue.jpg" alt=""></div>
    <div style=" width: 25%; margin: 0px; display: flex; align-items: center; overflow: hidden;"><h4 style="margin: 0 2px;">Josue Isac Salomon Landa</h4></div>
    <div style="width: 18%; text-align: center; margin: 0 2px; display: flex; align-items: center;"><h4>AAA-0101</h4></div>
    <div style="width: 21%; text-align: center; margin: 0 2px; display: flex; align-items: center;"><h4>65</h4></div>
    <div style="width: 18%; text-align: end;margin: 0 4px; display: flex; align-items: center;">
        <select id="opcionesEstadoAdmin" style="border: none; height:40%; width: 65%; font-family: 'Ubuntu'; font-size: 15px; border-radius: 10px;">
            <option value=true>Aprobado</option>
            <option value=false>En espera</option>
        </select>
    </div>
    <div style="width: 11%;; margin-right: 4px; display: flex; justify-content: space-evenly; align-items: center;">
        <i onclick="confirmareditarmotoristaAdmin('${id}')" class="fa-solid fa-check" style="color:#06283D; font-size: 15px;"></i>
        <i class="fa-solid fa-trash" style="color:#06283D; font-size: 15px;"></i>
    </div>
    `

}

function confirmareditarmotoristaAdmin(id){
    estado=document.getElementById('opcionesEstadoAdmin').value;
    console.log(estado)
    document.getElementById(id).innerHTML =`
    <div style=" width: 7%; display: inline-block; border-radius: 50%; overflow: hidden;" ><img style="height: 100%; object-fit: contain;" src="/Frontend/assets/img/adminJosue.jpg" alt=""></div>
    <div style=" width: 25%; margin: 0px; display: flex; align-items: center; overflow: hidden;"><h4 style="margin: 0 2px;">Josue Isac Salomon Landa</h4></div>
    <div style="width: 18%; text-align: center; margin: 0 2px; display: flex; align-items: center;"><h4>AAA-0101</h4></div>
    <div style="width: 21%; text-align: center; margin: 0 2px; display: flex; align-items: center;"><h4>65</h4></div>
    <div style="width: 18%; text-align: end;margin: 0 4px; display: flex; align-items: center;"><h4>Aprobado</h4></div>
    <div style="width: 11%;; margin-right: 4px; display: flex; justify-content: space-evenly; align-items: center;">
        <i onclick="editarmotoristaAdmin('${id}')" class="fa-solid fa-pen" style="color:#06283D; font-size: 15px;"></i>
        <!-- <i class="fa-solid fa-trash" style="color:#06283D; font-size: 15px;"></i> -->
    </div>
    `

}

function editarProductoAdmin(id){

    document.getElementById(id).innerHTML=`
    <div style=" width: 7%;" ><img style="height: 100%; object-fit: contain;" src="/Frontend/assets/img/libro.png" alt=""></div>
    <div style=" width: 25%; margin: 0px; display: flex; align-items: center; overflow: hidden;"><h4 style="margin: 0 2px;">
    <input id="LibroNIdMongo" type="text" placeholder="Nombre" style="border: none; height:30px;margin-left:7px">
    </div>
    <div style="width: 25%; text-align: center; margin: 0 2px; display: flex; align-items: center;">
    <input id="LibroCIdMongo" type="text" placeholder="Categoria" style="border: none; height:30px;">
    </div>
    <div style="width: 18%; text-align: center; margin: 0 2px; display: flex; align-items: center;">
    <input id="LibroPIdMongo" type="text" placeholder="Precio" style="border: none; height:30px;">
    </div>
    <div style="width: 18%; text-align: end;margin: 0 4px; display: flex; align-items: center;"></div>
    <div style="width: 7%;; margin-right: 4px; display: flex; justify-content: space-around; align-items: center;">
        <i onclick="confirmarEditarProductoAdmin('${id}')" class="fa-solid fa-check" style="color:#06283D; font-size: 15px;"></i>

    </div>
    `
}

function confirmarEditarProductoAdmin(id){
    let Nombre = document.getElementById('LibroNIdMongo').value;
    let Categoria = document.getElementById('LibroCIdMongo').value;
    let Precio = document.getElementById('LibroPIdMongo').value;

    
    libroActualizado = {
        _id: id,
        nombre: document.getElementById('LibroNIdMongo').value,
        imagen: imgLibro,
        precio: document.getElementById('LibroPIdMongo').value,
        categoria:document.getElementById('LibroCIdMongo').value,
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, qui?"
    }

    actualizarLibroFetch(libroActualizado);
    console.log(Nombre,Categoria,Precio)


    document.getElementById(id).innerHTML=`
    <div style=" width: 7%;" ><img style="height: 100%; object-fit: contain;" src="/Frontend/assets/img/libro.png" alt=""></div>
    <div style=" width: 25%; margin: 0px; display: flex; align-items: center; overflow: hidden;"><h4 style="margin: 0 2px;">NombreLibro</h4></div>
    <div style="width: 25%; text-align: center; margin: 0 2px; display: flex; align-items: center;"><h4>Categoria</h4></div>
    <div style="width: 18%; text-align: center; margin: 0 2px; display: flex; align-items: center;"><h4>Precio$</h4></div>
    <div style="width: 18%; text-align: end;margin: 0 4px; display: flex; align-items: center;"></div>
    <div style="width: 7%;; margin-right: 4px; display: flex; justify-content: space-around; align-items: center;">
        <i onclick="editarProductoAdmin('${id}')" class="fa-solid fa-pen" style="color:#06283D; font-size: 15px;"></i>
        <i onclick="" class="fa-solid fa-trash" style="color:#06283D; font-size: 15px;"></i>
    </div>
    `
}



//parte de josue
function inicioSesionMotorista(){
    console.log('hola')
    document.getElementById('inicio-sesion-motorista').style.display='none'
    document.getElementById('homeM').style.display='block'
}

function verOrdenes(){
    document.getElementById('homeM').style.display='none'
    document.getElementById('ordenes-motoristas').style.display='block'
}

function verDetalleOrden(){
    document.getElementById('ordenes-motoristas').style.display='none'
    document.getElementById('vista-ordenes').style.display='block'
}

function regrearVerOrdenes(){
    document.getElementById('ordenes-motoristas').style.display='block'
    document.getElementById('vista-ordenes').style.display='none'
}

function registrarse(){
    document.getElementById('inicio-sesion-motorista').style.display='none'
    document.getElementById('registroM').style.display='block'
}

function seRegistroMotorista(){
    alert('Se ha registrado el motorista')
    document.getElementById('inicio-sesion-motorista').style.display='block'
    document.getElementById('registroM').style.display='none'
}

function mostralHistorialMoto(){
    document.getElementById('historialMotorista').style.display='flex'
    document.getElementById('perfilMotorista').style.display='none'
}

function regrearOpcionesMotorista(){
    document.getElementById('ordenes-motoristas').style.display='none'
    document.getElementById('homeM').style.display='block'
    document.getElementById('perfilMotorista').style.display='none'
}

function entrarPerfil(){
    // alert('se esta haciendo la pagina del perfil del motorista')
    document.getElementById('perfilMotorista').style.display='flex'
    document.getElementById('homeM').style.display='none'
    document.getElementById('historialMotorista').style.display='none'
    
}

function salirHomeMotorista(){
    document.getElementById('homeM').style.display='none'
    document.getElementById('inicio-sesion-motorista').style.display='block'
}

//Parte login-registro
async function registroCliente(){
    let contrasena = document.getElementById('inputContrasena1').value;
    let confirmarContrasena = document.getElementById('inputConfirmarContrasena').value;

    console.log(contrasena)
    console.log(confirmarContrasena)
    if (contrasena !== confirmarContrasena) {
        // Mostrar un mensaje de error al usuario o realizar alguna acción apropiada
        console.log("prueba");
    
        return; // Detener la ejecución si las contraseñas no coinciden
    }

    let usuario = {
        "nombre": document.getElementById('inputnombre').value,
        "correo": document.getElementById('inputemail').value,
        "contrasena": contrasena,
        "telefono": document.getElementById('inputtelefono').value,
        "img": "https://mx.web.img3.acsta.net/c_310_420/pictures/16/05/17/17/28/208580.jpg",
        "carrito": []
    };
    
    registrarUsuarioFetch(usuario);
}

function IngresarInicioSesionClientes(){
    document.getElementById('Landing-page-clientes').style.display='none'
    document.getElementById('InicioSesionCliente').style.display='block'
}

function IngresarRegistroClientes(){
    document.getElementById('Landing-page-clientes').style.display='none'
    document.getElementById('RegistroCliente').style.display='block'
}

function regresarInicioSesion(){
    document.getElementById('InicioSesionCliente').style.display='none'
    document.getElementById('Landing-page-clientes').style.display='block'
}

function regresarRegistroCliente(){
    document.getElementById('Landing-page-clientes').style.display='block'
    document.getElementById('RegistroCliente').style.display='none'
}

//Administracion Renderizado
const loginAdminFetch = async (persona) => {
    const respuesta = await fetch("http://localhost:1000/administrador/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(persona)
    });

    adminGuardado = await respuesta.json();
    console.log("usuario Guardado", adminGuardado);
    if (adminGuardado.status==true) {
        mostrarIndexAdmin()
        renderizadarAdmin()
    }


};

const crearEmpresaFetch = async (empresa) => {
    const respuesta = await fetch("http://localhost:1000/administrador/nuevaEmpresa", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(empresa)
    });

    empresaCreada = await respuesta.json();
    console.log("empresa Nueva", empresaCreada);
};


const ObtenerEmpresasFetch = async () => {

    const respuesta = await fetch(`http://localhost:1000/administrador/`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
    });

    empresas = await respuesta.json();
    console.log("empresas obtenidas", empresas)
    renderizarEmpresas()
    //renderizarEmpresasClientes()

};

ObtenerEmpresasFetch();

const ObtenerUnaLibreria = async (id) => {

    const respuesta = await fetch(`http://localhost:1000/administrador/${id}/librosEmpresa`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
    });

    libreria = await respuesta.json();
    console.log("libreria de la empresa", libreria)

    renderizadarProductosEmpresa()


};

const mandarLibroFetch = async (libro) => {
    const respuesta = await fetch(`http://localhost:1000/administrador/${localStorage.getItem('idEmpresa')}/nuevoProducto`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(libro)
    });

    libroEnviado = await respuesta.json();
    console.log("libro enviado", libroEnviado);
    ObtenerUnaLibreria(localStorage.getItem('idEmpresa'))
};

async function verificarLoginAdmin(){
    document.getElementById('inputlogin1').value
    document.getElementById('inputlogin2').value
    let persona = {
        correo  :document.getElementById('inputlogin1').value,
        contrasena:document.getElementById('inputlogin2').value,
    }

    await loginAdminFetch(persona)

}

async function añadirEmpresaColeccion() {

    let imgEmpresa = "https://cdn-icons-png.flaticon.com/512/1916/1916320.png"

        let empresa = {
        nombre: document.getElementById('admin_nombreEmpresa').value,
        img: imgEmpresa,
        Libros: [],
        review: parseInt(document.getElementById('admin_paginaEmpresa').value)
    }

    await crearEmpresaFetch(empresa)
    await ObtenerEmpresasFetch()
}

async function agregarEmpresaAdmin(){
    document.getElementById('empresasAdministradores').style.display ="none";
    document.getElementById('ordenesAdministradores').style.display ="none";
    document.getElementById('productosAdministradores').style.display ="none";
    document.getElementById('indexAdministradores').style.display ="none";
    document.getElementById('motoristasAdministradores').style.display ="none";
    document.getElementById('loginAdministradores').style.display ="none";
    document.getElementById('administradores').style.display ="flex";


}

const BorrarEmpresasFetch = async (id) => {

    const respuesta = await fetch(`http://localhost:1000/administrador/${id}/borrarEmpresa`, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json'
        }
    });

    empresaborrada = await respuesta.json();
    console.log("empresas borrada", empresaborrada)
    ObtenerEmpresasFetch();
};

const actualizarLibroFetch = async (libroNvo) => {
    const respuesta = await fetch(`http://localhost:1000/administrador/${localStorage.getItem('idEmpresa')}/libroActualizarEmpresa`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(libroNvo)
    });

    libroActualizadoCreado = await respuesta.json();
    ObtenerUnaLibreria(localStorage.getItem('idEmpresa'))

    console.log("libro actualizado",libroActualizadoCreado);
};

const borrarLibrodeEmpresaFetch = async (libro) => {
    const respuesta = await fetch(`http://localhost:1000/administrador/${localStorage.getItem('idEmpresa')}/borrarLibroDeEmpresa`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(libro)
    });

    libroBorrado = await respuesta.json();
    ObtenerUnaLibreria(localStorage.getItem('idEmpresa'))

    console.log("libro borrado",libroBorrado);
};


const ObtenerMotoristasFetch = async () => {

    const respuesta = await fetch(`http://localhost:1000/motorista/`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
    });

    motoristas = await respuesta.json();
    console.log("motoristas", motoristas)

    renderizarMotoristas()

};

ObtenerMotoristasFetch()

const aprobarMotoristaFetch = async (id) => {
    const respuesta = await fetch(`http://localhost:1000/administrador/${id}/motoristaAprobar`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
    });

    motoristaTrue = await respuesta.json();
    console.log("motoristaCambio",motoristaTrue);
    ObtenerMotoristasFetch()

};

const desaprobarMotoristaFetch = async (id) => {
    const respuesta = await fetch(`http://localhost:1000/administrador/${id}/motoristaDesAprobar`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
    });

    motoristaFalse = await respuesta.json();
    console.log("motoristaCambio",motoristaFalse);
    ObtenerMotoristasFetch()

};

const obtenerPedidosFetch = async () => {
    let respuesta = await fetch("http://localhost:1000/pedido/",
    {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    }
    );
    pedidos = await respuesta.json();
    console.log("Estos son los usuarios",pedidos);
    
    renderizarPedidos()
  }

  obtenerPedidosFetch()

function crearLibro(){
    document.getElementById('empresasAdministradores').style.display ="none";
    document.getElementById('ordenesAdministradores').style.display ="none";
    document.getElementById('productosAdministradores').style.display ="none";
    document.getElementById('indexAdministradores').style.display ="none";
    document.getElementById('motoristasAdministradores').style.display ="none";
    document.getElementById('loginAdministradores').style.display ="none";
    document.getElementById('administradores').style.display ="none";
    document.getElementById('administradores_productos').style.display ="flex";

}

function mandarLibroAEmpresa(){

    document.getElementById('admin_nombreEmpresa').value
    let libro = {
        nombre: document.getElementById('admin_nombreEmpresaProducto').value,
        imagen: imgLibro,
        precio: document.getElementById('admin_PrecioProduco').value,
        categoria: document.getElementById('admin_tipoProducto').value,
        descripcion: document.getElementById('admin_descripcionProducto').value
    }
    mandarLibroFetch(libro);
}

function renderizarEmpresas(){


    console.log('entrando a la funcion de renderizado de empresas')

    let moduloEmpresa = ""

    empresas.resultado.forEach(empresax => {
        moduloEmpresa +=`
        <div class="tiendax">
        <div class="tiendax_img" onclick="mostrarProductos('${empresax._id}')"><img src="${empresax.img}" alt="tiendax" class="img_tienda"></div>
        <div class="tiendax_nombre" style="display: flex; width: 100%; justify-content: center;">
            <h3 onclick="mostrarProductos('${empresax._id}')" style="margin: 0; color: aliceblue; width: 80%; margin-left: 40%;">${empresax.nombre}</h3>
            <i onclick="borrarEmpresaAdmin('${empresax._id}')" class="fa-solid fa-trash" style="color:#06283D; font-size: 15px; width: 20%;"></i>
        </div>        
    </div>
        `
    });


    document.getElementById('empresasModeloAdminEmpresas').innerHTML=`
    <div class="tiendax" onclick="agregarEmpresaAdmin()">
        <div class="tiendax_img" ><i onclick="" class="fa-solid fa-plus" style="color:#06283d83; font-size: 160px; width: 20%;"></i></div>      
    </div>
    ${moduloEmpresa}
    `
}

function borrarEmpresaAdmin(id){
    BorrarEmpresasFetch(id);
}

function borrarLibroAdmin(id){
    let libroABorrar = {
        _id: id
    }
    borrarLibrodeEmpresaFetch(libroABorrar)
}

function renderizarMotoristas(){

    let estado = "En espera";
    document.getElementById('listaMotoristasAdmin').innerHTML="";
motoristas.resultado.forEach(motoristax => {
    estado = "En espera";
    if (motoristax.estado) {
        estado="Aprobado"
    }
    document.getElementById('listaMotoristasAdmin').innerHTML+=`
    <div class="divHistorialEntrega" id="${motoristax._id}" style="justify-content: left;">
    <div style=" width: 7%; display: inline-block; border-radius: 50%; overflow: hidden;" ><img style="height: 100%; object-fit: contain;" src="${motoristax.img}" alt=""></div>
    <div style=" width: 25%; margin: 0px; display: flex; align-items: center; overflow: hidden;"><h4 style="margin: 0 2px;">${motoristax.nombre}</h4></div>
    <div style="width: 18%; text-align: center; margin: 0 2px; display: flex; align-items: center;"><h4>${motoristax.placa}</h4></div>
    <div style="width: 21%; text-align: center; margin: 0 2px; display: flex; align-items: center;"><h4>${motoristax.pedidosEntregados.length}</h4></div>
    <div style="width: 18%; text-align: end;margin: 0 4px; display: flex; align-items: center;"><h4>${estado}</h4></div>
    <div style="width: 11%;; margin-right: 4px; display: flex; justify-content: space-evenly; align-items: center;">
        <i onclick="aprobarMotorista('${motoristax._id}')" class="fa-solid fa-check" style="color:#06283D; font-size: 15px;"></i>
        <i onclick="desaprobarMotorista('${motoristax._id}')" class="fa-solid fa-x" style="color:#06283D; font-size: 15px;"></i>
    </div>
    </div>
`
});

}

function aprobarMotorista(idMotorista){

    aprobarMotoristaFetch(idMotorista)
}

function desaprobarMotorista(idMotorista){

    desaprobarMotoristaFetch(idMotorista)
}

function renderizarPedidos(){
    document.getElementById('listaOrdenesAdmin').innerHTML=""
    pedidos.resultado.forEach(pedidox => {
        document.getElementById('listaOrdenesAdmin').innerHTML+=`
        <div class="ordenAdminModel" onclick="mostrarInfoPedidoAdmin('${pedidox._id}')">
        <div class="divHistorialEntrega" style="width: 100%; box-shadow: none;">
            <div style=" width: 32%; margin: 0px; display: flex; align-items: center; overflow: hidden;"><h4 style="margin: 0 0 0 15px;">${pedidox.direccion}</h4></div>
            <div style="width: 25%; text-align: center; margin: 0 2px; display: flex; align-items: center;"><h4>${pedidox.nombreCliente}</h4></div>
            <div style="width: 18%; text-align: center; margin: 0 2px; display: flex; align-items: center;"><h4>${pedidox.precio}$</h4></div>
            <div style="width: 18%; text-align: end;margin: 0 4px; display: flex; align-items: center;"><h4>${pedidox.fecha}</h4></div>
            <div style="width: 7%;; margin-right: 4px; display: flex; justify-content: space-around; align-items: center;">
                <i class="fa-solid fa-pen" style="color:#06283D; font-size: 15px;"></i>
            </div>
    
    
        </div>
    
        <div class="infoPedidoAdmin" id="${pedidox._id}" style="width: 100%; display: none;">
            <div style="padding-left: 10px ;"><h4 style="margin: 0 20px;">Telefono: ${pedidox.telefono}</h4></div>
        </div>
        
        `
    });

}

function renderizadarAdmin(){

    console.log('AdminGuardado a renderizar', adminGuardado)

    // document.getElementById('foto_contenedor').innerHTML=`
    // <img src="${adminGuardado.usuario.img}" alt="Josue" id="adminJosue">

    // `
    
// `    document.getElementsByClassName('nombreAdminitrador').innerHTML=`
//     ${adminGuardado.usuario.nombre}
//     ``

    // Obtén todas las etiquetas con la clase especificada
    var elementos = document.getElementsByClassName('nombreAdminitrador');

// Itera a través de los elementos encontrados
    for (var i = 0; i < elementos.length; i++) {
    // Modifica el contenido interno de cada elemento
    elementos[i].innerHTML = `${adminGuardado.usuario.nombre}`;
    }

        // Obtén todas las etiquetas con la clase especificada
        var elementos = document.getElementsByClassName('fotoAdministrador');

        // Itera a través de los elementos encontrados
            for (var i = 0; i < elementos.length; i++) {
            // Modifica el contenido interno de cada elemento
            elementos[i].innerHTML = `<img src="${adminGuardado.usuario.img}" alt="Josue" id="adminJosue">`;
            }


    // document.getElementsByClassName('fotoAdministrador').innerHTML=`
    // <img src="${adminGuardado.usuario.img}" alt="Josue" id="adminJosue">

    // `
}
























































































































































































































































































































































































































































































































































//Parte de Josue
//Parte del cliente



const registrarUsuarioFetch = async (usuario) => {
    const respuesta = await fetch(`http://localhost:1000/usuario/registo`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(usuario)
    });

    usuarioRegistrado = await respuesta.json();
    console.log("Usuario registrado", usuarioRegistrado);
    alert('Se ha registrado el cliente')
    document.getElementById('RegistroCliente').style.display='none'
    document.getElementById('InicioSesionCliente').style.display='none'
    document.getElementById('Landing-page-clientes').style.display='block'
};

async function verificarLoginUsuario(){
    document.getElementById('inputCorreo').value
    document.getElementById('inputContrasena').value
    let usuario = {
        correo  :document.getElementById('inputCorreo').value,
        contrasena:document.getElementById('inputContrasena').value,
    }

    await loginUsuarioFetch(usuario)

}

const loginUsuarioFetch = async (usuario) => {
    const respuesta = await fetch("http://localhost:1000/usuario/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(usuario)
    });

    usuarioGuardado = await respuesta.json();
    console.log("usuario Guardado", usuarioGuardado);
    if (usuarioGuardado.status==true) {
        window.location.href = '/Frontend/clientes.html'
        alert('Acceso concedido')
        let idmongo = usuarioGuardado._id
        localStorage.setItem("UsuarioIngresado",JSON.stringify(usuarioGuardado))
        console.log(localStorage.getItem("UsuarioIngresado"))
        console.log(idmongo)
    }else{
        alert('credenciales incorrectas')
    }
    
};


function renderizarEmpresasClientes(){
    console.log('Ahahahha')
    document.getElementById('tiendas').innerHTML=''
    empresasparaClientes.resultado.forEach(function(empresa){
        document.getElementById('tiendas').innerHTML+=
        `
        <div class="tiendax" onclick="accederTienda('${empresa._id}')">
        <div class="tiendax_img" ><img src="${empresa.img}" alt="tiendax" class="img_tienda"></div>
        <div class="tiendax_nombre"><h3 style="margin: 0; color: aliceblue;">${empresa.nombre}</h3></div>        
        </div>
        `
    })
}

const ObtenerEmpresasParaTiendaFetch = async () => {

    const respuesta = await fetch(`http://localhost:1000/administrador/`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
    });

    empresasparaClientes = await respuesta.json();
    console.log("empresas obtenidas estas son otrass", empresasparaClientes)
    renderizarEmpresasClientes()

};

ObtenerEmpresasParaTiendaFetch()