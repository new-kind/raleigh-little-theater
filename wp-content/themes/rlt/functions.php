<?php

if ( ! class_exists( 'Timber' ) ) {
	add_action( 'admin_notices', function() {
			echo '<div class="error"><p>Timber not activated. Make sure you activate the plugin in <a href="' . esc_url( admin_url( 'plugins.php#timber' ) ) . '">' . esc_url( admin_url( 'plugins.php' ) ) . '</a></p></div>';
		} );
	return;
}

Timber::$dirname = array('templates', 'views');

class StarterSite extends TimberSite {

	function __construct() {
		add_theme_support( 'post-formats' );
		add_theme_support( 'post-thumbnails' );
		add_theme_support( 'menus' );
		add_filter( 'timber_context', array( $this, 'add_to_context' ) );
		add_filter( 'get_twig', array( $this, 'add_to_twig' ) );
		add_action( 'init', array( $this, 'register_post_types' ) );
		add_action( 'init', array( $this, 'register_taxonomies' ) );
		add_action( 'init', array( $this, 'register_nav_menus' ) );
		add_action( 'init', array( $this, 'customImageSizes' ) );
		parent::__construct();
	}

	function customImageSizes(){
		add_image_size( '1600', 1600 );
		add_image_size( '1200', 1200 );
		add_image_size( '800', 800 );
		add_image_size( '400', 400 );
	}

	function register_post_types() {
		
		register_post_type( 'shows',
			array(
				'labels' => array(
					'name' => __( 'Shows' ),
					'singular_name' => __( 'Show' )
				),
				'public' => true,
				'has_archive' => false,
				'menu_icon' => 'dashicons-tickets-alt'
			)
		);

		register_post_type( 'events',
			array(
				'labels' => array(
					'name' => __( 'Events' ),
					'singular_name' => __( 'Event' )
				),
				'public' => true,
				'has_archive' => false,
				'menu_icon' => 'dashicons-tickets'
			)
		);

		register_post_type( 'people',
			array(
				'labels' => array(
					'name' => __( 'People' ),
					'singular_name' => __( 'Person' )
				),
				'public' => true,
				'has_archive' => false,
				'menu_icon' => 'dashicons-groups'
			)
		);

		register_post_type( 'classes',
			array(
				'labels' => array(
					'name' => __( 'Classes' ),
					'singular_name' => __( 'Class' )
				),
				'public' => true,
				'has_archive' => true,
				'menu_icon' => 'dashicons-welcome-learn-more'
			)
		);

		register_post_type( 'sponsors',
			array(
				'labels' => array(
					'name' => __( 'Sponsors' ),
					'singular_name' => __( 'Sponsor' )
				),
				'public' => true,
				'has_archive' => true,
				'menu_icon' => 'dashicons-money'
			)
		);


	}

	function register_nav_menus() {
		// register navs
		register_nav_menu( 'primary', __( 'Primary Nav', 'primary-nav' ) );
		register_nav_menu( 'utility', __( 'Utility Nav', 'utility-nav' ) );
	}

