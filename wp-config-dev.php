<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'rlt');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '58MmhX<O+Gb@Jjfk)p(5iw-j%LLz8.9*,Iqqw|z/N*C#OAez*a]EGnC$In$yR^@P');
define('SECURE_AUTH_KEY',  'P#~$f@_DiGI/K9Q{%,#Z4~QbYw&ZJvu2ho`SEfY,{s>NM{8um:cK$@re}3[d!=Lc');
define('LOGGED_IN_KEY',    '`SH;UIv/$t+zY(o/_+t9hJ#YJix7{,rxkSwYk_#Wx}:/EO3s@4v4|p3|uMP719^R');
define('NONCE_KEY',        'Uc?!3DcY,1Q=qB].)6@57b(c*nnn:%@+1nNtLHnf19D5I!QAv]-P`uBmw~dSS!Kz');
define('AUTH_SALT',        '~AcD@tw2C#C{9cO(8C@N(`X~&]e><^V<{I/8.?*a&/t;E_=+1`CYHnw0>(ky NGM');
define('SECURE_AUTH_SALT', 'Ihvw>345#@z|Ok4pfg!9E+sPwO(a*(eANHeJr)nf<jh3p{!HRu&/Njp8eBSz(RX8');
define('LOGGED_IN_SALT',   '`M%chm:hMDy1 ;mTSShl~Q!HR#F84KIa#UevUEK~8UWKAIO{j`34;CXt7XBt-f)a');
define('NONCE_SALT',       '3,}>AcXO{!2ty0g#}pcrs}<sucZ+.xlO=18wj-w/jHMP06+T0&)*FqZp;/-yWU`K');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
