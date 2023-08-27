//Josue Salomon
//Erick Escoto 

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
function mostrarProductos(){
    document.getElementById('empresasAdministradores').style.display ="none";
    document.getElementById('ordenesAdministradores').style.display ="none";
    document.getElementById('productosAdministradores').style.display ="flex";
    document.getElementById('indexAdministradores').style.display ="none";
    document.getElementById('motoristasAdministradores').style.display ="none";
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
}
function mostrarEmpresas(){
    document.getElementById('empresasAdministradores').style.display ="flex";
    document.getElementById('ordenesAdministradores').style.display ="none";
    document.getElementById('productosAdministradores').style.display ="none";
    document.getElementById('indexAdministradores').style.display ="none";
    document.getElementById('motoristasAdministradores').style.display ="none";
}

function mostrarMotoristas(){
    document.getElementById('empresasAdministradores').style.display ="none";
    document.getElementById('ordenesAdministradores').style.display ="none";
    document.getElementById('productosAdministradores').style.display ="none";
    document.getElementById('indexAdministradores').style.display ="none";
    document.getElementById('motoristasAdministradores').style.display ="flex";
}

function mostrarOrdenes(){
    document.getElementById('empresasAdministradores').style.display ="none";
    document.getElementById('ordenesAdministradores').style.display ="flex";
    document.getElementById('productosAdministradores').style.display ="none";
    document.getElementById('indexAdministradores').style.display ="none";
    document.getElementById('motoristasAdministradores').style.display ="none";
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
    <input type="text" placeholder="Nombre" style="border: none; height="20px"">
    </div>
    <div style="width: 25%; text-align: center; margin: 0 2px; display: flex; align-items: center;">
    <input type="text" placeholder="Categoria" style="border: none; height="20px"">
    </div>
    <div style="width: 18%; text-align: center; margin: 0 2px; display: flex; align-items: center;">
    <input type="text" placeholder="Precio" style="border: none; height="20px"">
    </div>
    <div style="width: 18%; text-align: end;margin: 0 4px; display: flex; align-items: center;"></div>
    <div style="width: 7%;; margin-right: 4px; display: flex; justify-content: space-around; align-items: center;">
        <i onclick="confirmarEditarProductoAdmin('${id}')" class="fa-solid fa-check" style="color:#06283D; font-size: 15px;"></i>

    </div>
    `
}

function confirmarEditarProductoAdmin(id){
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

