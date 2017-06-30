/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Charts1.view.paciente.VistaRegistroPaciente', {
    extend: 'Ext.container.Container',
    requires: [
        'Charts1.view.paciente.VistaControladorRegistroPaciente',
    ],

    xtype: 'vista-registro-paciente',

    controller: 'vista-controlador-registro-paciente',

    items: [{
        xtype: 'form',
        id: 'formRegistroPaciente',
        title: 'Instituto Mexicano del Seguro Social - Registro del Paciente',
        bodyPadding: 10,
        items: [{
                xtype: 'textfield',
                name: 'campoId',
                id: 'campoId',
                fieldLabel: 'Id',
                allowBlank: false,
                blankText: 'Por favor ingrese su ID!',
                msgTarget: 'under'
            }, {
                xtype: 'textfield',
                name: 'campoNombre',
                id: 'campoNombre',
                fieldLabel: 'Nombre',
                allowBlank: false,
                blankText: 'Por favor ingrese su nombre!',
                msgTarget: 'under'
            }, {
                xtype: 'textfield',
                name: 'campoEdad',
                id: 'campoEdad',
                fieldLabel: 'Edad',
                allowBlank: false,
                blankText: 'Por favor ingrese su edad!',
                msgTarget: 'under'
            }, {
                xtype: 'textfield',
                name: 'campoPeso',
                id: 'campoPeso',
                fieldLabel: 'Peso',
                allowBlank: false,
                blankText: 'Por favor ingrese su peso!',
                msgTarget: 'under'
            },{
                xtype: 'combobox',
                fieldLabel: 'Sintoma',
                name: 'campoSintoma',
                id: 'campoSintoma',
                store: {
                    fields: ['nombre'],
                    data: [{
                        nombre: 'Dolor de estómago'
                    }, {
                        nombre: 'Resfriado'
                    }, {
                        nombre: 'Presión alta'
                    }, {
                        nombre: 'Tos seca/con flemas'
                    }]
                },
                displayField: 'nombre',
                valueField: 'nombre'
            },

            {
                xtype: 'container',
                padding: 5,
                items: [{
                    xtype: 'button',
                    text: 'Registrar',
                    margin: 10,
                    handler: 'btnRegistrarPaciente'
                }, {
                    xtype: 'button',
                    text: 'Limpiar Campos',
                    margin: 10,
                    handler: 'btnLimpiarCampos'
                }]
            }
        ]
    }]
});
