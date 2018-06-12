<?php
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$mensaje=$request->mensaje;
$correo=$request->email;

$to="hadakadaver@gmail.com";
$subject="Nueva Cotizacion De Armalum";
$headers = 'From: Armalum.cl' . "\r\n" .
   'Reply-To: webmaster@yourdot.com' . "\r\n" .
   'X-Mailer: PHP/' . phpversion();

if ($correo!=null){
$result=mail( $to, $subject, $mensaje,$headers);
if($result){
    echo "Su Mensaje se ha enviado Satisfactoriamente, responderemos en breve "; } }

?>