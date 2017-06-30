function Planilla (){
                
    var self = this ;
                                
    self.lista = ko.observableArray([
        {codigo: 1, nombre: "pedro know", nota1:"2", nota2:"2", nota3:"3", nota_final:"3,5"},
        {codigo: 2, nombre: "arturo angular", nota1:"2", nota2:"2", nota3:"3", nota_final:"3,5"},
        {codigo: 3, nombre: "camilo JSON", nota1:"2,3", nota2:"3", nota3:"3", nota_final:"4,0"}
    ]);

}