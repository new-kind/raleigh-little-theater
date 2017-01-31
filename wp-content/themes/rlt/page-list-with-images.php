<?php
    /* Template Name: List with Images */

    $context = Timber::get_context();
    $post = new TimberPost();
    $context['post'] = $post;
    Timber::render( array( 'pages/page-' . $post->post_name . '.twig', 'pages/page-list-with-images.twig' ), $context );