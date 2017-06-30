var RouterPrincipal = Backbone.Router.extend({
	initialize: function(el){
		this.clientes = new Clientes();
		this.clientes.fetch();
		this.vistaInicio = new VistaInicio();
		this.vistaRegistroCliente = new VistaRegistroCliente();
		this.vistaListadoClientes = new VistaListadoClientes({
			collection: this.clientes
		});
	},
	routes: {
		"": "inicio",
		"registrarCliente": "mostrarRegistrarCliente",
		"listarClientes": "mostrarListadoClientes",
		"mostrarCliente/:idCliente" : "mostrarCliente",
		"eliminarCliente/:idCliente" : "eliminarCliente"
	},
	inicio: function(){
		this.vistaInicio.render();
	},
	mostrarRegistrarCliente: function(){
		this.vistaRegistroCliente.render();
		$("#id").val(cont_id);

	},
	mostrarListadoClientes: function(){
		this.vistaListadoClientes.render();

	},
	mostrarCliente: function(idCliente){
		var cliente = this.vistaListadoClientes.collection.findWhere({
			id: idCliente
		});

		$("#detalleId").val(cliente.get('id'));
		$("#detalleNombre").val(cliente.get('nombre'));
		$("#detalleApellido").val(cliente.get('apellido'));
		$("#detalleEdad").val(cliente.get('edad'));
		$("#detalleTelefono").val(cliente.get('telefono'));
		$("#detalleEmail").val(cliente.get('email'));
		$("#modalMostrarCliente").modal('show');

	},
	eliminarCliente: function(idCliente){

		var cliente = this.vistaListadoClientes.collection.findWhere({
			id: idCliente
		});

		var Nombre = cliente.get('nombre');

		var delCliente = confirm("¿Seguro quiere eliminar al cliente " + Nombre + " ?");

        if(delCliente == true){
            this.vistaListadoClientes.collection.remove(idCliente);
			this.vistaListadoClientes.render();
        }else{
        	this.vistaListadoClientes.render();
        }

        this.vistaListadoClientes.render();

	}
});


