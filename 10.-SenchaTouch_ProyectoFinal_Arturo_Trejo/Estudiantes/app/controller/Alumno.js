Ext.define('Estudiantes.controller.Alumno',{
	extend: 'Ext.app.Controller',
	config: {
	    refs: {
	       VistaRegistroAlumno: 'vista-registro-alumno'
	    },
	    control: {
	        VistaRegistroAlumno:{
	                guardarAlumnoControl: 'guardarAlumno'	        
	       }
      }
 },
 guardarAlumno: function(){
     var alumno = Ext.create('Estudiantes.model.Alumno',{
         codigo: Ext.getCmp('campoCodigo').getValue(),
         nombres: Ext.getCmp('campoNombres').getValue(),
         apellidos: Ext.getCmp('campoApellidos').getValue(),
         edad: Ext.getCmp('campoEdad').getValue(),
         nota: Ext.getCmp('campoNota').getValue(),
     });

     var alumnosStore = Ext.getStore('Alumnos');
     alumnosStore.add(alumno);
     alumnosStore.sync();
     Ext.Msg.alert('Registro', 'Alumno Registrado Exitosamente!!');
     Ext.getCmp('formAlumno').reset();
  }

});	