Ext.define('Charts1.store.Reportes', {
    extend: 'Ext.data.Store',
    fields: ['nombre', 'cantidad'],
    data: [{
        nombre: 'Dolor de estómago',
        cantidad: 0
    }, {
        nombre: 'Resfriado',
        cantidad: 0
    }, {
          nombre: 'Presión alta',
        cantidad: 0
    }, {
           nombre: 'Tos seca/con flemas',
        cantidad: 0
    }],
    autoLoad: true
});
