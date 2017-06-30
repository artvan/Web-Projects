/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Charts1.view.paciente.VistaReporte1', {
    extend: 'Ext.container.Container',

    xtype: 'vista-reporte1',


       items: [{
            xtype: 'panel',
            items:[{

                xtype: 'panel',
                id: 'panelReporte1',
                title: 'Reporte 1'

            }]
    }
    ]
});
