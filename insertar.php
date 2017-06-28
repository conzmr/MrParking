<?php
$fName=$_POST['fName'];
$lName=$_POST['lName'];
$email=$_POST['email'];
$username=$_POST['username'];
$clave=$_POST['clave'];

if ($fName!=null&&$lName!=null&&$email!=null&&$username!=null&&$clave!=null){
    $conexion=mysqli_connect("localhost","root","","mydb");
    mysqli_select_db($conexion,"mydb");
    $insertar = "insert into users(FName,LName,email,username,password) values('$fName','$lName','$email','$username','$clave')";
    mysqli_query($conexion,$insertar); 
    mysqli_close($conexion);
    echo "Se han enviado tus datos";
    header("location:camara.html");
}else{
    echo "Por favor completa el formulario";
    header("location:Signup.html");
}
?>