	function register_taxonomies() {
		//this is where you can register custom taxonomies
		register_taxonomy(
			'series',
			array( 'shows' ),
			array(
				'labels' => array(
					'name'              => _x( 'Series', 'taxonomy general name', 'textdomain' ),
					'singular_name'     => _x( 'Series', 'taxonomy singular name', 'textdomain' ),
					'search_items'      => __( 'Search Series', 'textdomain' ),
					'all_items'         => __( 'All Series', 'textdomain' ),
					'parent_item'       => __( 'Parent Series', 'textdomain' ),
					'parent_item_colon' => __( 'Parent Series:', 'textdomain' ),
					'edit_item'         => __( 'Edit Series', 'textdomain' ),
					'update_item'       => __( 'Update Series', 'textdomain' ),
					'add_new_item'      => __( 'Add New Series', 'textdomain' ),
					'new_item_name'     => __( 'New Series Name', 'textdomain' ),
					'menu_name'         => __( 'Series', 'textdomain' ),
				),
				'hierarchical' => true
			)
		);

		register_taxonomy(
			'locations',
			array( 'classes' ),
			array(
				'labels' => array(
					'name'              => _x( 'Locations', 'taxonomy general name', 'textdomain' ),
					'singular_name'     => _x( 'Location', 'taxonomy singular name', 'textdomain' ),
					'search_items'      => __( 'Search Locations', 'textdomain' ),
					'all_items'         => __( 'All Locations', 'textdomain' ),
					'parent_item'       => __( 'Parent Location', 'textdomain' ),
					'parent_item_colon' => __( 'Parent Location:', 'textdomain' ),
					'edit_item'         => __( 'Edit Location', 'textdomain' ),
					'update_item'       => __( 'Update Location', 'textdomain' ),
					'add_new_item'      => __( 'Add New Location', 'textdomain' ),
					'new_item_name'     => __( 'New Location Name', 'textdomain' ),
					'menu_name'         => __( 'Locations', 'textdomain' ),
				),
				'hierarchical' => true
			)
		);

		register_taxonomy(
			'types',
			array( 'classes' ),
			array(
				'labels' => array(
					'name'              => _x( 'Types', 'taxonomy general name', 'textdomain' ),
					'singular_name'     => _x( 'Type', 'taxonomy singular name', 'textdomain' ),
					'search_items'      => __( 'Search Types', 'textdomain' ),
					'all_items'         => __( 'All Types', 'textdomain' ),
					'parent_item'       => __( 'Parent Type', 'textdomain' ),
					'parent_item_colon' => __( 'Parent Type:', 'textdomain' ),
					'edit_item'         => __( 'Edit Type', 'textdomain' ),
					'update_item'       => __( 'Update Type', 'textdomain' ),
					'add_new_item'      => __( 'Add New Type', 'textdomain' ),
					'new_item_name'     => __( 'New Type Name', 'textdomain' ),
					'menu_name'         => __( 'Types', 'textdomain' ),
				),
				'hierarchical' => true
			)
		);

		register_taxonomy(
			'roles',
			array( 'people' ),
			array(
				'labels' => array(
					'name'              => _x( 'Roles', 'taxonomy general name', 'textdomain' ),
					'singular_name'     => _x( 'Role', 'taxonomy singular name', 'textdomain' ),
					'search_items'      => __( 'Search Roles', 'textdomain' ),
					'all_items'         => __( 'All Roles', 'textdomain' ),
					'parent_item'       => __( 'Parent Role', 'textdomain' ),
					'parent_item_colon' => __( 'Parent Role:', 'textdomain' ),
					'edit_item'         => __( 'Edit Role', 'textdomain' ),
					'update_item'       => __( 'Update Role', 'textdomain' ),
					'add_new_item'      => __( 'Add New Role', 'textdomain' ),
					'new_item_name'     => __( 'New Role Name', 'textdomain' ),
					'menu_name'         => __( 'Roles', 'textdomain' ),
				),
				'hierarchical' => true
			)
		);
	}

	function add_to_context( $context ) {
		$context['foo'] = 'bar';
		$context['stuff'] = 'I am a value set in your functions.php file';
		$context['notes'] = 'These values are available everytime you call Timber::get_context();';
		$context['primary_nav'] = new TimberMenu('primary');
		$context['utility_nav'] = new TimberMenu('utility');
		$context['site'] = $this;
		return $context;
	}

	function myfoo( $text ) {
		$text .= ' bar!';
		return $text;
	}

	function add_to_twig( $twig ) {
		/* this is where you can add your own functions to twig */
		$twig->addExtension( new Twig_Extension_StringLoader() );
		$twig->addFilter('myfoo', new Twig_SimpleFilter('myfoo', array($this, 'myfoo')));
		return $twig;
	}

}

new StarterSite();
