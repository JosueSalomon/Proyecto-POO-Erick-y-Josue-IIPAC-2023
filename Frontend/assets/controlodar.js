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