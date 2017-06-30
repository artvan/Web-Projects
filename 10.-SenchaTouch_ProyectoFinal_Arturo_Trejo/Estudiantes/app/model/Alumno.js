Ext.define('Estudiantes.model.Alumno' ,{
	extend: 'Ext.data.Model',
	config: {
	    fields: [
          { 
            name: 'codigo', type: 'string'
          },
          {
            name: 'nombres', type: 'string'
          },
          {
            name: 'apellidos', type: 'string'
          },
          {
            name: 'edad', type: 'string'
          },
          {
            name: 'nota', type: 'string'
          }
	    ]
	}
});