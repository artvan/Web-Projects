/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('Charts1.Application', {
    extend: 'Ext.app.Application',
    
    name: 'Charts1',
    models: ['Paciente'],

 views: [
        'paciente.VistaRegistroPaciente',
        'paciente.VistaListadoPacientes',
        'paciente.VistaReporte1',
        'paciente.VistaReporte2',
        'main.Main'
    ],

    
    stores: [
        'Pacientes',
        'Reportes'
    ],
    
    launch: function () {

    	
   
           
    }
});
