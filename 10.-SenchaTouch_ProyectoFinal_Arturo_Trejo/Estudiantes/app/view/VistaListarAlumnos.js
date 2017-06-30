Ext.define('Estudiantes.view.VistaListarAlumnos',{
	extend: 'Ext.Panel',
	xtype: 'vista-listar-alumnos',
	config: {
	    id: 'vista-listar-alumnos',
	    title: 'Lista de Estudiantes',
	    layout: 'fit'
	},
	initialize: function(){
	    this.callParent(arguments);
	    var listaAlumnos = {
	        xtype: 'list',
	        store: Ext.getStore('Alumnos'),
	        itemTpl: '{nombres}',
	        listeners: {
	             itemtap: function(list, index, elemnt, record){
	                  var detalle = '';
	                  detalle += 'Codigo:'+record.get('codigo')+'<br>';
	                  detalle += 'Nombre(s):'+record.get('nombres')+'<br>';
	                  detalle += 'Apellidos:'+record.get('apellidos')+'<br>';
	                  detalle += 'Edad:'+record.get('edad')+'<br>';
	                  detalle += 'Nota Final:'+record.get('nota')+'<br>';
	                  Ext.Msg.alert('Detalle de Alumno', detalle);
	             }
	        }
	    };
	    var toolbar = {
	        docked: 'top',
	        xtype: 'toolbar',
	        title: 'Lista de Estudiantes'
	    };
	    this.add([toolbar,listaAlumnos]);
	},
	 volverInicio: function(){

	 }
});	