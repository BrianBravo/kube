<?php

/**
 * Database Configuration
 *
 * All of your system's database configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/db.php
 */

return array(
  '*' => array(
   	'server' => 'localhost',
   	'database' => 'kube_craft', // @_@
   	'tablePrefix' => 'craft',
  ),

  'kube.brianbravo.me' => array(
    'user' => 'root', // @_@
    'password' => 'w3bs1t35#$', // @_@
  ),

  'dev.' => array(
    'user' => 'root', // @_@
    'password' => 'root', // @_@
  )
);
