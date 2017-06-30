/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Charts1.view.main.Main', {
    extend: 'Ext.container.Container',
    requires: [
        'Charts1.view.main.MainController'
  //      'VistaModelo1.view.main.MainModel'
    ],

    xtype: 'app-main',

    controller: 'main',

    layout: {
        type: 'border'
    },

    items: [{
        xtype: 'panel',
        title: 'Menu',
        layout: {
            type: 'vbox',
          align: 'center'

        },
        region: 'west',
        width: 250,
        split: true,
        collapsible: true,
        items: [
    {
    xtype:'treepanel',
    width: 300,
    height: 250,
    root: {
        text: 'IMSS',
        expanded: false,
        children: [

            {
                 text: 'Movimientos',
                  children: [

                    {
                text: 'Registro de Paciente',
                leaf: true
            },
            {
                text: 'Listado de Pacientes',
                leaf: true
            }

                  ]

            },

               {
                 text: 'Gráficas de Reportes',
                  children: [

                    {
                text: 'Reporte 1',
                leaf: true
            },
            {
                text: 'Reporte 2',
                leaf: true
            }

                  ]

            }

          
        ]
    },
      listeners: {
        itemclick: 'btnItemClickTree'
    }
    }

        ]
    }, {
        xtype: 'panel',
        id:"panelMain",
           layout: 'card',
        region: 'center',
        items: [{
            xtype: 'vista-registro-paciente'
        } ,{
            xtype: 'vista-listado-pacientes'
        },{
            xtype: 'vista-reporte1'
        },{
            xtype: 'vista-reporte2'
        } ]

    }]
});
