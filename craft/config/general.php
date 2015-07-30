<?php

/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/general.php
 */

return array(
  '*' => array(
        
  ),

  'kube.brianbravo.me' => array(
      //'devMode' => true,
      'siteUrl' => 'http://kube.brianbravo.me', // @_@
      // 'testToEmailAddress' => 'brianbravo@me.com',  // @_@
      'environmentVariables' => array(
        'basePath' => '/var/www/kube/public', // @_@ use {basePath} for assets path
        'baseUrl'  => 'http://kube.brianbravo.me', // @_@ use {baseUrl} for URL to assets
      )
  ),

  'dev.' => array(  // @_@
      'siteUrl' => 'http://dev.kube.com',  // @_@
      'useCompressedJs' => true,  // @_@
      'environmentVariables' => array(
        'basePath' => '/Applications/MAMP/htdocs/public',  // @_@
        'baseUrl'  => 'http://dev.kube.com',  // @_@
      )
  )
);
