<?php

    $context = Timber::get_context();
    $post = new TimberPost();
    $context['post'] = $post;
    $args = array(
        'post_type' => 'classes'
    );
    $context['posts'] = Timber::get_posts( $args ); 
    Timber::render( array( 'pages/page-' . $post->post_name . '.twig', 'pages/page-class-directory.twig' ), $context );