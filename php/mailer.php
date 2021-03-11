<?php
if(isset($_POST["submit"])) {
    $name = $_POST["name"];
    $frommail = $_POST["email"];
    $postNum = $_POST["zip11"];
    $postaddr = $_POST["addr11"];
    $lesson = $_POST["lesson"];
    $sex = $_POST["radio"];

    $subject = "フォーム情報送信";

  $mailTo = "kakohara@enovate.co.jp";
  $txt = $name."さんがフォームを送信しました。".$postaddr."/".$postNum."/".$lesson."/".$sex;
  $headers = "from: " ."$frommail";

    mail($mailTo,$subject,$txt,$headers);
    header("Location: submit.php?mailsend");
}
?>