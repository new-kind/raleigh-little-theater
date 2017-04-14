 <?php   
    $context = Timber::get_context();
    $context['post'] = new TimberPost();

    // get_posts in same custom taxonomy
    $postlist_args = array(
       'posts_per_page'  => -1,
       'meta_key'        => 'end_date',
       'meta_type'       => 'DATE',
       'orderby'         => 'meta_value',
       'order'           => 'ASC',
       'post_type'       => 'events',
    ); 
    $postlist = get_posts( $postlist_args );

    // get ids of posts retrieved from get_posts
    $ids = array();
    foreach ($postlist as $thepost) {
       $ids[] = $thepost->ID;
    }

    // get and echo previous and next post in the same taxonomy        
    $thisindex = array_search($post->ID, $ids);
    if( $thisindex != 0 ){ 
        $context['prev'] = new TimberPost($ids[$thisindex-1]);
    }

    if( $thisindex + 1 != sizeof( $ids ) ){
        $context['next'] = new TimberPost($ids[$thisindex+1]);
    }

    Timber::render( "singles/events.twig", $context );