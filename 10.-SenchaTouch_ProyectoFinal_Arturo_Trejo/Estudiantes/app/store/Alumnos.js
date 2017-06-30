Ext.define('Estudiantes.store.Alumnos' ,{
	extend: 'Ext.data.Store',
	config: {
           autoLoad: true,
           model: 'Estudiantes.model.Alumno'
	}
});	