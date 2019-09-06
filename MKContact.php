<?php 
if(isset($_POST['form_button'])){
    $to = "mathieknits@gmail.com"; // this is your Email address
    $from = $_POST['email_input']; // this is the sender's Email address
    $first_name = $_POST['name_input'];
    $subject = "Form submission";
    $subject2 = "Copy of your form submission";
    $message = $name_input . " wrote the following:" . "\n\n" . $_POST['message_input'];
    $message2 = "Here is a copy of your message " . $name_input . "\n\n" . $_POST['message_input'];

    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    mail($to,$subject,$message,$headers);
    mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
    echo "Mail Sent. Thank you " . $name_input . ", we will contact you shortly.";
    // You can also use header('Location: thank_you.php'); to redirect to another page.
    }
?>
