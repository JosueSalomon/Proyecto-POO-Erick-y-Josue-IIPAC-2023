//Josue Salomon
//Erick Escoto 

//Haciendo cambios de pantalla dentro del motorista
//Cuando inicia sesion
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