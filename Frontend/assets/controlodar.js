//Josue Salomon
//Erick Escoto 

function ConfirmarCompra(){
    console.log('Probasodjasd')
    document.getElementById('detallesCompra').style.display='none'
    document.getElementById('confirmarCompra').style.display='block'
}

function regresarConfirmacion(){
    document.getElementById('detallesCompra').style.display='block'
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
}

function accederLocales(){
    document.getElementById('clientes1').style.display ="flex";
    document.getElementById('clientes2').style.display ="none";
}

function mostrarProducto(){
    document.getElementById('clientes1').style.display ="none";
    document.getElementById('clientes2').style.display ="none";
    document.getElementById('detallesCompra').style.display ="block";
}





















































//parte de josue
function inicioSesion(){
    console.log('hola')
    document.getElementById('inicio-sesion').style.display='none'
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
    document.getElementById('inicio-sesion').style.display='none'
    document.getElementById('registroM').style.display='block'
}

function seRegistroMotorista(){
    alert('Se ha registrado el motorista')
    document.getElementById('inicio-sesion').style.display='block'
    document.getElementById('registroM').style.display='none'
}

function regrearOpcionesMotorista(){
    document.getElementById('ordenes-motoristas').style.display='none'
    document.getElementById('homeM').style.display='block'
}

function entrarPerfil(){
    alert('se esta haciendo la pagina del perfil del motorista')
    document.getElementById('Perfil-motorista').style.display='block'
    document.getElementById('homeM').style.display='none'
}

function salirHomeMotorista(){
    document.getElementById('homeM').style.display='none'
    document.getElementById('inicio-sesion').style.display='block'
}