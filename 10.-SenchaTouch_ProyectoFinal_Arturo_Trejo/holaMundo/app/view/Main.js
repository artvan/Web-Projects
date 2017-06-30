Ext.define('holaMundo.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Welcome',
                iconCls: 'home',
                scrollable: true,

                items: [{
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'My first App on Sencha Touch'
                   },
                   {
                     xtype: "fieldset",
                     items: [{
                          xtype: 'textfield',
                          id: 'CampoNombre',
                          label: 'Nombre',
                     }]
                   },{
                       xtype: 'container',
                       padding: 10,
                       items: [{
                            xtype: "button",
                            text: "Saludar",
                            handler: function(){
                                 var nombre = Ext.getCmp('CampoNombre').getValue();
                                 Ext.Msg.alert('Mensaje', 'Hola ' + nombre);
                            }
                       }]
                   }]         
            },
            {
                title: 'Get Started',
                iconCls: 'action',

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Getting Started'
                    },
                    {
                        xtype: 'video',
                        url: 'http://av.vimeo.com/64284/137/87347327.mp4?token=1330978144_f9b698fea38cd408d52a2393240c896c',
                        posterUrl: 'http://b.vimeocdn.com/ts/261/062/261062119_640.jpg'
                    }
                ]
            }
        ]
    }
});
