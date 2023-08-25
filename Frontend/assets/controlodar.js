//Josue Salomon
//Erick Escoto 

function ConfirmarCompra(){
    console.log('Probasodjasd')
    document.getElementById('detallesCompra').style.display='none'
    document.getElementById('confirmarCompra').style.display='block'
}

function regresarConfirmacion(){
    document.getElementById('detallesCompra').style.display='flex'
    document.getElementById('confirmarCompra').style.display='none'
}

function inicioSesion(){
    document.getElementById('InicioSesion').style.display='block'
    document.getElementById('Landing-page').style.display='none'
}

function regresoLanding(){
    document.getElementById('InicioSesion').style.display='none'
    document.getElementById('Landing-page').style.display='block'
    document.getElementById('Registro').style.display='none'
}

function RegistroSesion(){
    document.getElementById('InicioSesion').style.display='none'
    document.getElementById('Landing-page').style.display='none'
    document.getElementById('Registro').style.display='flex'

}

function accederTienda(){
    document.getElementById('clientes1').style.display ="none";
    document.getElementById('clientes2').style.display ="flex";
    document.getElementById('clientes2_productos').style.display ="none";
    document.getElementById('detallesCompra').style.display ="none";
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

function mostrarProductosAdmin(){
    document.getElementById('administradores_productos').style.display ="flex";
    document.getElementById('administradores').style.display ="none";
    document.getElementById('adminIndex').style.display ="none";
}

function mostrarEmpresas(){
    document.getElementById('administradores_productos').style.display ="none";
    document.getElementById('administradores').style.display ="flex";
    document.getElementById('adminIndex').style.display ="none";
}

function mostrarMotoristasAdmin(){
    document.getElementById('administradores_productos').style.display ="none";
    document.getElementById('administradores').style.display ="none";
    document.getElementById('adminIndex').style.display ="flex";
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

function regrearOpcionesMotorista(){
    document.getElementById('ordenes-motoristas').style.display='none'
    document.getElementById('homeM').style.display='block'
    document.getElementById('Perfil-motorista').style.display='none'
}

function entrarPerfil(){
    alert('se esta haciendo la pagina del perfil del motorista')
    document.getElementById('Perfil-motorista').style.display='block'
    document.getElementById('homeM').style.display='none'
}

function salirHomeMotorista(){
    document.getElementById('homeM').style.display='none'
    document.getElementById('inicio-sesion-motorista').style.display='block'
}

//Parte login-registro
function registroCliente(){
    alert('Se ha registrado el cliente')
    document.getElementById('RegistroCliente').style.display='none'
    document.getElementById('InicioSesionCliente').style.display='none'
    document.getElementById('Landing-page-clientes').style.display='block'
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