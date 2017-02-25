<?php

    $context = Timber::get_context();
    $post = new TimberPost();
    $context['post'] = $post;
    $context['season_sponsors'] = get_field('sponsors', get_option( 'page_on_front' ));
    Timber::render( array( 'pages/page-our-sponsors.twig' ), $context );