<?php 

$para = "sscarlos56@gmail.com";
$de = "Web Mine&Oil Equipment Parts <info@mineandoil.com>";

$asunto = "Mensaje desde Web Mine&Oil Equipment Parts";

$mensaje = "<strong>".$_POST["userName"]."</strong>"." (".$_POST["userEmail"].") - (".$_POST["userPhone"].") dice: ".$_POST["userMsg"];

$headers = "MIME-Version:1.0; \r\n";
$headers .= "Content-type: text/html; \r\n charset=utf-8 \r\n";
$headers .= "From: $de \r\n";

if(mail($para,$asunto,$mensaje,$headers))
{
      echo "si";
}
else
{
    echo "no";
}

?>