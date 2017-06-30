var my = {}; 
my.datosEjemplo = (function (my) {
    "use strict";
    var datos = { productos: [
            {"codigo" : 1, "nombre": "Gorra Nike", "precio" : 30000},
            { "codigo": 2, "nombre": "Sueter Puma", "precio": 80000 },
            { "codigo": 3, "nombre": "Pantolena Adidas", "precio": 40000 },
            { "codigo": 4, "nombre": "Medias Umbro", "precio": 20000 }
        ]
    };
    return {
        datos: datos
    };
})(my);
