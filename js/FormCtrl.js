function FormCtrl ($scope,$http,$rootScope){
$scope.tipo=['Fijo','Proyectante','Abatir','Corredera','Correo','Oscilobatiente','Puerta'];
$scope.color=['Blanco','Gris','Roble','Nogal','Titanio','Negro','Grafito'];
$scope.material=[{aluminio:'aluminio'}, { pvc:'pvc'}];
$scope.cristal=['Cristal Monolitico','Cristal DVH Simple','Cristal de Seguridad','DVH ACUSTICO',
'DVH Control Solar','DVH Mixto Ac-Cs'];

var form = this;



form.ventanas= [{
  "id": 1,
  "cantidadmodel": "",
  "materialmodel":"",
  "colormodel": "",
  "cristalmodel": "",
  "anchomodel":"",
  "altomodel":"",
  "tipomodel":""

}];


form.agregar= function(){

  if(form.ventana.cantidadmodel!=null && form.ventana.materialmodel!=null && form.ventana.colormodel!=null && form.ventana.cristalmodel!=null && form.ventana.anchomodel!=null && form.ventana.altomodel!=null && form.ventana.tipomodel!=null){
  form.ventana.id=form.ventanas.length+1;
  form.ventanas.push(form.ventana);
  console.log(form.ventana);
 form.ventana=null;
 
 
 }

 }  //toda  la  funcion

 $scope.enviar=function(send){
  var window="";
  angular.forEach(form.ventanas, function(value, key){
    if (key===0)            
    {                           
      return;   
    }
    window=' ID: '+value.id+'\n Cantidad: '+value.cantidadmodel+'\n Tipo: '+value.tipomodel+'\n Color: '+value.colormodel+'\n Cristal: '+value.cristalmodel+'\n Medidas  -Ancho: '+value.anchomodel+' -Alto: '+value.altomodel+'<br><br> '+window;
   console.log(window);
   console.log(2);
 });  
  $scope.mensaje='Nombre: '+$scope.nombre+'\n Direccion: '+$scope.direccion+'\n Email: '+$scope.email+'\n Telefono: '+$scope.telefono+'\n Tipo de Persona: '+$scope.tipopersona+' \n Notas: '+$scope.nota+'\nVentanas \n'+window;
  if ($scope.mensaje!=null){
  $http.post('model/enviar.php',{'mensaje':$scope.mensaje,'email':$scope.email})
  .then(function(data){
  console.log("entra");
  console.log("sent");
    console.log(data.data);
    if ($scope.cotizar.$valid){
      bootbox.alert({
        message: data.data,
        size: 'small'
    });
  }
  
  })   }
  }
  

} //todo el controlador
app.controller('FormCtrl',FormCtrl);
