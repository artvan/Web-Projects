Ext.define('Charts1.model.Paciente', {
    extend : 'Ext.data.Model',
    
    fields : [
        {
            name : 'id',
            type : 'string'
        },
        {
            name : 'nombre',
            type : 'string'
        },
        {
            name : 'edad',
            type : 'string'
        },
        {
            name : 'peso',
            type : 'string'
        },
        {
            name : 'sintoma',
            type : 'string'
        }
    ]
});