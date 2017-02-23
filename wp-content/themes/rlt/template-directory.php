<?php

    /* Template Name: Class Directory */
    $context = Timber::get_context();
    $post = new TimberPost();
    $context['post'] = $post;
    $args = array(
        'post_type' => 'classes',
        'posts_per_page' => -1
    );
    $context['posts'] = Timber::get_posts($args);
    $context['locations'] = Timber::get_terms('locations');
    $context['types'] = Timber::get_terms('types');
    $context["acf"] = get_field_objects($context["posts"][0]->ID);
    $context['kids_ages'] = get_field_object('field_588b93ffd574a');
    $context['teens_ages'] = get_field_object('field_588b956071854');
    Timber::render( array( 'pages/page-class-directory.twig' ), $context );