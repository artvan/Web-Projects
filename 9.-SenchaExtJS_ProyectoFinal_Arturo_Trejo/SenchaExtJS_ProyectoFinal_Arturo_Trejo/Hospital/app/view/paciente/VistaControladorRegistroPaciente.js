/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Charts1.view.paciente.VistaControladorRegistroPaciente', {
    extend: 'Ext.app.ViewController',

    requires: [
        'Ext.MessageBox'
    ],

    alias: 'controller.vista-controlador-registro-paciente',

    btnRegistrarPaciente: function() {

        var pacientesStore = Ext.getStore("Pacientes");
    

        var paciente = Ext.create('Charts1.model.Paciente', {
            id: Ext.getCmp('campoId').getValue(),
            nombre: Ext.getCmp('campoNombre').getValue(),
            edad: Ext.getCmp('campoEdad').getValue(),
            peso: Ext.getCmp('campoPeso').getValue(),
            sintoma: Ext.getCmp('campoSintoma').getValue()
        });

        pacientesStore.add(paciente);
       // pacientesStore.sync();

        this.actualizarStoreReporte(Ext.getCmp('campoSintoma').getValue());

            console.log(pacientesStore.count());



        Ext.Msg.alert('Registro Existoso', "Paciente registrado!!");

        Ext.getCmp('formRegistroPaciente').reset();
    },

    btnLimpiarCampos: function() {

        Ext.getCmp('formRegistroPaciente').reset();;

    },
    actualizarStoreReporte: function(sintoma) {
        var reportesStore = Ext.getStore("Reportes");
        var cantidadAcutalizada;

        switch (sintoma) {
            case 'Dolor de estómago':

                cantidadAcutalizada = reportesStore.getAt(0).get('cantidad') + 1;

                reportesStore.getAt(0).set('cantidad', cantidadAcutalizada);
                break;
            case 'Resfriado':

                cantidadAcutalizada = reportesStore.getAt(1).get('cantidad') + 1;

                reportesStore.getAt(1).set('cantidad', cantidadAcutalizada);
                break;
            case 'Presión alta':

                cantidadAcutalizada = reportesStore.getAt(2).get('cantidad') + 1;

                reportesStore.getAt(2).set('cantidad', cantidadAcutalizada);
                break;
            case 'Tos seca/con flemas':

                cantidadAcutalizada = reportesStore.getAt(3).get('cantidad') + 1;

                reportesStore.getAt(3).set('cantidad', cantidadAcutalizada);
                break;

        }
    }
});
