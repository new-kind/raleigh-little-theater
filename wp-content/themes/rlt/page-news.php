<?php

    $context = Timber::get_context();
    $post = new TimberPost();
    $context['post'] = $post;
    Timber::render( array( 'pages/page-' . $post->post_name . '.twig', 'pages/page-our-staff.twig' ), $context );