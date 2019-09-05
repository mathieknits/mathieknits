<?php
if($_POST["message"]) {
    mail("mathieknits@gmail.com", "Form to email message", $_POST["message"], "From: website_form");
}
?>

<?php
2
 
3
  $to = "mathieknits@gmail.com";
4
 
5
  $headers = "From: $email_input \r\n";
6
 
7
  $headers .= "Reply-To: $email_input \r\n";
8
 
9
  mail($to,$subject_input,$message_input,$headers);
10
 
11
 ?>
