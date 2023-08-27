<?php
    require_once($_SERVER['DOCUMENT_ROOT'] . '/smartbasket/php/phpmailer/phpmailer.php');

		// *** SMTP *** //

		 require_once($_SERVER['DOCUMENT_ROOT'] . '/smartbasket/php/phpmailer/smtp.php');
		 const HOST = 'smtp.mail.ru';
		 const LOGIN = 'mangal.cg@mail.ru';
		 const PASS = 'mHbeGqDjc7Xujhz1Qmir';
		 const PORT = 465;

		// *** /SMTP *** //
   
    const SENDER = 'mangal.cg@mail.ru';
    const CATCHER = 'mangal.cg@mail.ru';
    const SUBJECT = 'Mangal grill & cafe';
    const CHARSET = 'UTF-8';
    