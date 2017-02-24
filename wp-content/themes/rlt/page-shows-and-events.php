<?php

    $context = Timber::get_context();
    $post = new TimberPost();
    $context['post'] = $post;
    $args = array(
        'post_type' => array(
            'events',
            'shows',
        ),
        'orderby' => 'meta_value',
        'meta_key' => 'end_date',
        'order' => 'ASC'
    );
    $context['posts'] = Timber::get_posts( $args ); 
    Timber::render( array( 'pages/page-' . $post->post_name . '.twig', 'pages/page-shows-and-events.twig' ), $context );