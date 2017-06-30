Ext.define('Estudiantes.view.VistaRegistroAlumno',{
	extend: 'Ext.form.Panel',
	xtype: 'vista-registro-alumno',
	requires: [
      'Ext.form.FieldSet',
      'Ext.field.DatePicker'
	 ],
    config: {
        id: 'formAlumno'
    },
    initialize: function(){
        this.callParent(arguments);

        var btnRegistrarAlumno = {
            xtype: 'button',
            ui: 'action',
            id: 'btnRegistrarAlumno',
            name: 'btnRegistrarAlumno',
            text: 'Registrar Alumno(a)',
            handler: this.registrarAlumnoTap,
            scope: this
        };

        var btnLimpiarCampos = {
            xtype: 'button',
            ui: 'action',
            id: 'btnLimpiarCampos',
            name: 'btnLimpiarCampos',
            text: 'Limpiar Campos',
            handler: this.limpiarTap,
        };

        var campoCodigo = {
            xtype: 'textfield',
            id: 'campoCodigo',
            name: 'campoCodigo',
            label: 'Codigo',
            labelAlign: 'top'
        };

        var campoNombres = {
            xtype: 'textfield',
            id: 'campoNombres',
            name: 'campoNombres',
            label: 'Nombre(s)',
            labelAlign: 'top'
        }; 

        var campoApellidos = {
            xtype: 'textfield',
            id: 'campoApellidos',
            name: 'campoApellidos',
            label: 'Apellidos',
            labelAlign: 'top'  
        }; 

        var campoEdad = {
            xtype: 'textfield',
            id: 'campoEdad',
            name: 'campoEdad',
            label: 'Edad',
            labelAlign: 'top'
        };

        var campoNota = {
            xtype: 'textfield',
            id: 'campoNota',
            name: 'campoNota',
            label: 'Nota Final',
            labelAlign: 'top'
        };

        var toolbar = {
            docked: 'top',
            xtype: 'toolbar',
            title: 'Registro De Estudiantes De Sencha Touch'
        };

        this.add([{
             xtype: 'fieldset',
             items: [toolbar, campoCodigo, campoNombres, campoApellidos, campoEdad, campoNota]
          },{
             xtype: 'container',
             padding: 5,
             items: [btnRegistrarAlumno]
          },{
             xtype: 'container',
             padding: 5,
             items: [btnLimpiarCampos]
          }]);
      },
        registrarAlumnoTap: function(){
            this.fireEvent('guardarAlumnoControl', this);
        },
        limpiarTap: function(){
             Ext.getCmp('formAlumno').reset();
        }
});	

