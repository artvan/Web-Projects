/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Charts1.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'Ext.MessageBox'
    ],

    alias: 'controller.main',

    btnItemClickTree: function(me, record, item, index, e, eOpts) {


        switch (record.data.text) {
            case 'Registro de Paciente':
                Ext.getCmp('panelMain').getLayout().setActiveItem(0);
                break;
            case 'Listado de Pacientes':
                Ext.getCmp('panelMain').getLayout().setActiveItem(1);
                Ext.getCmp('tablaPacientes').getView().refresh();
                break;
            case 'Reporte 1':
                Ext.getCmp('panelMain').getLayout().setActiveItem(2);

                var chartBarra = {
                    renderTo: 'panelReporte1',
                    layout: 'fit',
                    width: 600,
                    height: 400,
                    items: {
                        xtype: 'cartesian',
                        id: 'chartBarra',
                        store: 'Reportes',
                        axes: [{
                            type: 'numeric',
                            position: 'left',
                            title: {
                                text: 'Cantidad de Pacientes',
                                fontSize: 20
                            },
                            fields: 'cantidad'
                        }, {
                            type: 'category',
                            position: 'bottom',
                            title: {
                                text: 'Sintomas',
                                fontSize: 20
                            },
                            fields: 'nombre'
                        }],
                        series: {
                            type: 'bar',
                            xField: 'nombre',
                            yField: 'cantidad',
                            style: {
                                fill: 'red'
                            }
                        }
                    }
                };

                if (Ext.getCmp('chartBarra')) {

                    Ext.getCmp('panelReporte1').removeAll(true)
                 
                }

                Ext.getCmp('panelReporte1').add(chartBarra);
    
                break;
            case 'Reporte 2':
                Ext.getCmp('panelMain').getLayout().setActiveItem(3);




                var chartPie = {
                    id: 'chartPie',
                    renderTo: 'panelReporte2',
                    width: 600,
                    height: 400,
                    layout: 'fit',
                    items: {
                        xtype: 'polar',
                        interactions: 'rotate',
                        store: 'Reportes',
                        series: {
                            type: 'pie',
                            label: {
                                field: 'nombre',
                                display: 'rotate'
                            },
                            xField: 'cantidad',
                            donut: 30
                        }
                    }
                };

                 if (Ext.getCmp('chartPie')) {

                    Ext.getCmp('panelReporte2').removeAll(true)
                 
                }

                Ext.getCmp('panelReporte2').add(chartPie);
                break;

        }



    },

    onConfirm: function(choice) {
        if (choice === 'yes') {
            //
        }
    }
});
