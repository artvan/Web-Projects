/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Charts1.view.paciente.VistaListadoPacientes', {
    extend: 'Ext.container.Container',

    xtype: 'vista-listado-pacientes',


    items: [{
        xtype: 'gridpanel',
        id: "tablaPacientes",
        title: 'Listado De Pacientes',
        store: 'Pacientes',
        columns: [{
            text: 'Id',
            dataIndex: 'id',
            flex: 20 / 100
        }, {
            text: 'Nombre',
            dataIndex: 'nombre',
            flex: 20 / 100
        }, {
            text: 'Edad',
            dataIndex: 'edad',
            flex: 20 / 100

        }, {
            text: 'Peso',
            dataIndex: 'peso',
            flex: 20 / 100
        },{
            text: 'Sintoma',
            dataIndex: 'sintoma',
            flex: 20 / 100

        }],
        height: 400
    }]
});
