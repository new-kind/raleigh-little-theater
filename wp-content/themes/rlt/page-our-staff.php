<?php

    $context = Timber::get_context();
    $post = new TimberPost();
    $context['post'] = $post;
    $boardArgs = array(
        'post_type' => 'people',
        'posts_per_page' => -1,
        'orderby' => 'title',
        'order' => 'ASC',
        'tax_query' => array(
            array( 
                'taxonomy' => 'roles',
                'field' => 'slug', 
                'terms' => 'board-member')
        )
    );
    $prodArgs = array(
        'post_type' => 'people',
        'orderby' => 'title',
        'order' => 'ASC',
        'posts_per_page' => -1,
        'tax_query' => array(
            array( 
                'taxonomy' => 'roles',
                'field' => 'slug', 
                'terms' => 'staff')
        )
    );
    $largeArgs = array(
        'post_type' => 'people',
        'orderby' => 'title',
        'order' => 'ASC',
        'posts_per_page' => -1,
        'tax_query' => array(
            array( 
                'taxonomy' => 'roles',
                'field' => 'slug', 
                'terms' => 'member-at-large')
        )
    );
    $instructionArgs = array(
        'post_type' => 'people',
        'orderby' => 'title',
        'order' => 'ASC',
        'posts_per_page' => -1,
        'tax_query' => array(
            array( 
                'taxonomy' => 'roles',
                'field' => 'slug',
                'terms' => 'education-faculty')
        )
    );
    $context['board'] = Timber::get_posts($boardArgs);
    $context['production'] = Timber::get_posts($prodArgs);
    $context['large'] = Timber::get_posts($largeArgs);
    $context['instruction'] = Timber::get_posts($instructionArgs);
    Timber::render( array( 'pages/page-' . $post->post_name . '.twig', 'pages/page-our-staff.twig' ), $context );