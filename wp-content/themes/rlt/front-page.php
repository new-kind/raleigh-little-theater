<?php

    $context = Timber::get_context();
    $post = new TimberPost();
    $context['post'] = $post;
    $args = array(
        'post_type' => 'post',
        'posts_per_page' => 6
    );
    $context['news'] = Timber::get_posts($args);
    Timber::render( array( 'pages/front-page.twig', 'pages/page.twig' ), $context );