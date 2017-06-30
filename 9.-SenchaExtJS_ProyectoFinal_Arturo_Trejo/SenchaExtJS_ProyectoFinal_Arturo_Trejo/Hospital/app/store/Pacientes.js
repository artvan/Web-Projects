Ext.define('Charts1.store.Pacientes', {
    extend: 'Ext.data.Store',
    requires: [
        'Charts1.model.Paciente'
    ],

    model: 'Charts1.model.Paciente',
    autoLoad: true
});
